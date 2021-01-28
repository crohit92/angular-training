/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

const errosCodes = {
  "ER_0001": "Something",
  "ER_0002": "Something Else ",
  "400": "ER_0001"
}

import { json } from 'body-parser';
import * as express from 'express';
import * as cors from "cors";
import { connect } from "mongoose";
import * as env from "dotenv";
const app = express();
import { router as v1Controllers } from "./app/v1/controllers";
import { join } from 'path';

app.use(cors({
  origin: "*",
  methods: "*",
  headers: "*"
}))
app.use(json());
console.log(join(__dirname, "assets", ".env"));
env.config({
  path: join(__dirname, "assets", ".env")
});
app.use((req, res, next) => {
  const orignalJson = res.json;
  (<any>res.json) = function (data) {
    const response = {
      status: res.statusCode,
      data: res.statusCode < 400 ? data : null,
      error: res.statusCode >= 400 ? data : null
    };
    orignalJson.call(res, response);
  };
  console.log("Json method overriden");
  next();
});
app.use("/api/v1", v1Controllers);

const port = process.env.port || 3000;
connect("mongodb://localhost:27017/training").then(() => {
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);

}).catch((err) => {
  console.log(err);
})
