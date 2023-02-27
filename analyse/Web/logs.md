Récupération des images docker
Variable d'environnement :

LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:
LESSCLOSE=/usr/bin/lesspipe %s %s
LANG=C.UTF-8
SUDO_GID=1000
USERNAME=root
SUDO_COMMAND=/bin/su
USER=root
PWD=/home/admusr
HOME=/root
SUDO_USER=admusr
SUDO_UID=1000
MAIL=/var/mail/root
SHELL=/bin/bash
TERM=xterm-256color
SHLVL=1
LOGNAME=root
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
LESSOPEN=| /usr/bin/lesspipe %s
_=/usr/bin/printenv

Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 0.0.0.0:http            0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:http-alt        0.0.0.0:*               LISTEN
tcp        0      0 localhost:domain        0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:ssh             0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:5858            0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:5000            0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:5001            0.0.0.0:*               LISTEN
tcp        0    208 default-group8-web.:ssh 163.5.23.20:15570       ESTABLISHED
tcp6       0      0 [::]:http               [::]:*                  LISTEN
tcp6       0      0 [::]:http-alt           [::]:*                  LISTEN
tcp6       0      0 [::]:ssh                [::]:*                  LISTEN
tcp6       0      0 [::]:5858               [::]:*                  LISTEN
tcp6       0      0 [::]:5000               [::]:*                  LISTEN
tcp6       0      0 [::]:5001               [::]:*                  LISTEN
udp        0      0 localhost:domain        0.0.0.0:*
udp        0      0 default-group8-w:bootpc 0.0.0.0:*
raw6       0      0 [::]:ipv6-icmp          [::]:*                  7
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   Path
unix  2      [ ]         DGRAM                    72228    /run/user/1000/systemd/notify
unix  2      [ ACC ]     SEQPACKET  LISTENING     14438    /run/udev/control
unix  2      [ ACC ]     STREAM     LISTENING     72231    /run/user/1000/systemd/private
unix  2      [ ACC ]     STREAM     LISTENING     72235    /run/user/1000/bus
unix  2      [ ACC ]     STREAM     LISTENING     72237    /run/user/1000/gnupg/S.gpg-agent.browser
unix  2      [ ACC ]     STREAM     LISTENING     72238    /run/user/1000/gnupg/S.gpg-agent
unix  2      [ ACC ]     STREAM     LISTENING     72239    /run/user/1000/snapd-session-agent.socket
unix  2      [ ACC ]     STREAM     LISTENING     72240    /run/user/1000/gnupg/S.gpg-agent.ssh
unix  2      [ ACC ]     STREAM     LISTENING     72241    /run/user/1000/gnupg/S.dirmngr
unix  2      [ ACC ]     STREAM     LISTENING     72242    /run/user/1000/gnupg/S.gpg-agent.extra
unix  2      [ ACC ]     STREAM     LISTENING     22643    @irqbalance1286.sock
unix  2      [ ACC ]     STREAM     LISTENING     20523    /run/snapd.socket
unix  2      [ ACC ]     STREAM     LISTENING     20524    /run/snapd-snap.socket
unix  2      [ ACC ]     STREAM     LISTENING     20540    /var/run/dbus/system_bus_socket
unix  2      [ ACC ]     STREAM     LISTENING     20550    /run/acpid.socket
unix  2      [ ACC ]     STREAM     LISTENING     20562    /run/uuidd/request
unix  2      [ ACC ]     STREAM     LISTENING     20566    /run/docker.sock
unix  3      [ ]         DGRAM                    14405    /run/systemd/notify
unix  2      [ ACC ]     STREAM     LISTENING     14408    /run/systemd/private
unix  7      [ ]         DGRAM                    14418    /run/systemd/journal/dev-log
unix  2      [ ]         DGRAM                    14421    /run/systemd/journal/syslog
unix  2      [ ACC ]     STREAM     LISTENING     14423    /run/systemd/fsck.progress
unix  2      [ ACC ]     STREAM     LISTENING     14425    /run/systemd/journal/stdout
unix  9      [ ]         DGRAM                    14427    /run/systemd/journal/socket
unix  2      [ ACC ]     STREAM     LISTENING     14440    /run/lvm/lvmpolld.socket
unix  2      [ ACC ]     STREAM     LISTENING     14443    /run/lvm/lvmetad.socket
unix  2      [ ACC ]     STREAM     LISTENING     20535    /var/lib/lxd/unix.socket
unix  2      [ ACC ]     STREAM     LISTENING     25459    /run/containerd/containerd.sock.ttrpc
unix  2      [ ACC ]     STREAM     LISTENING     25460    /run/containerd/containerd.sock
unix  2      [ ACC ]     STREAM     LISTENING     26717    /var/run/docker/metrics.sock
unix  2      [ ACC ]     STREAM     LISTENING     26545    /var/run/docker/libnetwork/6ef23c64b99b.sock
unix  2      [ ACC ]     STREAM     LISTENING     20530    @ISCSIADM_ABSTRACT_NAMESPACE
unix  2      [ ACC ]     STREAM     LISTENING     27553    /run/containerd/s/d8d6807df6b9a9792514503b7af817e336f78d633edbdc718b42699bd87f00d2
unix  2      [ ACC ]     STREAM     LISTENING     28037    /run/containerd/s/383e75d116c0b9dc2fb9e0dda945286ffdb8d614c03b3caaf77a89afcc024f29
unix  2      [ ACC ]     STREAM     LISTENING     28039    /run/containerd/s/ae6befe28e6f58bf1ca06767a235c1aa83bc99c99dcc9ba6599c6d3fafa2ed13
unix  2      [ ACC ]     STREAM     LISTENING     28046    /run/containerd/s/481fe534d571d2dfec089b66f128ce2746bd8e8f350e57aff818c6f006fd999b
unix  3      [ ]         STREAM     CONNECTED     28470
unix  3      [ ]         STREAM     CONNECTED     21983    /var/run/dbus/system_bus_socket
unix  3      [ ]         STREAM     CONNECTED     20257    /run/systemd/journal/stdout
unix  3      [ ]         DGRAM                    18074
unix  3      [ ]         STREAM     CONNECTED     28903    /run/containerd/containerd.sock.ttrpc
unix  3      [ ]         STREAM     CONNECTED     28066    /run/containerd/s/481fe534d571d2dfec089b66f128ce2746bd8e8f350e57aff818c6f006fd999b
unix  3      [ ]         STREAM     CONNECTED     22096
unix  3      [ ]         DGRAM                    14407
unix  3      [ ]         DGRAM                    18075
unix  3      [ ]         DGRAM                    14406
unix  3      [ ]         STREAM     CONNECTED     27565    /run/containerd/s/d8d6807df6b9a9792514503b7af817e336f78d633edbdc718b42699bd87f00d2
unix  3      [ ]         DGRAM                    18076
unix  3      [ ]         STREAM     CONNECTED     28052
unix  3      [ ]         STREAM     CONNECTED     23145    /var/run/dbus/system_bus_socket
unix  3      [ ]         DGRAM                    18077
unix  3      [ ]         STREAM     CONNECTED     28558
unix  3      [ ]         STREAM     CONNECTED     20256
unix  3      [ ]         STREAM     CONNECTED     28559    /run/containerd/containerd.sock.ttrpc
unix  3      [ ]         STREAM     CONNECTED     28041
unix  2      [ ]         DGRAM                    72851
unix  2      [ ]         DGRAM                    22633
unix  2      [ ]         DGRAM                    14929
unix  3      [ ]         STREAM     CONNECTED     20169    /var/run/dbus/system_bus_socket
unix  3      [ ]         STREAM     CONNECTED     72974
unix  3      [ ]         STREAM     CONNECTED     22880
unix  3      [ ]         STREAM     CONNECTED     22777    /var/run/dbus/system_bus_socket
unix  3      [ ]         DGRAM                    14615
unix  3      [ ]         STREAM     CONNECTED     22648
unix  3      [ ]         STREAM     CONNECTED     20167
unix  2      [ ]         DGRAM                    20160
unix  3      [ ]         STREAM     CONNECTED     22761
unix  3      [ ]         STREAM     CONNECTED     22649    /var/run/dbus/system_bus_socket
unix  3      [ ]         STREAM     CONNECTED     21929    /run/systemd/journal/stdout
unix  3      [ ]         DGRAM                    14614
unix  3      [ ]         STREAM     CONNECTED     21957    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     72975
unix  3      [ ]         STREAM     CONNECTED     20542
unix  2      [ ]         DGRAM                    72848
unix  3      [ ]         STREAM     CONNECTED     21562    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     72841
unix  3      [ ]         STREAM     CONNECTED     20168
unix  3      [ ]         STREAM     CONNECTED     72192    /run/systemd/journal/stdout
unix  3      [ ]         DGRAM                    72230
unix  3      [ ]         STREAM     CONNECTED     18035    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     26719    /run/containerd/containerd.sock
unix  3      [ ]         STREAM     CONNECTED     29051    /run/containerd/containerd.sock.ttrpc
unix  2      [ ]         DGRAM                    22660
unix  3      [ ]         STREAM     CONNECTED     29050
unix  3      [ ]         DGRAM                    16770
unix  3      [ ]         DGRAM                    16771
unix  3      [ ]         STREAM     CONNECTED     26718
unix  2      [ ]         DGRAM                    72185
unix  2      [ ]         DGRAM                    20518
unix  3      [ ]         STREAM     CONNECTED     27558
unix  2      [ ]         DGRAM                    18922
unix  3      [ ]         STREAM     CONNECTED     27567    /run/containerd/s/383e75d116c0b9dc2fb9e0dda945286ffdb8d614c03b3caaf77a89afcc024f29
unix  3      [ ]         DGRAM                    72229
unix  3      [ ]         STREAM     CONNECTED     18105    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     26722    /run/containerd/containerd.sock
unix  3      [ ]         STREAM     CONNECTED     27557
unix  2      [ ]         DGRAM                    17001
unix  3      [ ]         STREAM     CONNECTED     28057    /run/containerd/s/ae6befe28e6f58bf1ca06767a235c1aa83bc99c99dcc9ba6599c6d3fafa2ed13
unix  3      [ ]         STREAM     CONNECTED     28869
unix  3      [ ]         STREAM     CONNECTED     18894
unix  3      [ ]         STREAM     CONNECTED     26721
unix  3      [ ]         STREAM     CONNECTED     18702
unix  3      [ ]         STREAM     CONNECTED     28429    /run/containerd/containerd.sock.ttrpc
unix  3      [ ]         STREAM     CONNECTED     21982
unix  3      [ ]         STREAM     CONNECTED     20125
unix  3      [ ]         STREAM     CONNECTED     20686
unix  3      [ ]         STREAM     CONNECTED     15702    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     22138
unix  3      [ ]         STREAM     CONNECTED     22610
unix  3      [ ]         STREAM     CONNECTED     20425
unix  3      [ ]         STREAM     CONNECTED     20048    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     20171    /var/run/dbus/system_bus_socket
unix  3      [ ]         STREAM     CONNECTED     20047
unix  3      [ ]         STREAM     CONNECTED     15371
unix  3      [ ]         STREAM     CONNECTED     20127    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     21545
unix  3      [ ]         STREAM     CONNECTED     15708    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     19860
unix  3      [ ]         STREAM     CONNECTED     25998    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     21401
unix  3      [ ]         STREAM     CONNECTED     20170    /var/run/dbus/system_bus_socket
unix  3      [ ]         DGRAM                    17003
unix  3      [ ]         STREAM     CONNECTED     20427    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     25996
unix  2      [ ]         DGRAM                    14236
unix  3      [ ]         STREAM     CONNECTED     20543
unix  3      [ ]         STREAM     CONNECTED     21546    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     16978    /run/systemd/journal/stdout
unix  3      [ ]         DGRAM                    17006
unix  3      [ ]         STREAM     CONNECTED     21547    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     21186
unix  3      [ ]         STREAM     CONNECTED     15688
unix  3      [ ]         STREAM     CONNECTED     19872    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     23221    /var/run/dbus/system_bus_socket
unix  2      [ ]         DGRAM                    18061
unix  3      [ ]         DGRAM                    17004
unix  3      [ ]         STREAM     CONNECTED     20348    /run/systemd/journal/stdout
unix  3      [ ]         STREAM     CONNECTED     17618
unix  3      [ ]         STREAM     CONNECTED     16654    /run/systemd/journal/stdout
unix  2      [ ]         DGRAM                    15709
unix  3      [ ]         DGRAM                    17005
unix  3      [ ]         STREAM     CONNECTED     21952
unix  3      [ ]         STREAM     CONNECTED     14744

