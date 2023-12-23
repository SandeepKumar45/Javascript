async function multiRequest(){
    const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data1 = await response1.json()
    const data2 = await response2.json()
    let obj = {}
    obj.todo = data1
    obj.post = data2
    console.log(obj);
}

multiRequest()