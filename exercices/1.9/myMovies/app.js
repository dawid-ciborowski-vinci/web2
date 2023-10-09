const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const moviesRouter = require("./routes/movies");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const stats = {};

app.use((req, res, next) => {
  const currentOperation = `${req.method} ${req.path}`;
  const currentOperationCounter = stats[currentOperation];
  if (currentOperationCounter === undefined) stats[currentOperation] = 0;
  stats[currentOperation] += 1;
  const statsMessage = `Request counter : \n${Object.keys(stats)
    .map((operation) => `- ${operation} : ${stats[operation]}`)
    .join("\n")}
      `;
  // eslint-disable-next-line no-console
  console.log(statsMessage);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);

module.exports = app;
