// Multiple arguments in a function

    // using argument object

        // function calculateCartPrice(){
        //     // console.log(arguments);   //array like structure but not an array
        //     let value = arguments
        //     let arr = Array.from(arguments)  // convert to array
        //     let totalvalue = 0
        //     for(let i=0;i<arr.length;i++){
        //         totalvalue += arr[i]
        //     }
        //     console.log(totalvalue);
        // }

        // calculateCartPrice(10,20,30,40,50)


    //  Using rest operator

        // function calculateCartPrice(...itemPrice){
        //     // console.log(itemPrice);  // return an array by combining all the values
        //     let totalPrice = 0
        //     for(let i=0;i<itemPrice.length;i++){
        //         totalPrice += itemPrice[i]
        //     }
        //     console.log(totalPrice);
        // }

        // calculateCartPrice(100,200,300,400)



// ****** ******

  function print(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
  }

  let obj = {
    name:"sandeep",
    price:199
  }

  print(obj)