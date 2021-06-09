let num = 3, num1=4,num2=5
let result = num>num1
console.log(result)

/*can we do two comaprisions in one line?
  Yes thats where logicaloperators enters
  There are three basic logical operators:
  ->And (&&)
  ->Or   (||)
  ->Not (!)                
   we use &&,|| because & and | are bitwise operators */

   let and = num<num1 && num2>num1
   let or  = num>num1 || num2>num1
   let not = !or
   console.log(and , or , not)


   //To understand the logical operators we need to understad truth table
   /*
    --------------------------------------------------
    | A   |   B   |    A And B  |   A OR B  |   NotA |
    |-----|-------|-------------|-----------|--------|
    |  T  |   T   |     T       |      T    |     F  |
    |  T  |   F   |     F       |      T    |     F  |
    |  F  |   T   |     F       |      T    |     T  |
    |  F  |   F   |     F       |      T    |     T  |
     ------------------------------------------------   
     */