
const names = require('./1-name')
const sayHi = require('./2-util')
let data = require('./3-altExport')
require('./4-invokeWithoutExport')

sayHi(names.nayan)
sayHi('Zello')
sayHi(names.harsh)