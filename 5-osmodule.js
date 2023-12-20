let os = require('os')

//info about the user
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const curresntOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(curresntOs)