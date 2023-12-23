let arr = [10,20,30,40,50]

// iterate
// arr.forEach(function(item,index,array){
//     console.log(`${item} at index ${index} in ${array}`);
// })


// +++++++ find +++++++
// let users = [
//     {id:1,name:"rohit"},
//     {id:2,name:"virat"},
//     {id:3,name:"surya"}
// ]

// let user = users.find(function(item,index,array){
//     return item.name=="rohit"
// })

// console.log(user);


// ++++++++++ findIndex +++++++++
// let users = [
//     {id:1,name:"rohit"},
//     {id:2,name:"virat"},
//     {id:3,name:"surya"}
// ]

// let user = users.findIndex(function(item,index,array){
//     return item.name=="virat"
// })

// console.log(user);


// +++++++ Reverse +++++++
// arr.reverse()  //Reverses the elements in an array
// console.log(arr);


// ++++++++++ split +++++++++  string to array
// let user = "rohit, virat, surya"

// let arr1 = user.split(',')
// console.log(arr1);  //[ 'rohit', ' virat', ' surya' ]

// let arr2 = user.split('')
// console.log(arr2);

// ++++++++++ join ++++++++++ array to string
// let arr1 = ["rohit","virat","dhawan"]

// let user = arr1.join("")  
// console.log(user);  //rohitviratdhawan

// let user2 = arr1.join(',')
// console.log(user2);  //rohit,virat,dhawan


let marvelHeros = ["ironMan","thor","spiderMan"]
let dcHeros = ["superMan","batMan","flash"]

// +++++++++++ spread +++++++++++++

// let allHeros = [...marvelHeros,...dcHeros]
// console.log(allHeros);


//+++++++++ ++++++++
// marvelHeros.push(dcHeros)
// console.log(marvelHeros);  //[ 'ironMan', 'thor', 'spiderMan', [ 'superMan', 'batMan', 'flash' ] ]


// ++++++++++ flat ++++++++
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// +++++++ +++++++

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting

// ++++ Array.of() ++++   Returns a new array from a set of elements.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]
