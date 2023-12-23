const arr = [1,2,999,56,"sandeep",1234,"hitesh"]
for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])=='string'){
        console.log("Found the first string "+arr[i]);
        break
    }
}