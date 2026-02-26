const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json()) // middleware
// При каждом входящем запросе Express проверяет:
//     есть ли Content-Type: application/json
//     есть ли тело запроса
// Если да — парсит JSON
// Кладёт результат в req.body

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.get('/api/health', (req, res) => {
   res.json({
    ok: true
   }) 
})

app.get('/api/db-health', (req, res) => {
   pool.query("SELECT 1", (err) => {
    if (err) return res.status(500).json({
        ok: false,
        error: err.code || err.message || "Unexpected error"
    })
    res.json({
        ok: true
    })
   })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on ${PORT} port`)
})