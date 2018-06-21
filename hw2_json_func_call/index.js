let jsonData =  require('./function.json')

let functionName = jsonData.function

const executeFuncInFile = function(func){
    const check = eval( 'typeof ' + func )
    if ( check == 'function' ) {
        eval(func)()
    }
    else {
        console.log(`${func} is undefined as a function`);
    }
}

const callTest = function (){
    console.log('callTest called')
};

const callTestInt = 1

console.log(`function name is ${functionName}`)

// executeFuncInFile(callTest)
executeFuncInFile(functionName)