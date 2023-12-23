function logResult(fullname,ageindays){
    return `The person full name is ${fullname} and their age in days is ${ageindays}`
}

function ageInDays(person,fun){
    const fullName = `${person['first name']} ${person['last name']}`
    const ageinDays = person.age * 365
    return fun(fullName,ageinDays);
}


const myDetails = {
    'first name':'Sandeep',
    'last name':'jena',
    age:21
}

let output = ageInDays(myDetails,logResult)
console.log(output);