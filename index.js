const express = require('express');
require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
    res.send(`<h1>Hello ${process.env.MYNAME}</h1>`)
})

app.get('/login', (req, res) => {
    res.send('Login')
})

app.get('/home', (req, res) => {
    res.send('<h1>Home</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})