const regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9]+\.[A-Za-z]+$/g

function checkUrl(url){
    if (regex.test(url)) {
        console.log("Correct Format");
    }
    else{
        console.log("Wrong Format");
    }
}

let userInput = "https://pwskills.com"

checkUrl(userInput)