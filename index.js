let map = new Map()
map.set(1,10)
map.set(2,20)
map.set(3,30)
map.set(4,40)

// map.get(3)+=1;
//map.set(3,map.get(3)+1)
// console.log(map);

// function calculateRemainingDays(eventDate) {
//     const currentDate = new Date();
//     const eventDateTime = new Date(eventDate);

//     const timeDifference = eventDateTime - currentDate;
//     console.log(timeDifference);
//     const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//     return daysRemaining;
// }

// const eventDate = '2023-12-31'
// console.log(calculateRemainingDays(eventDate));

let arr = [10,20,30,40,50]
let idx = arr.find((item,index,array)=>{
    return item==50
})

console.log(idx);