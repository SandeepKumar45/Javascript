// Unordered collection

// unique values

let set = new Set()
console.log(set); // Set(0) {}

set.add(10)
set.add(20)
console.log(set); // Set(2) { 10, 20 }

set.add(10) // this value can't be added because set stores only unique value
set.add(20) // this value can't be added because set stores only unique value
console.log(set); // Set(2) { 10, 20 }

console.log(set.size);  // 2 --> size of the set

// set.clear() // clear the set
// console.log(set); // Set(0) {}

set.add(30)
set.add(40)
console.log(set); // Set(4) { 10, 20, 30, 40 }

// +++ if you want to delete a element +++
//   set.delete(30) // delete 30 from the set
//   console.log(set); // Set(3) { 10, 20, 40 }


//   set.add({
//     name:"sandeep"
//   })
//if you want to key-Pair value --> then entries method
  // here   
  //console.log(set.entries());  // key also same as values ex- { name: 'sandeep' }, { name: 'sandeep' }


  //set.forEach((item,index,sett)=> console.log(`data[${item} : data[${index*2}]`))


//   console.log(set.has(20)) // true
//   console.log(set.has(50)) // false

//   console.log(set.keys()); // [Set Iterator] { 10, 20, 30, 40 } --> iterate and return the values
//   let val = set.values()
//   console.log(val); // [Set Iterator] { 10, 20, 30, 40 } --> values also work same as keys

   // Convert Array to set

   let arr = [10,20,30,10,20,30,10,20,30]
   console.log(arr); // [10,20,30,10,20,30,10,20,30]

    // Array to Set
       let mySet = new Set(arr)
       console.log(mySet);  // Set(3) { 10, 20, 30 } --> remove all duplicate elements

    // Set to Array
       console.log(Array.from(mySet)); // [ 10, 20, 30 ]  