config.json

{
        "auths": {
                "https://index.docker.io/v1/": {
                        "auth": "bWF4MTMwMTA6NjBENDA1MkI1OTMwNDg2NDIwMTA2NjRDQkY3Rjc5NkI="
                }
        }
}

Authorized key
no-port-forwarding,no-agent-forwarding,no-X11-forwarding,command="echo 'Please login as the user \"admusr\" rather than the user \"root\".';echo;sleep 10;exit 142" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDvFar970M6BeXWbda1xs76wgL0h98oKbObFRPRxCITeC4JuIOdVQF0wL0yed8oAU0bC+SzxFnHNzQNOTtjZ/8KFA0LS3+x0xD/mUl3xJJXoITvpJISrTLOZAxOgmVuG18GKIXYTE/r5+THwsdjatH4+FGVeE7jpoPVk7zIB9xYPjg/zvjmtxzMJVC0c9t73qiVn50K2iVvzrAQXSUdu7om3xfItG0qaxTu0qNv3yW1EtJj3ymSNjWsXfAcZcMYIMG4F62lgP9inNKZW6l02zziJawBnJwEGbRzpRPh2x3wwrfXyt84hnvic1LzzyEjbehBhnjgZuRYWRyo1VLDS3uz0KR+zJE07GVkenrUZfe6FgpI0aBCEpJMgs20wy0kOXdNn31bKFJv/pvnPLsiI6EFYv5epEvRdBW4BCFScSeWWUeL/67vaDYSHL7Mzp+w0z/VQzDk0MI3HD38NOofmjR+V/D0w2TSqotTAaJHxDn2+3OyXDp8Fnhx3V1nyeKhMLumXUyIfgqzRrnRSqDJlYu2skI0BRmuNxFjVQzd7eWFF9WVgvpU3ZUw4edHNqbc/P6qXEJqJRbiU26vzxxyEjWG7ESCYBgY2KSerZbTMXZVkJgVMs64o+1xmAgPrDd7419koTWc1I4MQCDolXJ74JQ/D1FeAoNbqnm3isF6qK1JhQ==

Conteneur VOTE : 
Variable d'environnement:
HOSTNAME=b29a12852684
PYTHON_VERSION=3.9.16
PREFIX=/vote
PWD=/app
PYTHON_SETUPTOOLS_VERSION=58.1.0
HOME=/root
LANG=C.UTF-8
GPG_KEY=E3FF2839C048B25C084DEBE9B26995E310250568
TERM=xterm
SHLVL=1
PYTHON_PIP_VERSION=22.0.4
PYTHON_GET_PIP_SHA256=394be00f13fa1b9aaa47e911bdb59a09c3b2986472130f30aa0bfaf7f3980637
PYTHON_GET_PIP_URL=https://github.com/pypa/get-pip/raw/d5cb0afaf23b8520f1bbcfed521017b4a95f5c01/public/get-pip.py
PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
_=/usr/bin/printenv

Donnée du dockerfile : 
# Using official python runtime base image
FROM python:3.9-slim

# add curl for healthcheck
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set the application directory
WORKDIR /app

# Install our requirements.txt
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Copy our code from the current folder to /app inside the container
COPY . .

# Make port 80 available for links and/or publish
EXPOSE 80

# Define our command to be run when launching the container
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:80", "--log-file", "-", "--access-logfile", "-", "--workers", "4", "--keep-alive", "0"]

Donnée app.py

from flask import Flask, render_template, request, make_response, g
from redis import Redis
import os
import socket
import random
import json
import logging

option_a = os.getenv('OPTION_A', "Cats")
option_b = os.getenv('OPTION_B', "Dogs")
hostname = socket.gethostname()

app = Flask(__name__)

gunicorn_error_logger = logging.getLogger('gunicorn.error')
app.logger.handlers.extend(gunicorn_error_logger.handlers)
app.logger.setLevel(logging.INFO)

def get_redis():
    if not hasattr(g, 'redis'):
        g.redis = Redis(host="redis", db=0, socket_timeout=5)
    return g.redis

@app.route(os.getenv("PREFIX") + "/", methods=['POST','GET'])
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
        redis.rpush('votes', data)

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

Données requirement.txt

Flask
Redis
gunicorn

Donnés /app/static/stylesheets :

@import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,600);

*{
  box-sizing:border-box;
}
html,body{
  margin: 0;
  padding: 0;
  background-color: #F7F8F9;
  height: 100vh;
  font-family: 'Open Sans';
}

button{
  border-radius: 0;
  width: 100%;
  height: 50%;
}

button[type="submit"] {
  -webkit-appearance:none; -webkit-border-radius:0;
}

button i{
  float: right;
  padding-right: 30px;
  margin-top: 3px;
}

button.a{
  background-color: #1aaaf8;
}

button.b{
  background-color: #00cbca;
}

#tip{
  text-align: left;
  color: #c0c9ce;
  font-size: 14px;
}

#hostname{
  position: absolute;
  bottom: 100px;
  right: 0;
  left: 0;
  color: #8f9ea8;
  font-size: 24px;
}

#content-container{
  z-index: 2;
  position: relative;
  margin: 0 auto;
  display: table;
  padding: 10px;
  max-width: 940px;
  height: 100%;
}
#content-container-center{
  display: table-cell;
  text-align: center;
}

#content-container-center h3{
  color: #254356;
}

#choice{
  transition: all 300ms linear;
  line-height: 1.3em;
  display: inline;
  vertical-align: middle;
  font-size: 3em;
}
#choice a{
  text-decoration:none;
}
#choice a:hover, #choice a:focus{
  outline:0;
  text-decoration:underline;
}

#choice button{
  display: block;
  height: 80px;
  width: 330px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size:18px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 50px;
}

#choice button.a:hover{
  background-color: #1488c6;
}

#choice button.b:hover{
  background-color: #00a2a1;
}

#choice button.a:focus{
  background-color: #1488c6;
}

#choice button.b:focus{
  background-color: #00a2a1;
}

#background-stats{
  z-index:1;
  height:100%;
  width:100%;
  position:absolute;
}
#background-stats div{
  transition: width 400ms ease-in-out;
  display:inline-block;
  margin-bottom:-4px;
  width:50%;
  height:100%;
}

Données /app/templates :

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{option_a}} vs {{option_b}}!</title>
    <base href="/index.html">
    <meta name = "viewport" content = "width=device-width, initial-scale = 1.0">
    <meta name="keywords" content="docker-compose, docker, stack">
    <meta name="author" content="Tutum dev team">
    <link rel='stylesheet' href="{{ url_for('static',filename='stylesheets/style.css') }}" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  </head>
  <body>
    <div id="content-container">
      <div id="content-container-center">
        <h3>{{option_a}} vs {{option_b}}!</h3>
        <form id="choice" name='form' method="POST" action="/vote/">
          <button id="a" type="submit" name="vote" class="a" value="a">{{option_a}}</button>
          <button id="b" type="submit" name="vote" class="b" value="b">{{option_b}}</button>
        </form>
        <div id="tip">
          (Tip: you can change your vote)
        </div>
        <div id="hostname">
          Processed by container ID {{hostname}}
        </div>
      </div>
    </div>
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>

    {% if vote %}
    <script>
      var vote = "{{vote}}";

      if(vote == "a"){
        $(".a").prop('disabled', true);
        $(".a").html('{{option_a}} <i class="fa fa-check-circle"></i>');
        $(".b").css('opacity','0.5');
      }
      if(vote == "b"){
        $(".b").prop('disabled', true);
        $(".b").html('{{option_b}} <i class="fa fa-check-circle"></i>');
        $(".a").css('opacity','0.5');
      }
    </script>
    {% endif %}
  </body>
</html>

Container RESULT 

Dockerfile :

FROM node:18-slim

# add curl for healthcheck
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    tini \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# have nodemon available for local dev use (file watching)
RUN npm install -g nodemon

COPY package*.json ./

RUN npm ci \
 && npm cache clean --force \
 && mv /app/node_modules /node_modules

COPY . .

ENV PORT 80
EXPOSE 80

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["node", "server.js"]

docker-compose.test.yml

version: '2'

services:

  sut:
    build: ./tests/
    depends_on:
      - vote
      - result
      - worker
    networks:
      - front-tier

  vote:
    build: ../vote/
    ports: ["80"]
    depends_on:
      - redis
      - db
    networks:
      - front-tier
      - back-tier

  result:
    build: .
    ports: ["80"]
    depends_on:
      - redis
      - db
    networks:
      - front-tier
      - back-tier

  worker:
    build: ../worker/
    depends_on:
      - redis
      - db
    networks:
      - back-tier

  redis:
    image: redis:alpine
    networks:
      - back-tier

  db:
    image: postgres:9.4
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "postgres"
    volumes:
      - "db-data:/var/lib/postgresql/data"
    networks:
      - back-tier

volumes:
  db-data:

networks:
  front-tier:
  back-tier:

package-lock.json

