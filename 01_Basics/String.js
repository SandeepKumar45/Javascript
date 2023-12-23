const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  // hitesh50 Value

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // Hello my name is hitesh and my repo count is 50

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);  // h
// console.log(gameName.__proto__);  // prototype


// console.log(gameName.length);  // 13
// console.log(gameName.toUpperCase()); // HITESH-HC-COM
// console.log(gameName.charAt(2)); // t
// console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4) 
console.log(newString); // hite

// const anotherString = gameName.slice(-8, 4) //
// console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);  //    hitesh
console.log(newStringOne.trim()); // hitesh
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))  // https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))  // false

console.log(gameName.split('-'));  //  [ 'hitesh', 'hc', 'com' ] 




// ++++++++++++++++++++++ +++++++++++++++++++++++++

   let name1 = "sandeep"

   // Strings are immutable
   name1[1] = 'i';  // not assign because strings are immutable
   console.log(name1); // sandeep


//    console.log(name1.padEnd(10,'!'));  // sandeep!!!
//    console.log(name1.padStart(12,'!')); // !!!!sandeep


      console.log(name1.repeat(3));  // sandeepsandeepsandeep


      let name2 = "sandeep kumar kumar"
      console.log(name2.replace("kumar","jena"));  // sandeep jena kumar
      console.log(name2.replaceAll("kumar","jena"));  // sandeep jena jena


      console.log(name1.startsWith("s"));  // true
      console.log(name1.startsWith("a"));  // false

      console.log(name1.endsWith("eep")); // true
      console.log(name1.endsWith("e"));  // false

