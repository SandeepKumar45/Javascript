function reverse(str){
    let arr = str.split('')
    str = arr.reverse().join("")
    return str
}

console.log(reverse("sandeep"));