require('dotenv').config()
const express = require("express");
const passport = require('passport')
const morgan = require('morgan')
const helmet = require("helmet");
const cors = require("cors");
const server = express
server.use(helmet.noSniff()); 
server.use(express.json());
server.use(cors());
server.use(morgan('dev'))
server.use(passport.initialize())
server.use(passport.session())
const authRouter = require('./routers/auth-router')
const commentRouter = require('./routers/comments-router')
const moviesRouter = require('./routers/movies-router')
const userRouter = require('./routers/users-router')

server.use('/auth', authRouter)
server.use('/users', userRouter)
server.use('/movies', moviesRouter)
server.use('/comments', commentRouter)
server.get("/", (req, res) => {
    res.status(200).send("API functional")
})

module.exports = server;