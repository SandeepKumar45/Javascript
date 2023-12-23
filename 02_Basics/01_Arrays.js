let arr = [10,20,30,40,50]

// console.log(arr[0]);
// console.log(arr[5]); // undefined

// delete arr[1] // Not a very useful
// console.log(arr); // [ 10, <1 empty item>, 30, 40, 50 ]

// push pop (Add,remove element from the end of the array) 
// arr.push(60)
// console.log(arr);  //[ 10, 20, 30, 40, 50, 60 ]

// arr.pop()
// console.log(arr);  //[ 10, 20, 30, 40, 50 ]

// Shift Unshift (Add,Remove element from the start of the array)
// arr.unshift(100)
// console.log(arr);  //[ 100, 10, 20, 30, 40, 50 ]

// arr.shift()
// console.log(arr);  //[ 10, 20, 30, 40, 50 ]

// .includes();
// console.log(arr.includes(50)); //true
// console.log(arr.includes(70)); //false

//.indexOf()
// console.log(arr.indexOf(20)); //1
// console.log(arr.indexOf(60)); //-1

// Slice  Splice

//++++++++ slice +++++++   Returns a copy of a section of an array.

// let arr1 = arr.slice(0,3);  // arr[sI,eI] but not including end index
// console.log(arr1);   //[ 10, 20, 30 ]
// console.log(arr);    //[ 10, 20, 30, 40, 50 ] 

// let copyarr = arr.slice(); //copy of the array
// console.log(copyarr);

//   ++++++++ splice ++++++++
// swiss knife
// add , delete , replace
// syntax: arr.splice(sI,deleteCount,arg,arg2...)

     //delete
     //  let deleteItems = arr.splice(0,3)  // starting from index 0 remove 3 elements from the array
     //  console.log(deleteItems); //[ 10, 20, 30 ]
     //  console.log(arr);  //[ 40, 50 ]

     //replace
     // arr.splice(0,3,70,80); // starting from index 0 remove 3 elements from the array and add 70,80 from index 0 to the array
     // console.log(arr);  // [ 70, 80, 40, 50 ]

     //add
     // arr.splice(0,0,70,80) //no element remove add 70,80 from index 0
     // console.log(arr); [ 70, 80, 10, 20, 30, 40, 50 ]

     // arr.splice(-1,0,100)
     // console.log(arr); //[ 10, 20, 30, 40, 100, 50 ]


// concat   returns a new array without modifying any existing arrays.
 let newArr = arr.concat([60,70])
// console.log(arr); //[ 10, 20, 30, 40, 50 ]
// console.log(newArr); // [ 10, 20, 30, 40, 50, 60, 70 ]

// console.log(arr.concat([60,70],[80,90])); //[ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
// console.log(arr.concat([60,70],80,90)); // [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]


