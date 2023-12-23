// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// **************Merging of objects******************

         // const obj3 = { obj1, obj2 }
         // console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


         // ******* using Object.assign() ******
         // const obj3 = Object.assign({},obj1,obj2)   //Object.assign(target,...source)
         // console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


         // ******* using spread operator *********
         // const obj3 = {...obj1,...obj2}
         // console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]  , .key() method return keys in the form of array
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]  , .value() method return values in the form of array
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // .hasOwnProperty() checks the passed key value present in the object or not



// +++++++++++++++++++++++++++ +++++++++++++++++++++++++++++++


let emp = {
    name:"sandeep",
    age:21,
    salary:50000
}

// Object.keys(emp).forEach((item) => console.log(item))  // name age salary

// Object.values(emp).forEach((item,index) => console.log(`${item} at index ${index}`))

// let keyValuePair = Object.entries(emp)
// console.log(keyValuePair);

// Object.entries(emp).forEach((item,index) => console.log(item))


// console.log(Object.isFrozen(emp));  // it checks whether the object is frozen or not


//    //  Object.seal()  // you can modify the exisiting property but you can't add new property
//    Object.seal(emp)
//    emp.name = "rohit"  // modified
//    emp.city = "bam"    // not added
//    console.log(emp);

//    console.log(Object.isSealed(emp));  // it checks whether the object is seal or not



// let emp1 = Object.create(emp) // emp1 can access the property of emp object
// console.log(emp1);  // {}
// console.log(emp1.name); // sandeep
// emp1.id = 10
// console.log(emp1);  // { id: 10 }
// console.log(emp);   // { name: 'sandeep', age: 21, salary: 50000 }


console.log(Object.hasOwn(emp,"name")); // true
console.log(Object.hasOwn(emp,"email")); // false

console.log(Object.getOwnPropertyNames(emp));  // [ 'name', 'age', 'salary' ]


// getOwnPropertyDescriptor --> description about the object property
console.log(Object.getOwnPropertyDescriptor(emp,"age")); // { value: 21, writable: true, enumerable: true, configurable: true }
// console.log(Object.getOwnPropertyDescriptors(emp));


// defineProperty --> modify decriptors about the property of the object
    //   Object.defineProperty(emp,"age",{
    //    value:20,
    //    writable:false
    //   })

    //   console.log(emp.age); // 20
    //   emp.age = 25  // --> can't be assign because age proerty is now not writable
    //   console.log(emp.age); //20


// defineProperties --> modify descriptor about one or more properties of a object 
      Object.defineProperties(emp,{
        name:{
            writable:false
        },
        age:{
            enumerable:false  // when loop on emp this age property can't be accessible
        }
      })


      for(let key in emp){
        console.log(`${key}:${emp[key]}`);   // name:sandeep   salary:50000  and age property can't be accessible using loop
      }
