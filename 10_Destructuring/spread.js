// Spread Operator

let arr = [10,20,30,40,50]

// new Array
// let newArr = [...arr]

// adding new values
// let newArr = [...arr,60]
// console.log(newArr);

// cancatenate two arrays
let arr1 = [60,70,80]
let newArr = [...arr,...arr1]
console.log(newArr);

// ************** Rest Operator *************

//   Destructuring
   let lang = ['HTML','CSS','JS','React','Node','Express','Mongo']
   const [lang1,lang2,...remainingLang] = lang;
   console.log(lang1,lang2); // html css
   console.log(remainingLang); // [ 'JS', 'React', 'Node', 'Express', 'Mongo' ]
