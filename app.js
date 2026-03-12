
const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

const chess = new Chess();
let player = {};
let currentPlayer = "w";

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, function () {
  console.log("listening on port 3000");
});