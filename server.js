'use strict'

const express = require('express')
const app = express()
// const server = require('http')createServer(app)
// const ws = require('socket.io')(server)

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('you made this')
})


app.listen(PORT, () => {
    console.log(`server up and running on port: ${PORT}`)
})
