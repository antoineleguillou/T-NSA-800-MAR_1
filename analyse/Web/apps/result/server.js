var express = require("express"),
  pg = require("pg"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  app = express();

var port = +process.env.PORT || 4000;

var pool = new pg.Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function getVotes(client) {
  return await new Promise((resolve, reject) =>
    client.query(
      "SELECT vote, COUNT(id) AS count FROM votes GROUP BY vote",
      [],
      function (err, result) {
        if (err) {
          console.error("Error performing query: " + err);
          reject(err);
        } else {
          var votes = collectVotesFromResult(result);
          console.log("getVotes.votes", votes);
          resolve(votes);
        }
      }
    )
  );
}

function collectVotesFromResult(result) {
  var votes = { a: 0, b: 0 };

  result.rows.forEach(function (row) {
    votes[row.vote] = parseInt(row.count);
  });

  return votes;
}

pool.connect().then((client) => {
  console.log(`postgres client connected !`);

  app.use(cookieParser());
  app.use(bodyParser());
  app.use(methodOverride("X-HTTP-Method-Override"));
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });

  app.use(express.static(__dirname + "/views"));

  app.get("/votes", async function (req, res) {
    const votes = await getVotes(client);
    return res.status(200).json({
      votes,
    });
  });

  app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname + "/views/index.html"));
  });

  app.listen(port, "0.0.0.0", function () {
    console.log("App running on port " + port);
  });
});
