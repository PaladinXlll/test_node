const os = require('os')
let res = os.platform()

console.log(res)

const my_math = require('./my_math')
let res1 = my_math.add(3, 5)
let res2 = my_math.minus(2, 444)
console.log(res1, res2)
