function calculateTotalCartValue(...prices){
    let total = 0
    for(let price of prices){
        total+=price
    }
    console.log(`The total cart value is ${total}`);
}

calculateTotalCartValue(125,20,30,40)