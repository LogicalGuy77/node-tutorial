const { readFileSync, writeFileSync } = require('fs')
console.log('start')

let first = readFileSync('./folder/first.txt', 'utf-8')
let second = readFileSync('./folder/second.txt', 'utf8')

writeFileSync(
    './folder/result-sync.txt', `Here is result: ${first} ${second}`,
    { flag: 'a' } //append
)

console.log('Done with this task')
console.log('Starting new task')