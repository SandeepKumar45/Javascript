function greetings(name){
  return new Promise(function(resolve,reject){
        resolve(`Hello,${name}!`)
    })
}

console.log(greetings("sandeep"));