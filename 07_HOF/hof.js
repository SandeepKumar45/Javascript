// A function that returns a function or takes other function as argument

const powerTwo = (n) => {
    return n**2
}
function powerCube(powerTwo,n){
    return powerTwo(n) * n
}
// console.log(powerCube(powerTwo,3));


function sayHello(){
    return () => ("Hello")
}
// console.log(sayHello()());
let guessVlaue = sayHello()
// console.log(guessVlaue());


const oneFun = (n) => {
    const twoFun = (m) => {
        const threeFun = (o) => {
            return n + m + o
        }
        return threeFun
    }
    return twoFun
}
// console.log(oneFun(5)(6)(7));


let arr = [2,3,4,5,6]
let sumOfArr = (arr) => {
    let total = 0
    for (const iterator of arr) {
        total += iterator
    }
    return total
}
// console.log(sumOfArr(arr));


// setInterval(()=>{
//     console.log("Hello");
// },1000)


setTimeout(()=>{
    console.log("Hello After 5sec");
},5000)
