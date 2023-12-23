const promiseOne = new Promise(function(resolve,reject){
    //Do Async Task
    //DB calls, cryptography, Network
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

// *******************

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// *******************

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({userame:'sandeep',password:'123'})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})

// ********************

const promiseFour = new Promise(function(resolve,reject){
    const error = true
    setTimeout(()=>{
        if(!error){
            resolve({username:"soni",password:"121"})
        }
        else{
            reject("Error something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})

// *******************

const promiseFive = new Promise(function(resolve,reject){
    let error = true
    setTimeout(()=>{
        if(!error){
            resolve({language:"javascript",extension:"js"})
        }
        else{
            reject('ERROR js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()


// ******************

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()

// ******************

   fetch('https://randomuser.me/api/')
   .then((response)=>{
    return response.json()
   })
   .then((data)=>{
    console.log(data);
   })
   .catch((error)=>(console.log('E',error)))