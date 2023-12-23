let map = new Map()
map.set('name','sandeep')
   .set('age',21)
   .set('email',"sandeep@google.com")

   console.log(map);

function addInformation(key,value){
    map.set(key,value)
}

function updateInformation(key,value){
    map.set(key,value)
}

function deleteInformation(key){
    map.delete(key)
}

deleteInformation('age')
console.log(map);