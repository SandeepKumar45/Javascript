function generateOtp(){
    return Math.round(Math.random() * 10000)
}

console.log(`Here is your otp ${generateOtp()}`);