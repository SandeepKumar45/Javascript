// Map

// keyed collections
// map allows key of any type
// Order of insertion

let map = new Map();
console.log(map); // Map(0) {}

map.set("1", "sandeep"); // .set(key: any, value: any)
map.set(1, "rohit"); // if you did this in case of object then it will be override the value sandeep to rohit
map.set(true, 50);

console.log(map.get("1")); // sandeep
console.log(map.get(1)); // rohit

console.log(map); // Map(3) { '1' => 'sandeep', 1 => 'rohit', true => 50 }

// you can set a object as a key also

let obj = { name: "soni" };

map.set(obj, 100); //
console.log(map.get(obj)); // 100
console.log(map); // { name: 'soni' } => 100

// chaining --> not need to write .set again and again

// let map2 = new Map();

// map2.set("1", 10)
    // .set("2", 20)
    // .set("3", 30);

// console.log(map2); // Map(3) { '1' => 10, '2' => 20, '3' => 30 }

let map3 = new Map(          // arrays of arrays
    [             
        ["1", 100],
        ["2", 200],
        ["3", 300]
    ] 
    );

console.log(map3);


        // keys --> return keys

        console.log(map3.keys()); // [Map Iterator] { '1', '2', '3' }

        for(let item of map3.keys()){
            console.log(item);
        }


        // values --> return values

        console.log(map3.values()); // [Map Iterator] { 100, 200, 300 }

        for(let item of map3.values()){
            console.log(item);
        }

        console.log(map3.entries()); // [Map Entries] { [ '1', 100 ], [ '2', 200 ], [ '3', 300 ] }

        map3.forEach((item,index)=> console.log(`key:${index} value:${item}`))


        // object to map

            let obj1 = {
                name:"sandeep",
                id:45,
                age:21
            }

            // let myMap = new Map(obj1)  // eror you can't pass like this  / you can pass array of arrays OR keyValue pairs
            // console.log(myMap);

            let myMap = new Map(Object.entries(obj1)) // object in keyValue pairs
            // console.log(myMap); // Map(3) { 'name' => 'sandeep', 'id' => 45, 'age' => 21 }

        
        // Map to Object
        
           console.log(myMap);
           
           console.log(Object.fromEntries(myMap));
