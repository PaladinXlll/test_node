const { error } = require('console')
const fs = require('fs') // file sys

// разница между readFileSync/writeFileSync и readFile/writeFile в том что последние асинхронны
// для асинхронных функций 3-ий параметр = callback-функция
let result = fs.readFile('test_fs.txt', 'utf-8', (err, data1) => {
    fs.writeFile('test_fs.txt', data1 + '\nHello mf!', (err, data2) => {
        console.log(`All done! \n\n${data1}`)
    })
})


fs.mkdir('text-files', () => {
    fs.writeFile('./text-files/some.txt', 'Hellllllloooo motherfuckeeeeeers', () => {})
})


// unlink для удаления файлов, а rmdir - для удаления папок
fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('./text-files', () => {})
})