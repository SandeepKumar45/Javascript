const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); // hitesh

// **** Destructuring ****

   // const {courseInstructor} = course
   // console.log(courseInstructor);  // hitesh

   const {courseInstructor:instructor} = course  // more convenient
   console.log(instructor);  // hitesh


//  API call --> receives in json file
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]   
