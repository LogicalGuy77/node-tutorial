const { readFile, writeFile } = require('fs')

//we use callback to check for error

console.log('Starting task')

readFile('./folder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./folder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result

        writeFile(
            './folder/result-async.txt', `Here is result: ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('Done with task')
            })
    })
})

console.log('Starting next task')