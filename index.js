const http = require('http')
const fs = require('fs')


// createServer в параметрах принимает callback-функцию (которая выполнится после создания сервака)
// req = request; res = responce
let server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    // res.end('Hello from fucking node JS!')

    if (req.url == '/') {
        const stream = fs.createReadStream('./templates/index.html')
        stream.pipe(res) // этот метод отправляет инфу на сервер, в то время как createread считывает инфу частями
    } else if (req.url == '/about') {
        fs.createReadStream('./templates/about.html').pipe(res)
    } else {
        fs.createReadStream('./templates/error.html').pipe(res)
    }

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    // res.end('Hello from fucking <b>node JS</b>!')
    
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`Server is running: http://${HOST}:${PORT}`)
})