/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { json } from 'body-parser';
import * as express from 'express';
import * as cors from "cors";
const app = express();
import { router as v1Controllers } from "./app/v1/controllers";

app.use(cors({
  origin: "*",
  methods: "*",
  headers: "*"
}))
app.use(json());
app.use("/api/v1", v1Controllers);

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
