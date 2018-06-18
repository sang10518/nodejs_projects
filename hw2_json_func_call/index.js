let jsonData =  require('./function.json')

const functionName = jsonData.function

const executeFuncInFile = function(func){
    eval(func)()
}

const callTest = function (){
    console.log('callTest called')
};

console.log(`function name is ${functionName}`)

// executeFuncInFile(callTest)
executeFuncInFile(functionName)

