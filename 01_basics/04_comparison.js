// console.log(2> 1)
// console.log(2>=11)
// And all of these simple stuffs, we already know

// console.log("2">1) // Now the problem arises when you compare two different datatypes and the output here is true coz js converts the string to a number and compares it

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//Yeah the result is surprising, the reason why this happens is that equality and comparison works differently , comparisons(<,>,>=) converts null to a number treating it as 0 and that is why null>0 is false and null>=0 is true but null == 0 is false coz equality check treats null differently



console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined <0); //false

//=== => this is what we use for strict checking unlike equality checking, === operator not only checks the values but also the datatype