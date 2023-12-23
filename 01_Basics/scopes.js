function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   // 6  ---> in this case you can call before function 
function addone(num){    // ---> function
    return num + 1
}



addTwo(5)  // Cannot access 'addTwo' before initialization  --> in this case you can't call before function
const addTwo = function(num){   // function OR expression
    return num + 2
}