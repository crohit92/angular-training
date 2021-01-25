/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { json } from 'body-parser';
import * as express from 'express';
import * as cors from "cors";
import { connect } from "mongoose";
const app = express();
import { router as v1Controllers } from "./app/v1/controllers";

app.use(cors({
  origin: "*",
  methods: "*",
  headers: "*"
}))
app.use(json());
app.use((req, res, next) => {
  const orignalJson = res.json;
  // (<any>res.json) = (data) => {
  //   const response = {
  //     status: 200,
  //     data: data,
  //     error: null
  //   };
  //   orignalJson(response);
  // };
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
