let emp = {
    name:"sandeep",
    age:21,
    id:452356,
    company:"google",
    salary:"100000"
}

function countProperties(obj){
    let keys = 0
    for(let key in obj){
        keys+=1
    }
    return keys
}

console.log(countProperties(emp));