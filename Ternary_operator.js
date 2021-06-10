let num=5
let result
if(num%2===0){
    result="even"
}
else{
    result="odd"
}
console.log(result);

//this code can be simplified by ternary operators(?:)
let num1=6
let result1
result1=num1%2===0 ? "even":"odd"
console.log(result1);