// ************Regular Expression***************  --> pattern matching

// A regular expression, often abbreviated as "regex" or "regexp," is a powerful tool used in
// computer science and programming for pattern matching within strings. It allows you to
// search for, match, and manipulate text based on a specified pattern. Regular expressions are
// supported in many programming languages, including JavaScript, Python, Java, and more.

 let pattern = 'pw'

//  Method-1
 let regExOne = new RegExp(pattern)

//  Method-2
 let flag = 'gi'  // g--> globally  t--> case insensitive
 let regExTwo = new RegExp(pattern,flag)

//  Method-3
 let regExThree = /pw/gi

 const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"


 const result = regExOne.test(strToCheck)
 console.log(result); //true

 const anotherResult = strToCheck.match(regExThree)
 console.log(anotherResult); // [ 'pw', 'pw', 'pw' ]

 const result2 = strToCheck.replace(regExTwo,"p-w")
 console.log(result2); // pw replace with p-w


//   ******** example *******
  const webUrl = "https://pwskills.com/sandeep%20jena"

//   const useableUrl = webUrl.replace(/%20/,"-")
//   console.log(useableUrl); // https://pwskills.com/sandeep-jena

const useableUrl = webUrl.replace(/%\d\d/,'-')  // \d -> digit , here %\d\d means 2digits after %
console.log(useableUrl);


// resources -> https://regexr.com/
