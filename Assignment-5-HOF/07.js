let regex = /^(https:\/\/linkedin\.com\/in\/)[A-Za-z0-9_\-]{5,30}[A-Za-z0-9]$/g

function checkUrl(url){
    if (regex.test(url)) {
        console.log("Valid URL");
    }
    else{
        console.log("Invalid URL");
    }
}

let linkedinURL = "https://linkedin.com/in/hiteshchoudhary"
// let linkedinURL = "https://linkedin.com/in/hiteshchoudhary" --> invalid url

checkUrl(linkedinURL)
