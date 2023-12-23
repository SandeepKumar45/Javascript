let sec = 3
let interval = setInterval(()=>{
console.log(`Time Remaining ${sec} sec`);
sec--
if(sec<0){
    clearInterval(interval)
    console.log(`Random Number ${Math.ceil(Math.random()*100)}`);
}
},1000)