{
  "name": "result",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "result",
      "version": "1.0.0",
      "license": "MIT",
      "dependencies": {
        "async": "^3.1.0",
        "body-parser": "^1.19.0",
        "cookie-parser": "^1.4.4",
        "express": "^4.17.1",
        "method-override": "^3.0.0",
        "pg": "^8.8.0",
        "socket.io": "^2.5.0",
        "stoppable": "^1.1.0"
      }
    },
    "node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/after": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/after/-/after-0.8.2.tgz",
      "integrity": "sha512-QbJ0NTQ/I9DI3uSJA4cbexiwQeRAfjPScqIbSjUDd9TOrcg6pTkdgziesOqxBMBzit8vFCTwrP27t13vFOORRA=="
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
    },
    "node_modules/arraybuffer.slice": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/arraybuffer.slice/-/arraybuffer.slice-0.0.7.tgz",
      "integrity": "sha512-wGUIVQXuehL5TCqQun8OW81jGzAWycqzFF8lFp+GOM5BXLYj3bKNsYC4daB7n6XjCqxQA/qgTJ+8ANR3acjrog=="
    },
    "node_modules/async": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.4.tgz",
      "integrity": "sha512-iAB+JbDEGXhyIUavoDl9WP/Jj106Kz9DEn1DPgYw5ruDn0e3Wgi3sKFm55sASdGBNOQB8F59d9qQ7deqrHA8wQ=="
    },
    "node_modules/backo2": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",
      "integrity": "sha512-zj6Z6M7Eq+PBZ7PQxl5NT665MvJdAkzp0f60nAJ+sLaSCBPMwVak5ZegFbgVCzFcCJTKFoMizvM5Ld7+JrRJHA=="
    },
    "node_modules/base64-arraybuffer": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-0.1.4.tgz",
      "integrity": "sha512-a1eIFi4R9ySrbiMuyTGx5e92uRH5tQY6kArNcFaKBUleIoLjdjBg7Zxm3Mqm3Kmkf27HLR/1fnxX9q8GQ7Iavg==",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/base64id": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",
      "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",
      "engines": {
        "node": "^4.5.0 || >= 5.9"
      }
    },
    "node_modules/blob": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/blob/-/blob-0.0.5.tgz",
      "integrity": "sha512-gaqbzQPqOoamawKg0LGVd7SzLgXS+JH61oWprSLH+P+abTczqJbhTR8CmJ2u9/bUYNmHTGJx/UEmn6doAvvuig=="
    },
    "node_modules/body-parser": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.1.tgz",
      "integrity": "sha512-jWi7abTbYwajOytWCQc37VulmWiRae5RyTpaCyDcS5/lMdtwSz5lOpDE67srw/HYe35f1z3fDQw+3txg7gNtWw==",
      "dependencies": {
        "bytes": "3.1.2",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "on-finished": "2.4.1",
        "qs": "6.11.0",
        "raw-body": "2.5.1",
        "type-is": "~1.6.18",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/buffer-writer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/buffer-writer/-/buffer-writer-2.0.0.tgz",
      "integrity": "sha512-a7ZpuTZU1TRtnwyCNW3I5dc0wWNC3VR9S++Ewyk2HHZdrO3CQJqSpd+95Us590V6AL7JqUAH2IwZ/398PmNFgw==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/component-bind": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/component-bind/-/component-bind-1.0.0.tgz",
      "integrity": "sha512-WZveuKPeKAG9qY+FkYDeADzdHyTYdIboXS59ixDeRJL5ZhxpqUnxSOwop4FQjMsiYm3/Or8cegVbpAHNA7pHxw=="
    },
    "node_modules/component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
    },
    "node_modules/component-inherit": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/component-inherit/-/component-inherit-0.0.3.tgz",
      "integrity": "sha512-w+LhYREhatpVqTESyGFg3NlP6Iu0kEKUHETY9GoZP/pQyW4mHFZuFWRUCIqVPZ36ueVLtoOEZaAqbCF2RDndaA=="
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.1.tgz",
      "integrity": "sha512-ZwrFkGJxUR3EIoXtO+yVE69Eb7KlixbaeAWfBQB9vVsNn/o+Yw69gBWSSDK825hQNdN+wF8zELf3dFNl/kxkUA==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-parser": {
      "version": "1.4.6",
      "resolved": "https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.6.tgz",
      "integrity": "sha512-z3IzaNjdwUC2olLIB5/ITd0/setiaFMLYiZJle7xg5Fe9KWAceil7xszYfHHBtDFYLSgJduS2Ty0P1uJdPDJeA==",
      "dependencies": {
        "cookie": "0.4.1",
        "cookie-signature": "1.0.6"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
    },
    "node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="
    },
    "node_modules/encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/engine.io": {
      "version": "3.6.1",
      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-3.6.1.tgz",
      "integrity": "sha512-dfs8EVg/i7QjFsXxn7cCRQ+Wai1G1TlEvHhdYEi80fxn5R1vZ2K661O6v/rezj1FP234SZ14r9CmJke99iYDGg==",
      "dependencies": {
        "accepts": "~1.3.4",
        "base64id": "2.0.0",
        "cookie": "~0.4.1",
        "debug": "~4.1.0",
        "engine.io-parser": "~2.2.0",
        "ws": "~7.4.2"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/engine.io-client": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/engine.io-client/-/engine.io-client-3.5.3.tgz",
      "integrity": "sha512-qsgyc/CEhJ6cgMUwxRRtOndGVhIu5hpL5tR4umSpmX/MvkFoIxUTM7oFMDQumHNzlNLwSVy6qhstFPoWTf7dOw==",
      "dependencies": {
        "component-emitter": "~1.3.0",
        "component-inherit": "0.0.3",
        "debug": "~3.1.0",
        "engine.io-parser": "~2.2.0",
        "has-cors": "1.1.0",
        "indexof": "0.0.1",
        "parseqs": "0.0.6",
        "parseuri": "0.0.6",
        "ws": "~7.4.2",
        "xmlhttprequest-ssl": "~1.6.2",
        "yeast": "0.1.2"
      }
    },
    "node_modules/engine.io-client/node_modules/debug": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
      "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/engine.io-parser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-2.2.1.tgz",
      "integrity": "sha512-x+dN/fBH8Ro8TFwJ+rkB2AmuVw9Yu2mockR/p3W8f8YtExwFgDvBDi0GWyb4ZLkpahtDGZgtr3zLovanJghPqg==",
      "dependencies": {
        "after": "0.8.2",
        "arraybuffer.slice": "~0.0.7",
        "base64-arraybuffer": "0.1.4",
        "blob": "0.0.5",
        "has-binary2": "~1.0.2"
      }
    },
    "node_modules/engine.io/node_modules/debug": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
      "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
      "deprecated": "Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/engine.io/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "4.18.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
      "integrity": "sha512-5/PsL6iGPdfQ/lKM1UuielYgv3BUoJfz1aUwU9vHZ+J7gyvwdQXFEBIEIaxeGf0GIcreATNyBExtalisDbuMqQ==",
      "dependencies": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "1.20.1",
        "content-disposition": "0.5.4",
        "content-type": "~1.0.4",
        "cookie": "0.5.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "1.2.0",
        "fresh": "0.5.2",
        "http-errors": "2.0.0",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "2.4.1",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.7",
        "qs": "6.11.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "0.18.0",
        "serve-static": "1.15.0",
        "setprototypeof": "1.2.0",
        "statuses": "2.0.1",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/express/node_modules/cookie": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
      "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
      "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "2.4.1",
        "parseurl": "~1.3.3",
        "statuses": "2.0.1",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "node_modules/get-intrinsic": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.3.tgz",
      "integrity": "sha512-QJVz1Tj7MS099PevUG5jvnt9tSkXN8K14dxQlikJuPt4uD9hHAHjLyLBiLR5zELelBdD9QNRAXZzsJx0WaDL9A==",
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-binary2": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-binary2/-/has-binary2-1.0.3.tgz",
      "integrity": "sha512-G1LWKhDSvhGeAQ8mPVQlqNcOB2sJdwATtZKl2pDKKHfpf/rYj24lkinxf69blJbnsvtqqNU+L3SL50vzZhXOnw==",
      "dependencies": {
        "isarray": "2.0.1"
      }
    },
    "node_modules/has-cors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-cors/-/has-cors-1.1.0.tgz",
      "integrity": "sha512-g5VNKdkFuUuVCP9gYfDJHjK2nqdQJ7aDLTnycnc2+RvsOQbuLdF5pm7vuE5J76SEBIQjs4kQY/BWq74JUmjbXA=="
    },
    "node_modules/has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
      "dependencies": {
        "depd": "2.0.0",
        "inherits": "2.0.4",
        "setprototypeof": "1.2.0",
        "statuses": "2.0.1",
        "toidentifier": "1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/indexof": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/indexof/-/indexof-0.0.1.tgz",
      "integrity": "sha512-i0G7hLJ1z0DE8dsqJa2rycj9dBmNKgXBvotXtZYXakU9oivfB9Uj2ZBC27qqef2U58/ZLwalxa1X/RDCdkHtVg=="
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.1.tgz",
      "integrity": "sha512-c2cu3UxbI+b6kR3fy0nRnAhodsvR9dx7U5+znCOzdj6IfP3upFURTr0Xl5BlQZNKZjEtxrmVyfSdeE3O57smoQ=="
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="
    },
    "node_modules/method-override": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/method-override/-/method-override-3.0.0.tgz",
      "integrity": "sha512-IJ2NNN/mSl9w3kzWB92rcdHpz+HjkxhDJWNDBqSlas+zQdP8wBiJzITPg08M/k2uVvMow7Sk41atndNtt/PHSA==",
      "dependencies": {
        "debug": "3.1.0",
        "methods": "~1.1.2",
        "parseurl": "~1.3.2",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/method-override/node_modules/debug": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
      "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
    },
    "node_modules/negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
      "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/packet-reader": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/packet-reader/-/packet-reader-1.0.0.tgz",
      "integrity": "sha512-HAKu/fG3HpHFO0AA8WE8q2g+gBJaZ9MG7fcKk+IJPLTGAD6Psw4443l+9DGRbOIh3/aXr7Phy0TjilYivJo5XQ=="
    },
    "node_modules/parseqs": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/parseqs/-/parseqs-0.0.6.tgz",
      "integrity": "sha512-jeAGzMDbfSHHA091hr0r31eYfTig+29g3GKKE/PPbEQ65X0lmMwlEoqmhzu0iztID5uJpZsFlUPDP8ThPL7M8w=="
    },
    "node_modules/parseuri": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/parseuri/-/parseuri-0.0.6.tgz",
      "integrity": "sha512-AUjen8sAkGgao7UyCX6Ahv0gIK2fABKmYjvP4xmy5JaKvcbTRueIqIPHLAfq30xJddqSE033IOMUSOMCcK3Sow=="
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="
    },
    "node_modules/pg": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.8.0.tgz",
      "integrity": "sha512-UXYN0ziKj+AeNNP7VDMwrehpACThH7LUl/p8TDFpEUuSejCUIwGSfxpHsPvtM6/WXFy6SU4E5RG4IJV/TZAGjw==",
      "dependencies": {
        "buffer-writer": "2.0.0",
        "packet-reader": "1.0.0",
        "pg-connection-string": "^2.5.0",
        "pg-pool": "^3.5.2",
        "pg-protocol": "^1.5.0",
        "pg-types": "^2.1.0",
        "pgpass": "1.x"
      },
      "engines": {
        "node": ">= 8.0.0"
      },
      "peerDependencies": {
        "pg-native": ">=3.0.1"
      },
      "peerDependenciesMeta": {
        "pg-native": {
          "optional": true
        }
      }
    },
    "node_modules/pg-connection-string": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.5.0.tgz",
      "integrity": "sha512-r5o/V/ORTA6TmUnyWZR9nCj1klXCO2CEKNRlVuJptZe85QuhFayC7WeMic7ndayT5IRIR0S0xFxFi2ousartlQ=="
    },
    "node_modules/pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/pg-pool": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.5.2.tgz",
      "integrity": "sha512-His3Fh17Z4eg7oANLob6ZvH8xIVen3phEZh2QuyrIl4dQSDVEabNducv6ysROKpDNPSD+12tONZVWfSgMvDD9w==",
      "peerDependencies": {
        "pg": ">=8.0"
      }
    },
    "node_modules/pg-protocol": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.5.0.tgz",
      "integrity": "sha512-muRttij7H8TqRNu/DxrAJQITO4Ac7RmX3Klyr/9mJEOBeIpgnF8f9jAfRz5d3XwQZl5qBjF9gLsUtMPJE0vezQ=="
    },
    "node_modules/pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "dependencies": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pgpass": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
      "dependencies": {
        "split2": "^4.1.0"
      }
    },
    "node_modules/postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postgres-bytea": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.0.tgz",
      "integrity": "sha512-xy3pmLuQqRBZBXDULy7KbaitYqLcmxigw14Q5sj8QBVLqEwXfeybIKVWiqAXTlcvdvb0+xkOtDbfQMOf4lST1w==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "dependencies": {
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.11.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
      "integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",
      "dependencies": {
        "side-channel": "^1.0.4"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",
      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",
      "dependencies": {
        "bytes": "3.1.2",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "node_modules/send": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
      "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "2.0.0",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "2.0.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/serve-static": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
      "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
      "dependencies": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.18.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
    },
    "node_modules/side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "dependencies": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/socket.io": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-2.5.0.tgz",
      "integrity": "sha512-gGunfS0od3VpwDBpGwVkzSZx6Aqo9uOcf1afJj2cKnKFAoyl16fvhpsUhmUFd4Ldbvl5JvRQed6eQw6oQp6n8w==",
      "dependencies": {
        "debug": "~4.1.0",
        "engine.io": "~3.6.0",
        "has-binary2": "~1.0.2",
        "socket.io-adapter": "~1.1.0",
        "socket.io-client": "2.5.0",
        "socket.io-parser": "~3.4.0"
      }
    },
    "node_modules/socket.io-adapter": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-1.1.2.tgz",
      "integrity": "sha512-WzZRUj1kUjrTIrUKpZLEzFZ1OLj5FwLlAFQs9kuZJzJi5DKdU7FsWc36SNmA8iDOtwBQyT8FkrriRM8vXLYz8g=="
    },
    "node_modules/socket.io-client": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/socket.io-client/-/socket.io-client-2.5.0.tgz",
      "integrity": "sha512-lOO9clmdgssDykiOmVQQitwBAF3I6mYcQAo7hQ7AM6Ny5X7fp8hIJ3HcQs3Rjz4SoggoxA1OgrQyY8EgTbcPYw==",
      "dependencies": {
        "backo2": "1.0.2",
        "component-bind": "1.0.0",
        "component-emitter": "~1.3.0",
        "debug": "~3.1.0",
        "engine.io-client": "~3.5.0",
        "has-binary2": "~1.0.2",
        "indexof": "0.0.1",
        "parseqs": "0.0.6",
        "parseuri": "0.0.6",
        "socket.io-parser": "~3.3.0",
        "to-array": "0.1.4"
      }
    },
    "node_modules/socket.io-client/node_modules/debug": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
      "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/socket.io-client/node_modules/socket.io-parser": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-3.3.3.tgz",
      "integrity": "sha512-qOg87q1PMWWTeO01768Yh9ogn7chB9zkKtQnya41Y355S0UmpXgpcrFwAgjYJxu9BdKug5r5e9YtVSeWhKBUZg==",
      "dependencies": {
        "component-emitter": "~1.3.0",
        "debug": "~3.1.0",
        "isarray": "2.0.1"
      }
    },
    "node_modules/socket.io-parser": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-3.4.2.tgz",
      "integrity": "sha512-QFZBaZDNqZXeemwejc7D39jrq2eGK/qZuVDiMPKzZK1hLlNvjGilGt4ckfQZeVX4dGmuPzCytN9ZW1nQlEWjgA==",
      "dependencies": {
        "component-emitter": "1.2.1",
        "debug": "~4.1.0",
        "isarray": "2.0.1"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/socket.io-parser/node_modules/component-emitter": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.2.1.tgz",
      "integrity": "sha512-jPatnhd33viNplKjqXKRkGU345p263OIWzDL2wH3LGIGp5Kojo+uXizHmOADRvhGFFTnJqX3jBAKP6vvmSDKcA=="
    },
    "node_modules/socket.io-parser/node_modules/debug": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
      "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
      "deprecated": "Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/socket.io-parser/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/socket.io/node_modules/debug": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
      "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
      "deprecated": "Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/socket.io/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/split2": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.1.0.tgz",
      "integrity": "sha512-VBiJxFkxiXRlUIeyMQi8s4hgvKCSjtknJv/LVYbrgALPwf5zSKmEwV9Lst25AkvMDnvxODugjdl6KZgwKM1WYQ==",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/stoppable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stoppable/-/stoppable-1.1.0.tgz",
      "integrity": "sha512-KXDYZ9dszj6bzvnEMRYvxgeTHU74QBFL54XKtP3nyMuJ81CFYtABZ3bAzL2EdFUaEwJOBOgENyFj3R7oTzDyyw==",
      "engines": {
        "node": ">=4",
        "npm": ">=6"
      }
    },
    "node_modules/to-array": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/to-array/-/to-array-0.1.4.tgz",
      "integrity": "sha512-LhVdShQD/4Mk4zXNroIQZJC+Ap3zgLcDuwEdcmLv9CCO73NWockQDwyUnW/m8VX/EElfL6FcYx7EeutN4HJA6A=="
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/ws": {
      "version": "7.4.6",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.4.6.tgz",
      "integrity": "sha512-YmhHDO4MzaDLB+M9ym/mDA5z0naX8j7SIlT8f8z+I0VtzsRbekxEutHSme7NPS2qE8StCYQNUnfWdXta/Yu85A==",
      "engines": {
        "node": ">=8.3.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": "^5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xmlhttprequest-ssl": {
      "version": "1.6.3",
      "resolved": "https://registry.npmjs.org/xmlhttprequest-ssl/-/xmlhttprequest-ssl-1.6.3.tgz",
      "integrity": "sha512-3XfeQE/wNkvrIktn2Kf0869fC0BN6UpydVasGIeSm2B1Llihf7/0UfZM+eCkOw3P7bP4+qPgqhm7ZoxuJtFU0Q==",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/yeast": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/yeast/-/yeast-0.1.2.tgz",
      "integrity": "sha512-8HFIh676uyGYP6wP13R/j6OJ/1HwJ46snpvzE7aHAN3Ryqh2yX6Xox2B4CUmTwwOIzlG3Bs7ocsP5dZH/R1Qbg=="
    }
  },
  "dependencies": {
    "accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "requires": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      }
    },
    "after": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/after/-/after-0.8.2.tgz",
      "integrity": "sha512-QbJ0NTQ/I9DI3uSJA4cbexiwQeRAfjPScqIbSjUDd9TOrcg6pTkdgziesOqxBMBzit8vFCTwrP27t13vFOORRA=="
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
    },
    "arraybuffer.slice": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/arraybuffer.slice/-/arraybuffer.slice-0.0.7.tgz",
      "integrity": "sha512-wGUIVQXuehL5TCqQun8OW81jGzAWycqzFF8lFp+GOM5BXLYj3bKNsYC4daB7n6XjCqxQA/qgTJ+8ANR3acjrog=="
    },
    "async": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.4.tgz",
      "integrity": "sha512-iAB+JbDEGXhyIUavoDl9WP/Jj106Kz9DEn1DPgYw5ruDn0e3Wgi3sKFm55sASdGBNOQB8F59d9qQ7deqrHA8wQ=="
    },
    "backo2": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/backo2/-/backo2-1.0.2.tgz",
      "integrity": "sha512-zj6Z6M7Eq+PBZ7PQxl5NT665MvJdAkzp0f60nAJ+sLaSCBPMwVak5ZegFbgVCzFcCJTKFoMizvM5Ld7+JrRJHA=="
    },
    "base64-arraybuffer": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-0.1.4.tgz",
      "integrity": "sha512-a1eIFi4R9ySrbiMuyTGx5e92uRH5tQY6kArNcFaKBUleIoLjdjBg7Zxm3Mqm3Kmkf27HLR/1fnxX9q8GQ7Iavg=="
    },
    "base64id": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",
      "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog=="
    },
    "blob": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/blob/-/blob-0.0.5.tgz",
      "integrity": "sha512-gaqbzQPqOoamawKg0LGVd7SzLgXS+JH61oWprSLH+P+abTczqJbhTR8CmJ2u9/bUYNmHTGJx/UEmn6doAvvuig=="
    },
    "body-parser": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.1.tgz",
      "integrity": "sha512-jWi7abTbYwajOytWCQc37VulmWiRae5RyTpaCyDcS5/lMdtwSz5lOpDE67srw/HYe35f1z3fDQw+3txg7gNtWw==",
      "requires": {
        "bytes": "3.1.2",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "on-finished": "2.4.1",
        "qs": "6.11.0",
        "raw-body": "2.5.1",
        "type-is": "~1.6.18",
        "unpipe": "1.0.0"
      }
    },
    "buffer-writer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/buffer-writer/-/buffer-writer-2.0.0.tgz",
      "integrity": "sha512-a7ZpuTZU1TRtnwyCNW3I5dc0wWNC3VR9S++Ewyk2HHZdrO3CQJqSpd+95Us590V6AL7JqUAH2IwZ/398PmNFgw=="
    },
    "bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "component-bind": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/component-bind/-/component-bind-1.0.0.tgz",
      "integrity": "sha512-WZveuKPeKAG9qY+FkYDeADzdHyTYdIboXS59ixDeRJL5ZhxpqUnxSOwop4FQjMsiYm3/Or8cegVbpAHNA7pHxw=="
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
    },
    "component-inherit": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/component-inherit/-/component-inherit-0.0.3.tgz",
      "integrity": "sha512-w+LhYREhatpVqTESyGFg3NlP6Iu0kEKUHETY9GoZP/pQyW4mHFZuFWRUCIqVPZ36ueVLtoOEZaAqbCF2RDndaA=="
    },
    "content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "requires": {
        "safe-buffer": "5.2.1"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "cookie": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.1.tgz",
      "integrity": "sha512-ZwrFkGJxUR3EIoXtO+yVE69Eb7KlixbaeAWfBQB9vVsNn/o+Yw69gBWSSDK825hQNdN+wF8zELf3dFNl/kxkUA=="
    },
    "cookie-parser": {
      "version": "1.4.6",
      "resolved": "https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.6.tgz",
      "integrity": "sha512-z3IzaNjdwUC2olLIB5/ITd0/setiaFMLYiZJle7xg5Fe9KWAceil7xszYfHHBtDFYLSgJduS2Ty0P1uJdPDJeA==",
      "requires": {
        "cookie": "0.4.1",
        "cookie-signature": "1.0.6"
      }
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="
    },
    "destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg=="
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w=="
    },
    "engine.io": {
      "version": "3.6.1",
      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-3.6.1.tgz",
      "integrity": "sha512-dfs8EVg/i7QjFsXxn7cCRQ+Wai1G1TlEvHhdYEi80fxn5R1vZ2K661O6v/rezj1FP234SZ14r9CmJke99iYDGg==",
      "requires": {
        "accepts": "~1.3.4",
        "base64id": "2.0.0",
        "cookie": "~0.4.1",
        "debug": "~4.1.0",
        "engine.io-parser": "~2.2.0",
        "ws": "~7.4.2"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "engine.io-client": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/engine.io-client/-/engine.io-client-3.5.3.tgz",
      "integrity": "sha512-qsgyc/CEhJ6cgMUwxRRtOndGVhIu5hpL5tR4umSpmX/MvkFoIxUTM7oFMDQumHNzlNLwSVy6qhstFPoWTf7dOw==",
      "requires": {
        "component-emitter": "~1.3.0",
        "component-inherit": "0.0.3",
        "debug": "~3.1.0",
        "engine.io-parser": "~2.2.0",
        "has-cors": "1.1.0",
        "indexof": "0.0.1",
        "parseqs": "0.0.6",
        "parseuri": "0.0.6",
        "ws": "~7.4.2",
        "xmlhttprequest-ssl": "~1.6.2",
        "yeast": "0.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "engine.io-parser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-2.2.1.tgz",
      "integrity": "sha512-x+dN/fBH8Ro8TFwJ+rkB2AmuVw9Yu2mockR/p3W8f8YtExwFgDvBDi0GWyb4ZLkpahtDGZgtr3zLovanJghPqg==",
      "requires": {
        "after": "0.8.2",
        "arraybuffer.slice": "~0.0.7",
        "base64-arraybuffer": "0.1.4",
        "blob": "0.0.5",
        "has-binary2": "~1.0.2"
      }
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg=="
    },
    "express": {
      "version": "4.18.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
      "integrity": "sha512-5/PsL6iGPdfQ/lKM1UuielYgv3BUoJfz1aUwU9vHZ+J7gyvwdQXFEBIEIaxeGf0GIcreATNyBExtalisDbuMqQ==",
      "requires": {
        "accepts": "~1.3.8",
        "array-flatten": "1.1.1",
        "body-parser": "1.20.1",
        "content-disposition": "0.5.4",
        "content-type": "~1.0.4",
        "cookie": "0.5.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "1.2.0",
        "fresh": "0.5.2",
        "http-errors": "2.0.0",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "2.4.1",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.7",
        "qs": "6.11.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "0.18.0",
        "serve-static": "1.15.0",
        "setprototypeof": "1.2.0",
        "statuses": "2.0.1",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "cookie": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
          "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw=="
        }
      }
    },
    "finalhandler": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
      "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "2.4.1",
        "parseurl": "~1.3.3",
        "statuses": "2.0.1",
        "unpipe": "~1.0.0"
      }
    },
    "forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q=="
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "get-intrinsic": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.3.tgz",
      "integrity": "sha512-QJVz1Tj7MS099PevUG5jvnt9tSkXN8K14dxQlikJuPt4uD9hHAHjLyLBiLR5zELelBdD9QNRAXZzsJx0WaDL9A==",
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.3"
      }
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-binary2": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-binary2/-/has-binary2-1.0.3.tgz",
      "integrity": "sha512-G1LWKhDSvhGeAQ8mPVQlqNcOB2sJdwATtZKl2pDKKHfpf/rYj24lkinxf69blJbnsvtqqNU+L3SL50vzZhXOnw==",
      "requires": {
        "isarray": "2.0.1"
      }
    },
    "has-cors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-cors/-/has-cors-1.1.0.tgz",
      "integrity": "sha512-g5VNKdkFuUuVCP9gYfDJHjK2nqdQJ7aDLTnycnc2+RvsOQbuLdF5pm7vuE5J76SEBIQjs4kQY/BWq74JUmjbXA=="
    },
    "has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A=="
    },
    "http-errors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
      "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
      "requires": {
        "depd": "2.0.0",
        "inherits": "2.0.4",
        "setprototypeof": "1.2.0",
        "statuses": "2.0.1",
        "toidentifier": "1.0.1"
      }
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "indexof": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/indexof/-/indexof-0.0.1.tgz",
      "integrity": "sha512-i0G7hLJ1z0DE8dsqJa2rycj9dBmNKgXBvotXtZYXakU9oivfB9Uj2ZBC27qqef2U58/ZLwalxa1X/RDCdkHtVg=="
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
    },
    "isarray": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.1.tgz",
      "integrity": "sha512-c2cu3UxbI+b6kR3fy0nRnAhodsvR9dx7U5+znCOzdj6IfP3upFURTr0Xl5BlQZNKZjEtxrmVyfSdeE3O57smoQ=="
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ=="
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="
    },
    "method-override": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/method-override/-/method-override-3.0.0.tgz",
      "integrity": "sha512-IJ2NNN/mSl9w3kzWB92rcdHpz+HjkxhDJWNDBqSlas+zQdP8wBiJzITPg08M/k2uVvMow7Sk41atndNtt/PHSA==",
      "requires": {
        "debug": "3.1.0",
        "methods": "~1.1.2",
        "parseurl": "~1.3.2",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="
    },
    "mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "requires": {
        "mime-db": "1.52.0"
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
    },
    "negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="
    },
    "object-inspect": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
      "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ=="
    },
    "on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "packet-reader": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/packet-reader/-/packet-reader-1.0.0.tgz",
      "integrity": "sha512-HAKu/fG3HpHFO0AA8WE8q2g+gBJaZ9MG7fcKk+IJPLTGAD6Psw4443l+9DGRbOIh3/aXr7Phy0TjilYivJo5XQ=="
    },
    "parseqs": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/parseqs/-/parseqs-0.0.6.tgz",
      "integrity": "sha512-jeAGzMDbfSHHA091hr0r31eYfTig+29g3GKKE/PPbEQ65X0lmMwlEoqmhzu0iztID5uJpZsFlUPDP8ThPL7M8w=="
    },
    "parseuri": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/parseuri/-/parseuri-0.0.6.tgz",
      "integrity": "sha512-AUjen8sAkGgao7UyCX6Ahv0gIK2fABKmYjvP4xmy5JaKvcbTRueIqIPHLAfq30xJddqSE033IOMUSOMCcK3Sow=="
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="
    },
    "pg": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.8.0.tgz",
      "integrity": "sha512-UXYN0ziKj+AeNNP7VDMwrehpACThH7LUl/p8TDFpEUuSejCUIwGSfxpHsPvtM6/WXFy6SU4E5RG4IJV/TZAGjw==",
      "requires": {
        "buffer-writer": "2.0.0",
        "packet-reader": "1.0.0",
        "pg-connection-string": "^2.5.0",
        "pg-pool": "^3.5.2",
        "pg-protocol": "^1.5.0",
        "pg-types": "^2.1.0",
        "pgpass": "1.x"
      }
    },
    "pg-connection-string": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.5.0.tgz",
      "integrity": "sha512-r5o/V/ORTA6TmUnyWZR9nCj1klXCO2CEKNRlVuJptZe85QuhFayC7WeMic7ndayT5IRIR0S0xFxFi2ousartlQ=="
    },
    "pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw=="
    },
    "pg-pool": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.5.2.tgz",
      "integrity": "sha512-His3Fh17Z4eg7oANLob6ZvH8xIVen3phEZh2QuyrIl4dQSDVEabNducv6ysROKpDNPSD+12tONZVWfSgMvDD9w==",
      "requires": {}
    },
    "pg-protocol": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.5.0.tgz",
      "integrity": "sha512-muRttij7H8TqRNu/DxrAJQITO4Ac7RmX3Klyr/9mJEOBeIpgnF8f9jAfRz5d3XwQZl5qBjF9gLsUtMPJE0vezQ=="
    },
    "pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "requires": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      }
    },
    "pgpass": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
      "requires": {
        "split2": "^4.1.0"
      }
    },
    "postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA=="
    },
    "postgres-bytea": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.0.tgz",
      "integrity": "sha512-xy3pmLuQqRBZBXDULy7KbaitYqLcmxigw14Q5sj8QBVLqEwXfeybIKVWiqAXTlcvdvb0+xkOtDbfQMOf4lST1w=="
    },
    "postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q=="
    },
    "postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "requires": {
        "xtend": "^4.0.0"
      }
    },
    "proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "requires": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      }
    },
    "qs": {
      "version": "6.11.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
      "integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",
      "requires": {
        "side-channel": "^1.0.4"
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",
      "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",
      "requires": {
        "bytes": "3.1.2",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "send": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
      "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "2.0.0",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "2.4.1",
        "range-parser": "~1.2.1",
        "statuses": "2.0.1"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "serve-static": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
      "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.18.0"
      }
    },
    "setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
    },
    "side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "requires": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      }
    },
    "socket.io": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-2.5.0.tgz",
      "integrity": "sha512-gGunfS0od3VpwDBpGwVkzSZx6Aqo9uOcf1afJj2cKnKFAoyl16fvhpsUhmUFd4Ldbvl5JvRQed6eQw6oQp6n8w==",
      "requires": {
        "debug": "~4.1.0",
        "engine.io": "~3.6.0",
        "has-binary2": "~1.0.2",
        "socket.io-adapter": "~1.1.0",
        "socket.io-client": "2.5.0",
        "socket.io-parser": "~3.4.0"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "socket.io-adapter": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-1.1.2.tgz",
      "integrity": "sha512-WzZRUj1kUjrTIrUKpZLEzFZ1OLj5FwLlAFQs9kuZJzJi5DKdU7FsWc36SNmA8iDOtwBQyT8FkrriRM8vXLYz8g=="
    },
    "socket.io-client": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/socket.io-client/-/socket.io-client-2.5.0.tgz",
      "integrity": "sha512-lOO9clmdgssDykiOmVQQitwBAF3I6mYcQAo7hQ7AM6Ny5X7fp8hIJ3HcQs3Rjz4SoggoxA1OgrQyY8EgTbcPYw==",
      "requires": {
        "backo2": "1.0.2",
        "component-bind": "1.0.0",
        "component-emitter": "~1.3.0",
        "debug": "~3.1.0",
        "engine.io-client": "~3.5.0",
        "has-binary2": "~1.0.2",
        "indexof": "0.0.1",
        "parseqs": "0.0.6",
        "parseuri": "0.0.6",
        "socket.io-parser": "~3.3.0",
        "to-array": "0.1.4"
      },
      "dependencies": {
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "socket.io-parser": {
          "version": "3.3.3",
          "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-3.3.3.tgz",
          "integrity": "sha512-qOg87q1PMWWTeO01768Yh9ogn7chB9zkKtQnya41Y355S0UmpXgpcrFwAgjYJxu9BdKug5r5e9YtVSeWhKBUZg==",
          "requires": {
            "component-emitter": "~1.3.0",
            "debug": "~3.1.0",
            "isarray": "2.0.1"
          }
        }
      }
    },
    "socket.io-parser": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-3.4.2.tgz",
      "integrity": "sha512-QFZBaZDNqZXeemwejc7D39jrq2eGK/qZuVDiMPKzZK1hLlNvjGilGt4ckfQZeVX4dGmuPzCytN9ZW1nQlEWjgA==",
      "requires": {
        "component-emitter": "1.2.1",
        "debug": "~4.1.0",
        "isarray": "2.0.1"
      },
      "dependencies": {
        "component-emitter": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.2.1.tgz",
          "integrity": "sha512-jPatnhd33viNplKjqXKRkGU345p263OIWzDL2wH3LGIGp5Kojo+uXizHmOADRvhGFFTnJqX3jBAKP6vvmSDKcA=="
        },
        "debug": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
          "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "split2": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.1.0.tgz",
      "integrity": "sha512-VBiJxFkxiXRlUIeyMQi8s4hgvKCSjtknJv/LVYbrgALPwf5zSKmEwV9Lst25AkvMDnvxODugjdl6KZgwKM1WYQ=="
    },
    "statuses": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
      "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ=="
    },
    "stoppable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stoppable/-/stoppable-1.1.0.tgz",
      "integrity": "sha512-KXDYZ9dszj6bzvnEMRYvxgeTHU74QBFL54XKtP3nyMuJ81CFYtABZ3bAzL2EdFUaEwJOBOgENyFj3R7oTzDyyw=="
    },
    "to-array": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/to-array/-/to-array-0.1.4.tgz",
      "integrity": "sha512-LhVdShQD/4Mk4zXNroIQZJC+Ap3zgLcDuwEdcmLv9CCO73NWockQDwyUnW/m8VX/EElfL6FcYx7EeutN4HJA6A=="
    },
    "toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ=="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="
    },
    "ws": {
      "version": "7.4.6",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.4.6.tgz",
      "integrity": "sha512-YmhHDO4MzaDLB+M9ym/mDA5z0naX8j7SIlT8f8z+I0VtzsRbekxEutHSme7NPS2qE8StCYQNUnfWdXta/Yu85A==",
      "requires": {}
    },
    "xmlhttprequest-ssl": {
      "version": "1.6.3",
      "resolved": "https://registry.npmjs.org/xmlhttprequest-ssl/-/xmlhttprequest-ssl-1.6.3.tgz",
      "integrity": "sha512-3XfeQE/wNkvrIktn2Kf0869fC0BN6UpydVasGIeSm2B1Llihf7/0UfZM+eCkOw3P7bP4+qPgqhm7ZoxuJtFU0Q=="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "yeast": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/yeast/-/yeast-0.1.2.tgz",
      "integrity": "sha512-8HFIh676uyGYP6wP13R/j6OJ/1HwJ46snpvzE7aHAN3Ryqh2yX6Xox2B4CUmTwwOIzlG3Bs7ocsP5dZH/R1Qbg=="
    }
  }
}

