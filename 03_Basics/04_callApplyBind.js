// +++++++++ ++++++++++

   //   you can use function as object also 
         // function printName(name){
         //  return `hello ${name}`
         // }

         // console.log(printName("sandeep"));
         // printName.city = "BAM"   // here we use the function as object 
         // console.log(printName.city);


   // +++++++++++++++  call apply bind ++++++++++++++++ 

   //  NOTE: call,apply & bind methods are present in functions's object version

            //  they are used to control the context of 'this' keyword

            // Method borrowing


    

      let user1 = {
         name:"sandeep"
      }

      let user2 = {
         name:"rohit"
      }

      function greetings(city){
         console.log(`hello ${this.name} from city ${city}`);    
      }

      // +++++++++ call +++++++

           // greetings()  // hello undefined from city undefined   // here this reference to global object

           //    //   NOTE: remember in call,apply & bind method what you pass in first argument
           //    //         the corresponding function's this keyword reference to the object

           // greetings.call(user1,"barhampur")  //hello sandeep form city barhampur
           // greetings.call(user2,"mumbai")  //hello rohit from city mumbai


      //   ++++++++ apply +++++++

           //   apply method is also same as call method but in call method you pass the rest
           //    argument in Comma(,) separeted value but in case of
           //     "apply method you pass the rest of the argument in square bracket [] or form of array"

            //   greetings.apply(user1,["bam"])  //hello sandeep from city bam
            //   greetings.apply(user2,["bombay"])  //hello rohit from city bombay


      //++++++ bind ++++++

       // bind method is same like call method but bind method return a function

            //   let bindFun1 = greetings.bind(user1,"BAM")
            //   let bindFun2 = greetings.bind(user2,"Mumbai")

            //   bindFun1()
            //   bindFun2()