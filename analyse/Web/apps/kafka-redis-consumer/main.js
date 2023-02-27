const { Kafka } = require("kafkajs");
const redis = require("thunk-redis");
const Bluebird = require("bluebird");
const pg = require("pg");
const express = require("express");

const KAFKA_BROKERS = process.env.KAFKA_BROKERS.split(",");
const KAFKA_CONSUMER_GROUP_ID = process.env.KAFKA_CONSUMER_GROUP_ID;
const KAFKA_TOPIC = process.env.KAFKA_TOPIC;
const REDIS_PORT = +process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_WATCHED_KEY = process.env.REDIS_WATCHED_KEY || "votes";

const httpServer = express();

const pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("error", (err) => {
  console.log(`postgres client error`, err);
  process.exit(-1);
});

const kafkaClient = new Kafka({
  clientId: "kafka-redis-consumer",
  brokers: KAFKA_BROKERS,
});

const redisClient = redis.createClient([`${REDIS_HOST}:${REDIS_PORT}`], {
  authPass: REDIS_PASSWORD,
  IPMap: {
    [`${REDIS_HOST}:${REDIS_PORT}`]: `${REDIS_HOST}:${REDIS_PORT}`,
  },
  usePromise: Bluebird,
});

redisClient.on("error", (err) => {
  console.log(`redis client error`, err);
  process.exit(-1);
});

redisClient.on("connect", function () {
  console.log("redis connected!");
});

pool.connect().then(async (postgresClient) => {
  const consumer = kafkaClient.consumer({ groupId: KAFKA_CONSUMER_GROUP_ID });
  await consumer.connect();
  await consumer.subscribe({ topic: KAFKA_TOPIC, fromBeginning: true });
  httpServer.get("/", (req, res) => {
    return res.status(200).send();
  });
  httpServer.listen(80, "0.0.0.0", () => {
    console.log(`server running at http://0.0.0.0:80`);
  });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const parsedMessage = JSON.parse(message.value.toString());
        const payload = parsedMessage.payload;
        console.log(payload);
        if (payload?.message === REDIS_WATCHED_KEY) {
          const lastValue = await redisClient
            .lrange(REDIS_WATCHED_KEY, -1, -1)
            .then((values) => (values.length ? JSON.parse(values[0]) : null));

          console.log(lastValue);

          if (!lastValue?.vote || !lastValue.voter_id) {
            throw new Error(`Missing value for vote`);
          }

          // check if voter_id exists
          const checkQuery = "SELECT * FROM votes WHERE id = $1";
          const checkValues = [lastValue.voter_id];

          const existingData = await new Promise((resolve, reject) =>
            postgresClient.query(
              checkQuery,
              checkValues,
              function (err, result) {
                if (err) {
                  reject(
                    `Error fetching data: ${
                      err.message
                    }, values: ${checkValues.join(", ")}`
                  );
                }
                resolve(result);
              }
            )
          );

          console.log(existingData);

          if (existingData && existingData.rows && existingData.rows.length) {
            // insert in database
            const updateQuery = "UPDATE votes SET vote = $1 WHERE id = $2";
            const updateValues = [lastValue.vote, lastValue.voter_id];
            await new Promise((resolve, reject) =>
              postgresClient.query(
                updateQuery,
                updateValues,
                function (err, result) {
                  if (err) {
                    reject(
                      `Error updating data: ${
                        err.message
                      }, values: ${updateValues.join(", ")}`
                    );
                  }
                  resolve(result);
                }
              )
            );
          } else {
            // insert in database
            const insertQuery =
              "INSERT INTO votes(vote, id) VALUES($1, $2) RETURNING *";
            const insertValues = [lastValue.vote, lastValue.voter_id];
            await new Promise((resolve, reject) =>
              postgresClient.query(
                insertQuery,
                insertValues,
                function (err, result) {
                  if (err) {
                    reject(
                      `Error inserting data: ${
                        err.message
                      }, values: ${insertValues.join(", ")}`
                    );
                  }
                  resolve(result);
                }
              )
            );
          }
        }
      } catch (error) {
        console.log("ERROR", error);
      }
    },
  });
});