package.json

{
  "name": "result",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "async": "^3.1.0",
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.4",
    "express": "^4.17.1",
    "method-override": "^3.0.0",
    "pg": "^8.8.0",
    "socket.io": "^2.5.0",
    "stoppable": "^1.1.0"
  }
}

server.js

var express = require('express'),
    async = require('async'),
    pg = require('pg'),
    { Pool } = require('pg'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

io.set('transports', ['polling']);

var port = process.env.PORT || 4000;

io.sockets.on('connection', function (socket) {

  socket.emit('message', { text : 'Welcome!' });

  socket.on('subscribe', function (data) {
    socket.join(data.channel);
  });
});

var pool = new pg.Pool({
  connectionString: 'postgres://postgres:postgres@db/postgres'
});

async.retry(
  {times: 1000, interval: 1000},
  function(callback) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.error("Waiting for db");
      }
      callback(err, client);
    });
  },
  function(err, client) {
    if (err) {
      return console.error("Giving up");
    }
    console.log("Connected to db");
    getVotes(client);
  }
);

function getVotes(client) {
  client.query('SELECT vote, COUNT(id) AS count FROM votes GROUP BY vote', [], function(err, result) {
    if (err) {
      console.error("Error performing query: " + err);
    } else {
      var votes = collectVotesFromResult(result);
      io.sockets.emit("scores", JSON.stringify(votes));
    }

    setTimeout(function() {getVotes(client) }, 1000);
  });
}

