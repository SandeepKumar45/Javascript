function logString(str){
    console.log(`The manipulated string is : ${str}`);
}
function manipulateString(str,fun){
    let uppercase = str.toUpperCase()
    return fun(uppercase)
}

manipulateString("hello, world",logString)
