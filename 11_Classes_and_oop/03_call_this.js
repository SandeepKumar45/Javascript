function setUser(userName){
    this.userName = userName;
    console.log(userName);
}

function createUser(userName,email,password){
    setUser.call(this,userName)
    this.email = email
    this.password = password
}

let user1 = new createUser("babu","babuni@fb.com","123");
console.log(user1);