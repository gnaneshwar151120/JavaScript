let num1=4,num2=6
let result = num2>num1
if(result)
    console.log("num1 is greater");         //if result is true it prints this statement
console.log("Byee....");                    //as this is out of iteration it prints

//what it is false then we use else statement
let num=4,num3=6
if(num>num3)                                 // we can also write like this
    console.log("num is greater");         //if result is true it prints this statement
else
    console.log("num3 is greater");         //if result is false it prints this statement
console.log("Byee....");   

//its advicable to use { } in iteration because they take only one statement in if or else
let x=5,y=7
if(x>y){
    console.log("x is greater");
}
else{
    console.log("Y is greater");
    console.log("Y is",y); //if we dont use { } and if x>y is true then we get output as "x is greater" and "x is greater"
}

//Question:Find the greates number of 3 numbers
let number=6,number1=4,number2=7;
if(number>number1 && number>number2){
    console.log("number is greatest");
}
else if(number1>number2){
    console.log("number1 is greatest");
}
else{
    console.log("number2 is greatest");
}





