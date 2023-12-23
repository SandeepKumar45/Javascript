function double(arr){
    return arr.map((item)=>(item*item));
}
function doubledArray(arr,fun){
    let ans =  fun(arr);
    return ans
}

let arr = [10,20,30,40,50,60]
console.log(doubledArray(arr,double));

