class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}


class Teacher extends User{
    constructor(userName,email,password){
        super(userName);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course is added by ${this.userName}`);
    }
}

const sandeep = new Teacher("sandeep","sandeep@fb.com","123");
sandeep.addCourse()

console.log(sandeep instanceof Teacher);
console.log(sandeep instanceof User);