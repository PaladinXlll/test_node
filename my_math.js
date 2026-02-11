const add = (a, b) => {
    return a + b
}

// для импорта функций в другом файле, в этом их надо экспортировать (можно прописывать функционал функции прямо внутри exports)
module.exports = {
    add: add,
    minus: (a, b) => {
    return a - b
}
} 