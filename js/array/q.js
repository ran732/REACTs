let marks = [23,34,45,56,67,78,98]

for(let i=0; i <= marks.length; i++){
    console.log(marks[i])
}

// OR 

console.log()
let sum=0;
for(let val of marks){
    sum+=val;
    console.log(val);

}

console.log(`Average of given marks are ${sum/marks.length}`)