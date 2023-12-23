// Constructor function

  function User(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
  }

  const john = new User("john",21);   // new --> constructor function
  john.greet()


//   Factory function  --> not need to use new keyword

     function createPerson(name,age){
        return {
            name:name,
            age:age,
            greet:function(){
                console.log(`My name is ${this.name} and my age is ${this.age}`);
            }
        }
     }

     const rahul = createPerson("rahul",25);
     rahul.greet()