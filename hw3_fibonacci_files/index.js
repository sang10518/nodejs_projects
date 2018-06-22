const fs = require('fs')

const callback = function (path) {
    return function (err, data) {
        if (err) throw err;
        console.log('path :' + path);
        console.log(data.toString())
    }
}

const readEachFile = function(){
    console.log('readEachFile')
    fs.readFile('./file0', callback('./file0'))
    fs.readFile('./file1', callback)
}

const writeLesserFile = function(){
    console.log('writeLesserFile')
}

readEachFile()

