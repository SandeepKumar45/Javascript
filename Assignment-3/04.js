let emp = {
    name:"sandeep",
    age:21,
    id:452356,
    company:"google",
    salary:"100000"
}

function isPresent(obj,property){
    if(obj.hasOwnProperty(property)){
        console.log("Yes this property is exist");
    }
    else{
        console.log("Not exist");
    }
}

isPresent(emp,"name")