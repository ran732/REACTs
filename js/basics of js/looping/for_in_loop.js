// used for object array

let student = {
    name : "Ranjeet",
    branch : "AIML",
    rollno : 50,

}
for (let i in student){  //keys
    console.log(i)

}

console.log()

for (let i in student){   // values
    console.log(student[i])

}