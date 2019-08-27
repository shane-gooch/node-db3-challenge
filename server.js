const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());
server.use("/api/schemes", SchemeRouter);
server.use(function(req, res) {
  res.status(404).send("<h1>Invalid URL</h1>");
});

module.exports = server;
