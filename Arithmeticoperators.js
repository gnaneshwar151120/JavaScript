let num1=4 , num2=2
let sum = num1+num2  //Addition
let sub = num1-num2  //Substraction
let div = num1/num2  //Division
let multi = num1*num2 //Multiplication
let remainder = num1%num2  //Reamainder

console.log("sum of",num1 ,"and",num2,"is",sum)
console.log("Substraction of",num1 ,"and",num2,"is",sub)
console.log("Division of",num1 ,"and",num2,"is",div)
console.log("Multiplication of",num1 ,"and",num2,"is",multi)
console.log("Remainder of",num1 ,"and",num2,"is",remainder)


//what if we add two boolean
let bool1 = true
let bool2 = true
let result = bool1+bool2
console.log("sum of boolean",result)
//beacuse  of type coersion,so boolean is converted into number 

//short hand
let num = 4
num+=2
console.log("short hand method",num)
//if we ant to add 1 we can use increment
console.log("increment",++num)

/*pre increment ->++n
  post increment ->n++
  pre decrement -> --n
  post decrement -> n--*/

  let posti = num++
  console.log(posti,num) 
  //post increment first assign the value and then increment it, therefore,x assign num then num is incremented
  let prei = ++num
  console.log(prei,num)
  //pre increment first increment the value and then assign the value

  //same happens with pre decrement and post decrement

  //powers:
  let val = 4
  let cube_1 = val*val*val //general method
  console.log(cube_1)
  
  let cube_2 = Math.pow(val,3)
  console.log(cube_2) //math method where,val= value u wanna find out and 3 is power 
  
  let cube_3 = val**3 
   console.log(cube_3) //"**" represents power
 