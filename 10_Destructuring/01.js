// Array destructuring
let arr = [10,20,30,40,50]
const [a,b,,d] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(d); // 40

// String destructuring
let str = "sandeep"
const[x,y,z] = str
console.log(x);
console.log(y);
console.log(z);

// Object destructuring
let user = {
    name:"sandeep",
    email:"sandeep@gmail.com"
}

const {name,email} = user
console.log(name);

let employee = {
    name:"john",
    empId:45
}

// const{name:userName,empId:id} = employee
// console.log(userName);
// console.log(id);


// special function with parameter
let user1 = {
    name:"john",
    age:30,
    city:'Delhi',
    ocuupation:'Engineering',
    comments:{
        id:212121,
        date:"16 sep 2023"
    }
}

function specialFun({city,age,name}){  // destructure in parameter
    console.log(city);
    console.log(age);
    console.log(name);
}
specialFun(user1)

// nested object destructuring
const {comments:{id,date}} = user1
console.log(id);
console.log(date);