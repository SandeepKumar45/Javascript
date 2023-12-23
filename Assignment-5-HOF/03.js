let productsInUsa = {
    iPhone:1500,
    macbook:2000,
    earpods:400,
    iWatch:200
}

let productsInIndia = {}

Object.keys(productsInUsa).map((item)=>{
   productsInIndia[item] = productsInUsa[item]*80
})
console.log(productsInIndia);
