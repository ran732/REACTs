let mode = ' dark ';
let color;

if (mode == 'dark-color'){
    color = 'black';
    console.log(color);

}else{
    color = 'white';
    console.log(color);
}

// ternary operator

let age = prompt('Enter your age : '); // work if it is attach in html file.
let result = age >= 18 ? "Adult": "Not adult";
console.log(result)