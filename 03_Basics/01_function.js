// first class citizen


// let sum = function add(a,b){
//     return a + b;
// }

// console.log(sum(10,20));




// function x(callBack){
//     console.log('hello');
//     callBack()
// }

// function y(){
//     console.log('bye');
// }

// x(y)




// function x(name){
//     return function y(){
//         console.log(`hello good morning ${name}`);
//     }
// }

// let y = x("sandeep")
// y()




// ****** *****

// function greet(){
//     console.log("hello");
// }

// // greet   --> reference
// greet()   // execution




// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage(""));   // just logged in
// console.log(loginUserMessage());   // undefined just logged in



// function loginUserMessage(userName){
//     if (!userName) {
//         console.log("Please enter a userName");
//         return;
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage());


// default value
    // function loginUserMessage(userName = "user"){
    //         return `${userName} just logged in`
    //     }

    //     console.log(loginUserMessage("sandeep"));  /// sandeep just logged in
    //     console.log(loginUserMessage());  // user just logged in




function greetings({city,name}){
    return `hello ${name} from city ${city}`
}

console.log(greetings({name:"sandeep" , city:"BAM"}));
