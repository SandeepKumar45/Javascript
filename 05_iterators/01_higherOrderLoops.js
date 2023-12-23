let str = "snadeep kumar"

let arr = [1,2,3,4,5,6,7,8,9,10]

let arrObj = [
    {name:"javascript",extension:'js'},
    {name:"java",extension:'java'},
    {name:"python",extension:'py'}
]

let obj = {
    name:"snadeep",
    age:21,
    id:85659
}

let map = new Map()
map.set('name',"sandeep")
map.set('age',21)
map.set('company',"google")
map.set('id',3845)

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)


// forof loop 

   // On String
      for (const character of str) {
       // console.log(character);  // all the character will be print
      }

    // On Array
       for (const item of arr) {
        //console.log(item); // all the element in the array will be print
       }

    // On Array of Object 
       for (const item of arrObj) {
        //console.log(item); // all the object in the array will be printed
       }

    // On Object --> forof loop can't work on object

    //    for (const item of obj) {
    //     //console.log(item);  // ERROR --> obj is not iterable
    //    }

    //    for (const [key,value] of obj) {
    //     //console.log(key,value);  // ERROR --> obj is not iterable
    //    }

    // On Map
    //    for (const key of map) {
    //     //console.log(key);  //  print all the value with key with a separate array
    //    }

    //    for (const [key,value] of map) {
    //     console.log(key,":-",value); // key will give key and value will give value
    //    }

    // On Set
    //    for (const item of set) {
    //     console.log(item); // all the value will print
    //    }



// forin loop  --> for(const key in object) --> key->key , object[key]->value
    // On String
    // for (const item in str) {
    //     console.log(item); // all the indices will print
    //     console.log(str[item]);  // all the character will be print
    //    }
 
     // On Array
        // for (const item in arr) {
        //  console.log(item); // all the index in the array will be print
        //  console.log(arr[item]); // all the element will print
        // }
 
     // On Object --> 
 
        // for (const key in obj) {
            // console.log(key); // all the key will print
            //console.log(obj[key]); // all the value will print
        // }
 
     // On Map  --> forin loop can't work on map
        // for (const key in map) {
        //  console.log(key);  // 
        // }
 
     // On Set --> forin loop can't work on set
        // for (const item in set) {
        //  console.log(item); // 
        // }

// foreach loop

    // On String --> no foreach loop for string

    // On Array
    //    arr.forEach((item,index,array)=>{
    //     console.log(`index:${index} item:${item} array:${array}`); // index,value and array will print
    //    })

    // On Array of object
    //    arrObj.forEach((item,index,array)=>{
    //      console.log(item.name); // all the name will print
    //     })

    // On object --> can't use on object
    //    obj.forEach((value,key)=>{
    //     console.log(`${key} -> ${value}`); 
    //    })

    // On Map
    //    map.forEach((value,key)=>{
    //     console.log(`${key} -> ${value}`); //all the key and value will print
    //    })

    // On set
    //    set.forEach((value)=>{
    //     console.log(value); // all the element will print
    //    })
   

    


