/* what is loop?
-->work to do repeatedly then we use loop
There are three type of loops:
1.While
2.Do while
3.for

loops ahs 3 stpes
1.initialization
2.condition
3.Increment
*/

//While loop
//if i want to print ("Hi") 5 times i use loop
let i=1     //initializing
while(i<=5){               //condition  
    console.log("while",i);     
    i++;           //increment 
}
/*so whats happening in while loop
when i<=5 the whole loop runs and prints the value and then increments the value of i ...
when i becomes more than 5 it stop execuring loop */

//do while
let j=1
do{
    console.log("do while",j);     
    j++;  
}while(j<=5)
/*in do while 1st it executes the loop then it check the condition
if we initialize j=6 even then it executes and give output but in next step it stops*/
let k=6
do{
    console.log("hi",k);     
    k++;  
}while(k<=5)
//but in while it doesnt execute when condition is not satisfied


/* Whats the difference between while and do while?
while first check the condition then execute the loop
do while executes the loop then check condition*/


//forloop
//in for loop we can initialize,condition and increment in one statement
for(f=1;f<=5;f++){
    console.log("for",f);
}

//for(;;) is infinite loop
//there is no compulsary to write everything in one line

let u=1
for(;u<=5;){
    console.log("noc",u);
    u++
}

//nested loop  ------- loop inside loop
//print hi once and heelo 5 times
for(l=1;l<=5;l++){
    console.log("Hi",l);
    for(h=1;h<=5;h++){
        console.log("hello",h);
    }
}


/*Which loop is best?
-->There is nothing as best loop every loop has its own pros and cons
-->we use for loop when we know starting and ending point
-->we use while when we dont know ending point 
ex: if we want to reverse a number we dont know how many times we need to divide it by ten hen its best to use while
*/
