require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import admin from "./routes/admin";

// port
const PORT = 8080;

// express
const app = express();
const server = require("http").createServer(app);

// socket
var io = require("socket.io")(server);
app.set("io", io);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// body parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.text()); // support encoded bodies

// =========== ADD HEADERS ===========
app.use(function (req, res, next) {
  if (process.env.NODE_ENV === "production") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  }
  res.setHeader("Cache-Control", "max-age=0,no-cache,no-store,must-revalidate");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// socket
io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("a user connected");
});

// =========== INDEX.HTML ===========
app.get("/", function (request, response) {
  if (process.env.NODE_ENV === "production") {
    response.sendFile(path.resolve("client", "build", "index.html"));
  } else {
    response.sendFile(path.resolve("client", "public", "index.html"));
  }
});

// routes
app.use("/admin", admin);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
