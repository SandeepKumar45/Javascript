function uniqueCharacterChecks(name){
    let set = new Set(name)
    let newName="";
    for(let item of set){
        newName+=item
    }
    if(name == newName){
        console.log("The input string contain unique characters");
    }
    else{
        console.log("The input string contain duplicates");
    }
}

uniqueCharacterChecks("subham")