function collectVotesFromResult(result) {
  var votes = {a: 0, b: 0};

  result.rows.forEach(function (row) {
    votes[row.vote] = parseInt(row.count);
  });

  return votes;
}

app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

server.listen(port, function () {
  var port = server.address().port;
  console.log('App running on port ' + port);
});

/app/tests/Dockerfile

FROM node:8.9-slim

RUN apt-get update -qq && apt-get install -qy \
    ca-certificates \
    bzip2 \
    curl \
    libfontconfig \
    --no-install-recommends
RUN yarn global add phantomjs-prebuilt
ADD . /app
WORKDIR /app
CMD ["/app/tests.sh"]

render.js

var system = require('system');
var page = require('webpage').create();
var url = system.args[1];

page.onLoadFinished = function() {
  setTimeout(function(){
    console.log(page.content);
    phantom.exit();
  }, 1000);
};

page.open(url, function() {
    page.evaluate(function() {
  });
});

tests.sh

#!/bin/sh

while ! timeout 1 bash -c "echo > /dev/tcp/vote/80"; do
    sleep 1
done

curl -sS -X POST --data "vote=b" http://vote > /dev/null
sleep 10

if phantomjs render.js http://result | grep -q '1 vote'; then
  echo -e "\\e[42m------------"
  echo -e "\\e[92mTests passed"
  echo -e "\\e[42m------------"
  exit 0
