// const fs = require('fs')
// const first = fs.readFileSync('./folder/first.txt', 'utf-8')

const { readFileSync, writeFileSync } = require('fs')

let first = readFileSync('./folder/first.txt', 'utf-8')
let second = readFileSync('./folder/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './folder/result.txt', `Here is result: ${first} ${second}`,
    { flag: 'a' } //append
)