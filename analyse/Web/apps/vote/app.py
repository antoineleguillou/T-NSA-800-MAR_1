from flask import Flask, render_template, request, make_response, g
from redis import Redis
from rediscluster import RedisCluster
import os
import socket
import random
import json
import logging

option_a = os.getenv('OPTION_A', "Cats")
option_b = os.getenv('OPTION_B', "Dogs")

redis_cluster_uri = os.getenv('REDIS_CLUSTER_URI', None)
redis_host = os.getenv('REDIS_HOST', "")
redis_port = int(os.getenv('REDIS_PORT', "6379"))
redis_password = os.getenv('REDIS_PASSWORD', "")

hostname = socket.gethostname()

app = Flask(__name__)

gunicorn_error_logger = logging.getLogger('gunicorn.error')
app.logger.handlers.extend(gunicorn_error_logger.handlers)
app.logger.setLevel(logging.INFO)


def get_redis():
    if not hasattr(g, 'redis'):
        if (redis_cluster_uri is None):
            g.redis = Redis(host=redis_host, db=0, socket_timeout=5,
                            port=redis_port, password=redis_password)
        else:
            g.redis = RedisCluster.from_url(
                redis_cluster_uri, skip_full_coverage_check=True)

    return g.redis


def push_to_redis(redis, key, value):
    redis.rpush(key, value)


@app.route(os.getenv("PREFIX") + "/", methods=['POST', 'GET'])
def hello():
    voter_id = request.cookies.get('voter_id')
    if not voter_id:
        voter_id = hex(random.getrandbits(64))[2:-1]

    vote = None

    if request.method == 'POST':
        redis = get_redis()
        vote = request.form['vote']
        app.logger.info('Received vote for %s', vote)
        data = json.dumps({'voter_id': voter_id, 'vote': vote})

        push_to_redis(redis, 'votes', data)

    resp = make_response(render_template(
        'index.html',
        option_a=option_a,
        option_b=option_b,
        hostname=hostname,
        vote=vote,
    ))
    resp.set_cookie('voter_id', voter_id)
    return resp


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
