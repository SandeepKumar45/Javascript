class User{
    constructor(userName,email){
        this.userName = userName;
        this.email = email;
    }
    get userName(){
        return this._userName.toUpperCase()
    }
    set userName(name){
        this._userName = name;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const babu = new User("babu","babu@babuni.com");
console.log(babu.userName);
console.log(babu.email);


// ***********************************

    // Using defineProperty

    function User1(userName,password){
        this._userName = userName;
        this._password = password;

        Object.defineProperty(this,'userName',{
            get:function(){
                return this._userName.toUpperCase();
            },
            set:function(value){
                this._userName = value
            }
        })
    }

    const soni = new User1("soni","soni@fb.com")
    console.log(soni.userName);