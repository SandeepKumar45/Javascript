const students = [
    {
        name:"Mithun",
        marks:95
    },
    {
        name:"Prabir",
        marks:75
    },
    {
        name:"Alka",
        marks:92
    },
    {
        name:"Shivam",
        marks:70
    },
    {
        name:"Farman",
        marks:99
    }
]


function checkResult(studentName){
    for(let value of students){
        if(studentName == value.name){
            if(value.marks>90){
                console.log(`Congratulation ${studentName}! you have cleared the exam.`);
                return
            }
            else{
                console.log(`Sorry ${studentName}! you have not cleared the exam.`);
                return
            }
        }
    }
    console.log("Invalid user !!!");
}

checkResult("Prabir")