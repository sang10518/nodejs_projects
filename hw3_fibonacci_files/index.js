const fs = require('fs')

let mFirstRead, mSecondRead = false
let mFirst, mSecond = -1
let mWriteCount = 0

const callback = function (path) {
    console.log(`callback func ${path}`)
    return function (err, data) {
        if (err) {
            throw err;
        }
        console.log('path :' + path);
        console.log(data.toString())

        if (path === './file0'){
            mFirstRead = true
            mFirst = data
        } else {
            mSecondRead = true
            mSecond = data
        }

        if (mFirstRead && mSecondRead){
            let target = './file0'
            if (parseInt(mFirst) > parseInt(mSecond)){
                target = './file1'
            } else {
                target = './file0'
            }
            writeLesserFile(target, mFirst, mSecond)
        }
    }
}

const readEachFile = function(){
    console.log('readEachFile')
    //absolute path
    fs.readFile('./file0', callback('./file0'))
    fs.readFile('./file1', callback('./file1'))
}

const writeLesserFile = function(target, first, second){
    console.log(`writeLesserFile: ${first} + ${second} to ${target}`)
    //after write, reset both reads
    mFirstRead = false
    mSecondRead = false

    fs.writeFile(target, parseInt(first)+parseInt(second), (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;
        mWriteCount++

        // success case, the file was saved
        console.log('Written!');
        if (mWriteCount < 1){
            console.log('read again at count ' + mWriteCount)
            readEachFile()
        }
    });

}

readEachFile()

