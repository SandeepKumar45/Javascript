fetch('https://jsonplaceholder.typicode.comm/posts/123456789')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(`Error:${error}`);
})