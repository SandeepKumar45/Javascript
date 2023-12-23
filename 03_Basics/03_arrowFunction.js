// Normal Function

    //    function add(num1,num2){
    //     return num1 + num2
    //    }

    //    console.log(add(10,20));


//arrow function

    // let add = (num1,num2) => {    
    //     return num1 + num2       // explicit return
    // }

    //let add = (num1,num2) => num1 + num2   //implicit return

    // let add = (num1,num2) => (num1 + num2)  //implicit return

    // console.log(add(10,20));


// argument object cannot be accessible by arrow function

    // let add = () => {
    //     console.log("hello");
    //     console.log(arguments);  // arguments is not defined
    // }

    // add()


// this keyword in arrow function and regular function

        // let user = {
        //  userName:"sandeep",
        //  greet:function(){
        //      console.log(this);   // {userName: 'sandeep', greet: ƒ, greetTwo: ƒ}
        //      return `hello ${this.userName}`   
        //  },
        //  greetTwo:() => {
        //      console.log(this);   // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        //      return `hello ${this.userName}`   // lexical scope
        //  }
        // }

        // console.log(user.greet());  // hello sandeep
        // console.log(user.greetTwo()); // hello undefined


//**********  ************

//    Note : Global object in browser -> window object


    //     function () {
    //     let username = "hitesh"
    //     console.log(this.username);  //undefined
    // }

     // const chai = function () {
     //     let username = "hitesh"
     //     console.log(this.username);  //undefined
     // }


// Note: if you use {} bracket in arrow function then you must have to use return keyword 
// Note: if you use () bracket in arrow function then you don't have to use return keyword


    //   const addTwo = (num1, num2) => {username: "hitesh"} // you can't return object like this you have wrap this in ()
    //   console.log(addTwo(3, 4)) //undefined


    // const addTwo = (num1, num2) => ({username: "hitesh"})
    //   console.log(addTwo(3, 4)) //{ username: 'hitesh' }
   