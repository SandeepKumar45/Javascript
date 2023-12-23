let car = {
    make:"BMW",
    model:"XL60",
    year:2023
}

for(let key in car){
    console.log(`${key}: ${car[key]}`);
}