else
  echo -e "\\e[41m------------"
  echo -e "\\e[91mTests failed"
  echo -e "\\e[41m------------"
  exit 1
fi

entrypoint.sh situé à la racine

#!/bin/sh

if [ -z $2 ] ; then
    echo "Not setting dns and redis dns"
else
    IP=`getent hosts $2 | awk '{ print $1 ; exit }'`

    echo "${IP} db" >> /etc/hosts
    echo "${IP} redis" >> /etc/hosts
fi

exec $1

/etc/hosts

127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.18.0.2      4713499a9f3e
172.19.0.5      4713499a9f3e
20.216.135.147 db
20.216.135.147 redis

/app/views/app.js

var app = angular.module('catsvsdogs', []);
var socket = io.connect({transports:['polling']});

var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');

app.controller('statsCtrl', function($scope){
  $scope.aPercent = 50;
  $scope.bPercent = 50;

  var updateScores = function(){
    socket.on('scores', function (json) {
       data = JSON.parse(json);
       var a = parseInt(data.a || 0);
       var b = parseInt(data.b || 0);

       var percentages = getPercentages(a, b);

       bg1.style.width = percentages.a + "%";
       bg2.style.width = percentages.b + "%";

       $scope.$apply(function () {
         $scope.aPercent = percentages.a;
         $scope.bPercent = percentages.b;
         $scope.total = a + b;
       });
    });
  };

  var init = function(){
    document.body.style.opacity=1;
    updateScores();
  };
  socket.on('message',function(data){
    init();
  });
});

function getPercentages(a, b) {
  var result = {};

  if (a + b > 0) {
    result.a = Math.round(a / (a + b) * 100);
    result.b = 100 - result.a;
  } else {
    result.a = result.b = 50;
  }

  return result;

  /app/views/stylesheet/styles.css

  @import url(//fonts.googleapis.com/css?family=Open+Sans:400,700,600);

*{
  box-sizing:border-box;
}
html,body{
  margin:0;
  padding:0;
  height:100%;
  font-family: 'Open Sans';
}
body{
  opacity:0;
  transition: all 1s linear;
}

.divider{
  height: 150px;
  width:2px;
  background-color: #C0C9CE;
  position: relative;
  top: 50%;
  float: left;
  transform: translateY(-50%);
}

#background-stats-1{
  background-color: #2196f3;
}

#background-stats-2{
  background-color: #00cbca;
}

#content-container{
  z-index:2;
  position:relative;
  margin:0 auto;
  display:table;
  padding:10px;
  max-width:940px;
  height:100%;
}
#content-container-center{
  display:table-cell;
  text-align:center;
  vertical-align:middle;
}
#result{
  z-index: 3;
  position: absolute;
  bottom: 40px;
  right: 20px;
  color: #fff;
  opacity: 0.5;
  font-size: 45px;
  font-weight: 600;
}
#choice{
  transition: all 300ms linear;
  line-height:1.3em;
  background:#fff;
  box-shadow: 10px 0 0 #fff, -10px 0 0 #fff;
  vertical-align:middle;
  font-size:40px;
  font-weight: 600;
  width: 450px;
  height: 200px;
}
#choice a{
  text-decoration:none;
}
#choice a:hover, #choice a:focus{
  outline:0;
  text-decoration:underline;
}

#choice .choice{
  width: 49%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  padding-left: 50px;
}

#choice .choice .label{
  text-transform: uppercase;
}

