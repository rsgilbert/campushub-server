const express = require('express')
const Router = express.Router()

Router.get('/test', (req, res) => {
    res.json("Hello, Test is working")
})

module.exports = Router

