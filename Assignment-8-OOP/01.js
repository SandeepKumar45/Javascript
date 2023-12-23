class BankAccount {
  constructor(name, initBalance) {
    this.name = name;
    this.initBalance = initBalance;
  }
  checkBalance(){
    console.log(`Account balance for ${this.name}: Rs.${this.initBalance}`);
  }
  deposit(amount) {
    if (amount < 0) {
      console.log("Invalid deposit amount. please enter a positive amount");
    } else {
      this.initBalance += amount;
      console.log(
        `Deposited Rs.${amount}. New balance: Rs.${this.initBalance}`
      );
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.initBalance) {
      this.initBalance -= amount;
      console.log(
        `Withdrawn Rs.${amount}. New balance: Rs.${this.initBalance}`
      );
    } 
    else if (amount > this.initBalance) {
      console.log("Insufficient funds for withdrawl");
    } 
    else {
        console.log("Invalid withdrawl amount. please enter a positive amount");
    }
  }
}


const myAccount = new BankAccount("sandeep",1000);
myAccount.checkBalance()

myAccount.deposit(500)
myAccount.deposit(-50)

myAccount.withdraw(200)
myAccount.withdraw(1500)
myAccount.withdraw(-500)

myAccount.checkBalance()

