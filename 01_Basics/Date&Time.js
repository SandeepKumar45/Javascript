let date = new Date()
console.log(date);                // 2023-08-19T13:48:41.695Z
console.log(date.toString());     // Sat Aug 19 2023 19:18:41 GMT+0530 (India Standard Time)
console.log(date.toDateString()); // Sat Aug 19 2023
console.log(date.toISOString());  // 2023-08-19T13:48:41.695Z
console.log(date.toJSON());       // 2023-08-19T13:48:41.695Z
console.log(date.toLocaleDateString()); // 19/8/2023
console.log(date.toLocaleString());     // 19/8/2023, 7:18:41 pm


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")  // (yy/mm/dd) --> US style
let myCreatedDate = new Date("01-14-2023")     // (mm/dd/yy) --> Indian style
// console.log(myCreatedDate.toLocaleString());  // 14/1/2023, 12:00:00 am


// ++++++++++++++++++++++  TIME  +++++++++++++++++
let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1692453208173 --> in milisecond
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let date1 = new Date()
console.log(date1.toString());
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getDay());


// +++++++++++++++ +++++++++++++

   let myDate = new Date()
   console.log(myDate.toString());
   myDate.setDate(25)  // you can manipulate by .set
   console.log(myDate.toString());

