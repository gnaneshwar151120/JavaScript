//objects represents real world entities in virtual world

let obj={}  //{} is the way to declare objects
console.log(obj);
console.log(typeof obj);

console.log("******************");
//objects are generally key-value in javascript
let exm={
    name:"Gnaneshwar",
    tech:"Javascript",
}
console.log(exm);

//fetching a particular value
console.log(exm.name);     //method1
console.log(exm['tech']);   //method2
console.log("******************");
/*which method to be used?
it based on requirement
but i choose '.' 
but [] has its own requirements:
if a property has two names then we should use []
*/  
//Example:
let property={
    name:"Gnaneshwar",
    tech:'Javascript',
    'work exp': 4             //using _ make sense here but let assume this case
}
console.log(property['work exp']);   //as we can see we cannot use . operator here

//case2: if wanna take input dynamically
let input="name"    
let dic={
    name:'gnan',
    tech:'js'
}
console.log(dic[input]);   //if i use . it shows undefined

console.log("******************");

//complex object: object inside object
let details={
    name:'Gnaneshwar',
    age:'20',
    education:{
        school:'SR edu centre',
        Intermediate:"NJC",
        College:"CU"
    }
}
console.log(details);      //shows all properties
console.log(details.education);  //shows prpoerties of education
console.log(details.education.school); //fetching data inside a key
console.log(details.education.school.length);//finding length of a value  note:space is also considered
console.log("******************");
//what happens when we try to fetch a value which doesnt there in key?
//example:
console.log(details.education.school1);   //we get ouput as undefined
// console.log(details.education.school.length)             //we get eror in this case ....so to avoid error we use"?"

console.log(details.education.school1?.length);  //may get erroe in some versions 
//soo im any use it better to use
console.log("******************");

//delete:
delete details.education.College
console.log(details);


