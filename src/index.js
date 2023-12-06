const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
const AuthRoute = require("./Routes/Auth.route");

const { verifyAccessToken } = require("./helpers/jwt_helper");
require("./helpers/init_mongodb");

require("./helpers/init_redis");

const app = express();

// since it's only a logger so we can also use "dev" in production to log our requests.
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  return next();
});

app.get("/", verifyAccessToken, async (req, res, next) => {
  res.send("home page");
});

app.use("/auth", AuthRoute);

app.use(async (req, res, next) => {
  /*  const error = new Error("Not found");
  error.status = 404;
  next(error); */
  next(createError.NotFound("this route does not exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
