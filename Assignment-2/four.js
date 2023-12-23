const products = [
    { name:"Laptop" , price:120000},
    { name:"Mobile" , price:70000},
    { name:"Laptop Bag" , price:20000},
    { name:"Watch" , price:20000},
    { name:"Mobile Charger" , price:1500},
]

function highLowProduct(){
    let expenProductVal = Number.MIN_VALUE
    let expenProductName

    let cheapProductVal = Number.MAX_VALUE
    let cheapProductName

    for(let value of products){
        if(value.price>expenProductVal){
            expenProductVal = value.price
            expenProductName = value.name
        }
        if(value.price<cheapProductVal){
            cheapProductVal = value.price
            cheapProductName = value.name
        }
    }
    console.log(`The product with maximum amount is ${expenProductName} which is priced at RS. ${expenProductVal}`);
    console.log(`The product with minimum amount is ${cheapProductName} which is priced at RS. ${cheapProductVal}`);
}

highLowProduct()