#choice .choice.dogs{
  color: #00cbca;
  float: right;
}

#choice .choice.cats{
  color: #2196f3;
  float: left;
}
#background-stats{
  z-index:1;
  height:100%;
  width:100%;
  position:absolute;
}
#background-stats div{
  transition: width 400ms ease-in-out;
  display:inline-block;
  margin-bottom:-4px;
  width:50%;
  height:100%;
}

Container Worker

App en Dotnet compilé, intéressant de savoir l'utilité. A demander au client.


Logs des containers:

b29a12852684

 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.4:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 670-708-726
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.3:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 300-237-851
20.112.67.54 - - [02/Mar/2023 09:09:40] "GET / HTTP/1.0" 404 -
20.112.67.54 - - [02/Mar/2023 09:09:40] code 400, message Bad request version ('RTSP/1.0')
20.112.67.54 - - [02/Mar/2023 09:09:40] "OPTIONS / RTSP/1.0" HTTPStatus.BAD_REQUEST -
20.112.67.54 - - [02/Mar/2023 09:09:41] code 400, message Bad HTTP/0.9 request type ('\x00')
20.112.67.54 - - [02/Mar/2023 09:09:41] "versionbind" HTTPStatus.BAD_REQUEST -
20.112.67.54 - - [02/Mar/2023 09:09:43] code 400, message Bad request version ('0.12\x00')
20.112.67.54 - - [02/Mar/2023 09:09:43] "¤ÿSMB@@PC NETWORK PROGRAM 1.0MICROSOFT NETWORKS 1.03MICROSOFT NETWORKS 3.0LANMAN1.0LM1.2X002SambaNT LANMAN 1.0NT LM 0.12" HTTPStatus.BAD_REQUEST -
20.112.67.54 - - [02/Mar/2023 09:09:44] code 400, message Bad request version ('GetClassName\x00\x00\x00\x02\x04\x00\x00\x00\x00\x01\x00')
20.112.67.54 - - [02/Mar/2023 09:09:44] "
                                         GetClassName" HTTPStatus.BAD_REQUEST -
20.112.67.54 - - [02/Mar/2023 09:09:51] code 400, message Bad request version ('\x00/\x00')
20.112.67.54 - - [02/Mar/2023 09:09:51] "ieU§ärandom1random2random3random4
                                                                          /" HTTPStatus.BAD_REQUEST -
45.93.16.45 - - [02/Mar/2023 09:28:18] "GET / HTTP/1.1" 404 -
45.93.16.45 - - [02/Mar/2023 09:32:18] "GET /recordings/ HTTP/1.1" 404 -
51.158.37.156 - - [02/Mar/2023 13:07:46] "GET / HTTP/1.1" 404 -
167.248.133.45 - - [02/Mar/2023 15:42:54] code 400, message Bad request version ('À\x14À')
ÇBõ´Óú^&Ì¨Ì©À/À0À+À,ÀÀ/MÀÀ" HTTPStatus.BAD_REQUEST -²¹IÅµòD8°)QRrMvâãÌT e,tä!È:çqÊ*0}&þ
167.248.133.45 - - [02/Mar/2023 15:42:56] "GET / HTTP/1.1" 404 -
167.248.133.45 - - [02/Mar/2023 15:42:56] "GET / HTTP/1.1" 404 -
167.248.133.45 - - [02/Mar/2023 15:42:56] code 505, message Invalid HTTP version (2.0)
167.248.133.45 - - [02/Mar/2023 15:42:56] "PRI * HTTP/2.0" HTTPStatus.HTTP_VERSION_NOT_SUPPORTED -
51.158.37.156 - - [02/Mar/2023 18:00:47] "GET / HTTP/1.1" 404 -
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.5:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 125-870-177
20.112.67.214 - - [03/Mar/2023 09:04:27] "GET / HTTP/1.0" 404 -
20.112.67.214 - - [03/Mar/2023 09:04:27] code 400, message Bad request version ('RTSP/1.0')
20.112.67.214 - - [03/Mar/2023 09:04:27] "OPTIONS / RTSP/1.0" HTTPStatus.BAD_REQUEST -
20.112.67.214 - - [03/Mar/2023 09:04:29] code 400, message Bad HTTP/0.9 request type ('\x00')
20.112.67.214 - - [03/Mar/2023 09:04:29] "versionbind" HTTPStatus.BAD_REQUEST -
20.112.67.214 - - [03/Mar/2023 09:04:30] code 400, message Bad request version ('0.12\x00')
20.112.67.214 - - [03/Mar/2023 09:04:30] "¤ÿSMB@@PC NETWORK PROGRAM 1.0MICROSOFT NETWORKS 1.03MICROSOFT NETWORKS 3.0LANMAN1.0LM1.2X002SambaNT LANMAN 1.0NT LM 0.12" HTTPStatus.BAD_REQUEST -
20.112.67.214 - - [03/Mar/2023 09:04:31] code 400, message Bad request version ('GetClassName\x00\x00\x00\x02\x04\x00\x00\x00\x00\x01\x00')
20.112.67.214 - - [03/Mar/2023 09:04:31] "
                                          GetClassName" HTTPStatus.BAD_REQUEST -
20.112.67.214 - - [03/Mar/2023 09:04:36] code 400, message Bad request version ('\x00/\x00')
20.112.67.214 - - [03/Mar/2023 09:04:36] "ieU§ärandom1random2random3random4
                                                                           /" HTTPStatus.BAD_REQUEST -
45.93.16.45 - - [03/Mar/2023 09:17:39] "GET / HTTP/1.1" 404 -
45.93.16.45 - - [03/Mar/2023 09:22:18] "GET /recordings/ HTTP/1.1" 404 -
198.235.24.18 - - [03/Mar/2023 10:29:46] "GET / HTTP/1.0" 404 -
170.64.174.174 - - [03/Mar/2023 14:05:59] code 400, message Bad HTTP/0.9 request type ('\x16\x03\x01\x00{\x01\x00\x00w\x03\x03ÇR"Ú\x99®\x8dÇajJf_Mý$Çmt\x11ZÇâ"ÃöEf\x10ª\x9e\x16\x00\x00\x1aÀ/À+À\x11À\x07À\x13À')
170.64.174.174 - - [03/Mar/2023 14:05:59] "{wÇR"Ú®ÇajJf_Mý$ÇmtZÇâ"ÃöEfªÀ/À+ÀÀÀÀ ÀÀ" HTTPStatus.BAD_REQUEST -
170.64.174.174 - - [03/Mar/2023 14:06:00] code 400, message Bad request version ('À\x14À')
dÀ/À+ÀÀÀÀ4.174 -ÀÀ" HTTPStatus.BAD_REQUEST -wÜ¹=Âç;xÆ)Ìy0_Æ}¥æË{×VMð
170.64.174.174 - - [03/Mar/2023 14:06:00] "GET / HTTP/1.1" 404 -
205.210.31.156 - - [03/Mar/2023 17:12:46] "GET / HTTP/1.1" 404 -
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.3:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 107-513-287
167.248.133.63 - - [08/Mar/2023 15:20:22] code 400, message Bad request version ('À\x14À')
167.248.133.63 - - [08/Mar/2023 15:20:22] "îêÆ¬X_üÈ~)Eq¢ÓäH=¾FY=µ?X*ó½gC6 ´4Þir
                                                                               QåÉ7Ôºí6ÑAò7»²U&Ì¨Ì©À/À0À+À,ÀÀ   ÀÀ" HTTPStatus.BAD_REQUEST -
167.248.133.63 - - [08/Mar/2023 15:20:23] "GET / HTTP/1.1" 404 -
167.248.133.63 - - [08/Mar/2023 15:20:23] "GET / HTTP/1.1" 404 -
167.248.133.63 - - [08/Mar/2023 15:20:23] code 505, message Invalid HTTP version (2.0)
167.248.133.63 - - [08/Mar/2023 15:20:23] "PRI * HTTP/2.0" HTTPStatus.HTTP_VERSION_NOT_SUPPORTED -
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.5:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 546-598-753
162.142.125.225 - - [09/Mar/2023 08:45:39] code 400, message Bad request version ('À\x14À')
162.142.125.225 - - [09/Mar/2023 08:45:39] "îêÜü¾¦=pþNKø?ó4%êI/çÔ¶`Ñj  ñ"ö
                                                                          SÏKB]PN÷ÖÎWùàmÚ'wyPê
                                                                                              C"&Ì¨Ì©À/À0À+À,ÀÀ ÀÀ" HTTPStatus.BAD_REQUEST -
