/*There are three types of conversions
->to string
->to number
->to boolean */

let num = 6
console.log(num,typeof num)

let num_to_string = String(6)                //basically we are passing a integer into a string.....
console.log(num_to_string,typeof num_to_string)        

let string_to_num = Number("123")           //we are converting a number into a string
console.log(string_to_num, typeof string_to_num)

// The upper examples are called as explicit conversion

//type conversion
let x
console.log(x)         //it is undefined

x=8
console.log(x,typeof x)  //undefined to int

x=x + " "
console.log(x,typeof x) //int to string

x = x-2
console.log(x , typeof x) //it gives as number

//to change int to string use "+" and "-" vice versa

x=!x
console.log(x , typeof x)

console.log(Boolean(7))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean("ndj"))

//from above we can see that if boolean =0,null,undefined then it false and in all other cases it is true

let y= "123 Gnan"
console.log(y)

let nan = Number("123 Gnan")
console.log(nan)              //IT gives nan(not a number) beacuse it contains characters

let parse_int= parseInt("123 Gnan")          
console.log(parse_int)                 //parseInt gives numbers in string but first should be number

let Parse_Int= parseInt("G123 fb")
console.log(Parse_Int)            //in this case it gives nan because it has character in the begining

