/* There are two types of data types
1.Premitive
2.Objective
 
Premitive contains:
->Number
->String
->Boolean
->Null
->Undefined
->Symbol 
*/
 
let data = 8 //number
let user_name = 'Gnaneshwar'     // we can use any one grom these two " ", ' '
let number = 2545864125
console.log(number)

/* maximum value = 1.7976931348623157e+308
maximum safe value = 9007199254740991 */

let number1 = 7.8 //float number
console.log(number1)
 //we can use typeof keyword to find which type of data type it is
console.log(typeof number)
console.log(typeof number1)   // by default the types of numbers are represented as numbers rather than int,float
console.log(typeof user_name)
 
// we can give the numbers in different decimal system like heaxa
 let hexa = 0xf
 console.log(hexa)
 //we can show the numbers using power instead of writing whole number
let power = 1.5e12 //this represents 1.5*10^12
console.log(power)
// we can use _ in between numbers
//let num1 = 1_00_00_00_00
//console.log(num1)

//we can work with infinity 
 let infinity = 5/0
 let n_infinity = -5/0
 console.log(infinity)
 console.log(n_infinity)

 console.log(Number.MAX_VALUE) //This is the maximum value you can give

 //to print big int we keep n at the end of number
 let big_int = 65468416516648413156448946356499n
 console.log(big_int)
 console.log(big_int *2n) // u have to do operations on bigint with a bigint
 
