// we can create object using literals and constructor

// singleton --> create a object using constructor
//    Object.create
//    let user = new Object()


//literals

let num = Symbol(1);

const jsUser = {
    name:"sandeep",    // By default system processing the key as a string . ex-"name" 
    "full name":"Sandeep Kumar Jena",  // you can't access 'full name' using '.' operator , you can access only using '[]'
    age: 21,
    [num]:"45",    // we can assign symbol in object like this syntax . [num]
    location: "Barhampur",
    email: "sandeep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// access the object
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[num]);


// Override the value
// jsUser.email = "sandeep@chatgpt.com"
// Object.freeze(jsUser) // further you can't modify the jsUser object
// jsUser.email = "sandeep@microsoft.com"  // this is not override the value because the object is frozen()

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
}

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser ${this.name}`);
}

jsUser.greeting()    // Hello jsUser
jsUser.greetingTwo() // Hello jsUser sandeep



// ++++++++++++++++++++++++++++++  ++++++++++++++++++++++++++++++++

    // let emp = new Object()
    // emp.name = "sandeep"
    // emp.age = 20
    // emp.salary = 50000

    // console.log(emp);  // { name: 'sandeep', age: 20, salary: 50000 }


    function employee(name,age,salary){
        this.name = name
        this.age = age
        this.salary = salary
    }

    let emp1 = new employee("sandeep",20,50000) 
    let emp2 = new employee("rohit",25,70000)

    console.log(emp1);  // employee { name: 'sandeep', age: 20, salary: 50000 }
    console.log(emp2);  // employee { name: 'rohit', age: 25, salary: 70000 }


    //  Delete property from the object

        console.log(emp1);  // employee { name: 'sandeep', age: 20, salary: 50000 }
        delete emp1.salary
        console.log(emp1);  // employee { name: 'sandeep', age: 20 } 

    // Iterating

       for(let key in emp2){
        console.log(`${key}:${emp2[key]}`);
       }
    