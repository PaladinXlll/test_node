const express = require('express')

const app = express() // что-то вроде самого приложения

app.get('/', (req, res) => {
    res.send('This is home page')
})

app.get('/about', (req, res) => {
    res.send('This is page about us')
})

// Через двоеточик указываются динамические значения
app.get('/user/:username/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
})

PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running...\nhttp://localhost:${PORT}`)
})