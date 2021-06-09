//used to compare
//output will be in boolean

console.log(5>6)
console.log(7>6) 

let num = 6
let num1 = 6
let less_equal = num<=num1
console.log(less_equal)

//can we compare strings?
let string = 'pen'
let string1 = 'pencil'
let result = string>string1
console.log(result)

//so we can compare two strings and it uses dictionary method 

//so we can compare number and number ,string and string but can we compare string and number

let Str = "a",number = 3, data = Str>number
console.log(data) //due to coersion and its compare its ascii value


//Equals to:
let x = 3 , y=3
let Equals = x==y   //we use "==" because "=" is assignment operator and "==" is equality operator
console.log(Equals)

let x1 = "3" , y1 = 3
let equal = x1==y1   
console.log(equal) 
//still it gives true due to coersion ....but thats not right because string and a number can never be equal

//to avoid coersion we use strict equality operator i.e; ===
let strict_equal = x1===y1
console.log(strict_equal)

// *** Always use === in js to avoid coersion