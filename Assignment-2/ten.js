function wordCounter(sentence){
    let map = new Map()
    sentence = sentence.replace(',','')
    let arr = sentence.split(' ')
    for(let item of arr){
        if(map.get(item)==undefined){
            map.set(item,1)
        }
        else{
            map.set(item,map.get(item)+1)
        }
    }
    return map
}

const sentence = "please please submit your assignment on time, your assignments are important"
console.log(wordCounter(sentence));
