//every method
// The every() method of Array instances tests whether all
// elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let arr = [10,20,30,40,50]
let check = arr.every((item)=>typeof item === 'number')
console.log(check); // true

console.log(arr.every((item)=>item>20));  // false


// find() --> The find() method of Array instances returns the first element in the provided array that
//  satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found); // 12


// findIndex --> The findIndex() method of Array instances returns the index of the first element in an array that 
// satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // 3

// ************ some **********
// The some() method of Array instances tests whether at least one element in the array passes the test implemented
//  by the provided function. --> return boolean value
console.log(arr.some((item)=>item>40)); // true

// ******* sort *********
// The Array.prototype.sort() method in JavaScript is used to sort the elements of an array in place and return the sorted
//  array. By default, it sorts elements as strings



