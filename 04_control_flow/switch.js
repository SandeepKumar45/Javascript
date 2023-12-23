// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// NOTE: break statement is required after every case, if you not use the break statement --> when the case match the 
      // condition  the code will execute without checking the other case condition except default case

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}