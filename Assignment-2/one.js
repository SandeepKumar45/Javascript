let users = ["rohit","gill","virat","surya","rahul","pandya","jadeja","kuldeep","shami","siraj","bumrah"]

function isUserPresent(user){
    for(let name of users){
        if(name === user){
            console.log(`yes, ${user} is a valid user`);
            return
        }
    }
    console.log(`No, ${user} is not a valid user`);
}

isUserPresent("rohit")