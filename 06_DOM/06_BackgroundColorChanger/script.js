const btn = document.querySelector(".btn")
const hexCode = document.getElementById("colorValue")

btn.addEventListener('click',()=>{
   const hexColor = colorGenerator()
   document.body.style.backgroundColor = hexColor
   hexCode.innerText = hexColor
})

let hexValue = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

function colorGenerator(){
   let hexColor = "#"
   for(let i=1;i<=6;i++){
      hexColor+=hexValue[Math.floor(Math.random()*16)]
   }
   return hexColor
}






