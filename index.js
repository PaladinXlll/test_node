const express = require('express')

const app = express() // что-то вроде самого приложения

app.set('view engine', 'ejs') // тут можно пихнуть другой шаблонизатор 

app.get('/', (req, res) => {
    // res.send('This is home page')
    // res.sendFile(__dirname + '/templates/index.html')
    res.render('index')
})

app.get('/about', (req, res) => {
    // res.send('This is page about us')
    res.render('about')
})

// Через двоеточик указываются динамические значения
app.get('/user/:username/:id', (req, res) => {
    // res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`)
    let data = {
        username: req.params.username,
        hobbies: ['google', 'code', 'sleep']
    }
    res.render('user', data) // в следующих параметрах мы передаём объект на страницу
})

PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running...\nhttp://localhost:${PORT}`)
})