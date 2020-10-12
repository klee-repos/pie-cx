require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";

import admin from "./routes/admin";

// port
const PORT = 8080;

// express
const app = express();
const server = require("http").createServer(app);

// body parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.text()); // support encoded bodies

// authentication
const auth = require("./auth");
app.use(auth);

// routes
app.use("/admin", admin);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
