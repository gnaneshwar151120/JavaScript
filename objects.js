//objects represents real world entities in virtual world

let obj={}  //{} is the way to declare objects
console.log(obj);
console.log(typeof obj);


//objects are generally key-value in javascript
let exm={
    name:"Gnaneshwar",
    tech:"Javascript",
}
console.log(exm);

//fetching a particular value
console.log(exm.name);     //method1
console.log(exm['tech']);   //method2

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

