'use restrict'

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('hello world')
})

app.post('/', function(req, res) {
    res.send("Hello, I am a post req")
})

app.put('/', function(req, res) {
    res.send("Hello, I am update something")
})

app.listen(8000, () => console.log("Listening on port 8000"))

