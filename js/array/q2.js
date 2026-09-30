let item = [250,645,300,900,50]


let arr = []
for(let val of item){
    val = val-val/10;
    arr.push(val)
}

console.log(arr)

arr.unshift(34) // add in start
arr.shift(34) // delete from start and return

arr.push(34) // add in start
arr.pop(34) // delete from start and return

console.log(arr)