162.142.125.225 - - [09/Mar/2023 08:45:41] "GET / HTTP/1.1" 404 -
162.142.125.225 - - [09/Mar/2023 08:45:41] "GET / HTTP/1.1" 404 -
162.142.125.225 - - [09/Mar/2023 08:45:41] code 505, message Invalid HTTP version (2.0)
162.142.125.225 - - [09/Mar/2023 08:45:41] "PRI * HTTP/2.0" HTTPStatus.HTTP_VERSION_NOT_SUPPORTED -
167.94.138.34 - - [09/Mar/2023 09:46:58] code 400, message Bad request version ('À\x14À')
167.94.138.34 - - [09/Mar/2023 09:46:58] "îê«2sÂÒfT"qjÂáEÐ>Í²Æ\a75À▒©ë 4        DúÇÜ8dè6âZÙ0»-GÐñ0µì    C&Ì¨Ì©À/À0À+À,ÀÀ        ÀÀ" HTTPStatus.BAD_REQUEST -
167.94.138.34 - - [09/Mar/2023 09:46:59] "GET / HTTP/1.1" 404 -
167.94.138.34 - - [09/Mar/2023 09:46:59] "GET / HTTP/1.1" 404 -
167.94.138.34 - - [09/Mar/2023 09:47:00] code 505, message Invalid HTTP version (2.0)
167.94.138.34 - - [09/Mar/2023 09:47:00] "PRI * HTTP/2.0" HTTPStatus.HTTP_VERSION_NOT_SUPPORTED -
167.94.146.57 - - [09/Mar/2023 09:50:23] code 400, message Bad request version ('À\x14À')
167.94.146.57 - - [09/Mar/2023 09:50:23] "îêi»Ì¦cp<AøL¢àÌµ0ù\"éYf¦rv ûæ"kSfV[tøË3C[CÜJ=l~¢±±;&Ì¨Ì©À/À0À+À,ÀÀ    ÀÀ" HTTPStatus.BAD_REQUEST -
167.94.146.57 - - [09/Mar/2023 09:50:24] "GET / HTTP/1.1" 404 -
167.94.146.57 - - [09/Mar/2023 09:50:24] "GET / HTTP/1.1" 404 -
167.94.146.57 - - [09/Mar/2023 09:50:24] code 505, message Invalid HTTP version (2.0)
167.94.146.57 - - [09/Mar/2023 09:50:24] "PRI * HTTP/2.0" HTTPStatus.HTTP_VERSION_NOT_SUPPORTED -
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.3:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 219-874-623
205.210.31.40 - - [10/Mar/2023 13:05:30] "GET / HTTP/1.1" 404 -
205.210.31.10 - - [10/Mar/2023 15:10:07] "GET / HTTP/1.0" 404 -
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.3:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 317-344-524
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:80
 * Running on http://172.19.0.4:80
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 335-355-450

 4713499a9f3e

 [nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Wed, 01 Mar 2023 09:29:11 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Wed, 01 Mar 2023 09:29:11 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Thu, 02 Mar 2023 08:04:50 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Thu, 02 Mar 2023 08:04:50 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Fri, 03 Mar 2023 08:04:33 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Fri, 03 Mar 2023 08:04:34 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Wed, 08 Mar 2023 12:30:37 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Wed, 08 Mar 2023 12:30:37 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Thu, 09 Mar 2023 08:03:15 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Thu, 09 Mar 2023 08:03:15 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Fri, 10 Mar 2023 08:03:06 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Fri, 10 Mar 2023 08:03:06 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Mon, 13 Mar 2023 08:40:12 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Mon, 13 Mar 2023 08:40:12 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
App running on port 80
Connected to db
node:events:491
      throw er; // Unhandled 'error' event
      ^

error: terminating connection due to administrator command
    at Parser.parseErrorMessage (/node_modules/pg-protocol/dist/parser.js:287:98)
    at Parser.handlePacket (/node_modules/pg-protocol/dist/parser.js:126:29)
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:39:38)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
    at readableAddChunk (node:internal/streams/readable:297:9)
    at Readable.push (node:internal/streams/readable:234:10)
    at TCP.onStreamRead (node:internal/stream_base_commons:190:23)
Emitted 'error' event on Client instance at:
    at Client._handleErrorEvent (/node_modules/pg/lib/client.js:319:10)
    at Client._handleErrorMessage (/node_modules/pg/lib/client.js:330:12)
    at Connection.emit (node:events:513:28)
    at /node_modules/pg/lib/connection.js:114:12
    at Parser.parse (/node_modules/pg-protocol/dist/parser.js:40:17)
    at Socket.<anonymous> (/node_modules/pg-protocol/dist/index.js:11:42)
    [... lines matching original stack trace ...]
    at Readable.push (node:internal/streams/readable:234:10) {
  length: 116,
  severity: 'FATAL',
  code: '57P01',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'postgres.c',
  line: '2933',
  routine: 'ProcessInterrupts'
}

Node.js v18.14.2
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
App running on port 80
Tue, 14 Mar 2023 07:14:36 GMT body-parser deprecated bodyParser: use individual json/urlencoded middlewares at server.js:73:9
Tue, 14 Mar 2023 07:14:36 GMT body-parser deprecated undefined extended: provide extended option at ../node_modules/body-parser/index.js:104:29
Waiting for db
Waiting for db
Connected to db

391dd8c19c7a

Connected to db
Found redis at 20.216.173.244
Connecting to redis
System.AggregateException: One or more errors occurred. (SocketFailure (ReadSocketError/ConnectionReset, last-recv: 5) on 20.216.173.244:6379/Interactive, Idle/Faulted, last: LPOP, origin: ReadFromPipe, outstanding: 1, last-read: 0s ago, last-write: 0s ago, unanswered-write: 0s ago, keep-alive: 280s, state: ConnectedEstablished, mgr: 9 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.2.4.27433)
 ---> StackExchange.Redis.RedisConnectionException: SocketFailure (ReadSocketError/ConnectionReset, last-recv: 5) on 20.216.173.244:6379/Interactive, Idle/Faulted, last: LPOP, origin: ReadFromPipe, outstanding: 1, last-read: 0s ago, last-write: 0s ago, unanswered-write: 0s ago, keep-alive: 280s, state: ConnectedEstablished, mgr: 9 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.2.4.27433
 ---> Pipelines.Sockets.Unofficial.ConnectionResetException: Connection reset by peer
 ---> System.Net.Sockets.SocketException (104): Connection reset by peer
   at Pipelines.Sockets.Unofficial.Internal.Throw.Socket(Int32 errorCode) in /_/src/Pipelines.Sockets.Unofficial/Internal/Throw.cs:line 59
   at Pipelines.Sockets.Unofficial.SocketAwaitableEventArgs.GetResult() in /_/src/Pipelines.Sockets.Unofficial/SocketAwaitableEventArgs.cs:line 79
   at Pipelines.Sockets.Unofficial.SocketConnection.DoReceiveAsync() in /_/src/Pipelines.Sockets.Unofficial/SocketConnection.Receive.cs:line 190
   --- End of inner exception stack trace ---
   at System.IO.Pipelines.PipeCompletion.ThrowLatchedException()
   at System.IO.Pipelines.Pipe.GetReadResult(ReadResult& result)
   at System.IO.Pipelines.Pipe.GetReadAsyncResult()
   at StackExchange.Redis.PhysicalConnection.ReadFromPipe() in /_/src/StackExchange.Redis/PhysicalConnection.cs:line 1550
   --- End of inner exception stack trace ---
   --- End of inner exception stack trace ---
   at Worker.Program.Main(String[] args) in /source/Program.cs:line 67
Waiting for db
Waiting for db
Connected to db
Found redis at 51.103.123.186
Connecting to redis
System.AggregateException: One or more errors occurred. (SocketFailure (ReadSocketError/ConnectionReset, last-recv: 5) on 51.103.123.186:6379/Interactive, Idle/Faulted, last: LPOP, origin: ReadFromPipe, outstanding: 1, last-read: 0s ago, last-write: 0s ago, unanswered-write: 0s ago, keep-alive: 280s, state: ConnectedEstablished, mgr: 9 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.2.4.27433)
 ---> StackExchange.Redis.RedisConnectionException: SocketFailure (ReadSocketError/ConnectionReset, last-recv: 5) on 51.103.123.186:6379/Interactive, Idle/Faulted, last: LPOP, origin: ReadFromPipe, outstanding: 1, last-read: 0s ago, last-write: 0s ago, unanswered-write: 0s ago, keep-alive: 280s, state: ConnectedEstablished, mgr: 9 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.2.4.27433
 ---> Pipelines.Sockets.Unofficial.ConnectionResetException: Connection reset by peer
 ---> System.Net.Sockets.SocketException (104): Connection reset by peer
   at Pipelines.Sockets.Unofficial.Internal.Throw.Socket(Int32 errorCode) in /_/src/Pipelines.Sockets.Unofficial/Internal/Throw.cs:line 59
   at Pipelines.Sockets.Unofficial.SocketAwaitableEventArgs.GetResult() in /_/src/Pipelines.Sockets.Unofficial/SocketAwaitableEventArgs.cs:line 79
   at Pipelines.Sockets.Unofficial.SocketConnection.DoReceiveAsync() in /_/src/Pipelines.Sockets.Unofficial/SocketConnection.Receive.cs:line 190
   --- End of inner exception stack trace ---
   at System.IO.Pipelines.PipeCompletion.ThrowLatchedException()
   at System.IO.Pipelines.Pipe.GetReadResult(ReadResult& result)
   at System.IO.Pipelines.Pipe.GetReadAsyncResult()
   at StackExchange.Redis.PhysicalConnection.ReadFromPipe() in /_/src/StackExchange.Redis/PhysicalConnection.cs:line 1550
   --- End of inner exception stack trace ---
   --- End of inner exception stack trace ---
   at Worker.Program.Main(String[] args) in /source/Program.cs:line 67
Waiting for db
Waiting for db
Waiting for db
Connected to db
Connecting to redis
Found redis at 20.216.146.34
Reconnecting Redis
Connecting to redis
Found redis at 20.216.146.34
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connected to db
Connecting to redis
Found redis at 20.216.171.52
Reconnecting Redis
Connecting to redis
Found redis at 20.216.171.52
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Connected to db
Found redis at 4.233.108.3
Connecting to redis
System.AggregateException: One or more errors occurred. (SocketFailure (ReadSocketError/ConnectionReset, last-recv: 5) on 4.233.108.3:6379/Interactive, Idle/Faulted, last: LPOP, origin: ReadFromPipe, outstanding: 1, last-read: 0s ago, last-write: 0s ago, unanswered-write: 0s ago, keep-alive: 280s, state: ConnectedEstablished, mgr: 9 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.2.4.27433)
 ---> StackExchange.Redis.RedisConnectionException: SocketFailure (ReadSocketError/ConnectionReset, last-recv: 5) on 4.233.108.3:6379/Interactive, Idle/Faulted, last: LPOP, origin: ReadFromPipe, outstanding: 1, last-read: 0s ago, last-write: 0s ago, unanswered-write: 0s ago, keep-alive: 280s, state: ConnectedEstablished, mgr: 9 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.2.4.27433
 ---> Pipelines.Sockets.Unofficial.ConnectionResetException: Connection reset by peer
 ---> System.Net.Sockets.SocketException (104): Connection reset by peer
   at Pipelines.Sockets.Unofficial.Internal.Throw.Socket(Int32 errorCode) in /_/src/Pipelines.Sockets.Unofficial/Internal/Throw.cs:line 59
   at Pipelines.Sockets.Unofficial.SocketAwaitableEventArgs.GetResult() in /_/src/Pipelines.Sockets.Unofficial/SocketAwaitableEventArgs.cs:line 79
   at Pipelines.Sockets.Unofficial.SocketConnection.DoReceiveAsync() in /_/src/Pipelines.Sockets.Unofficial/SocketConnection.Receive.cs:line 190
   --- End of inner exception stack trace ---
   at System.IO.Pipelines.PipeCompletion.ThrowLatchedException()
   at System.IO.Pipelines.Pipe.GetReadResult(ReadResult& result)
   at System.IO.Pipelines.Pipe.GetReadAsyncResult()
   at StackExchange.Redis.PhysicalConnection.ReadFromPipe() in /_/src/StackExchange.Redis/PhysicalConnection.cs:line 1550
   --- End of inner exception stack trace ---
   --- End of inner exception stack trace ---
   at Worker.Program.Main(String[] args) in /source/Program.cs:line 67
Waiting for db
Waiting for db
Waiting for db
Waiting for db
Waiting for db
Connected to db
Connecting to redis
Found redis at 20.216.172.49
Reconnecting Redis
Found redis at 20.216.172.49
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Connected to db
Found redis at 4.233.116.105
Connecting to redis
Reconnecting Redis
Connecting to redis
Found redis at 4.233.116.105
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for redis
Connecting to redis
Waiting for db
Waiting for db
Waiting for db
Waiting for db
Waiting for db
Connected to db
Found redis at 20.216.135.147
Connecting to redis