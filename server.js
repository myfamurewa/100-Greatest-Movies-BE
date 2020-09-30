const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

server.use(helmet.noSniff()); 
server.use(express.json());
server.use(cors());


server.get("/", (req, res) => {
    res.status(200).send("API functional")
})

module.exports = server;