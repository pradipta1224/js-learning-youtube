// Primitive Datatypes (Values are not directly allocated to the memory)
// 7 Types(call by value means copied data) : String, number, boolean, null, undefined, symbol, BigInt


// Reference Types or Non-primitive Datatypes (These datatypes' value whose reference can be directly allocated to the memory)


const id = Symbol('123')
const anotherId = Symbol('123')
console.log( id === anotherId) // The answer will be false despite of the value being same and that's the utility of symbol in javascript basically

const bigInt = 238388288928398293982n // just add n at the end to make it a bigInt

//Array, Objects, Functions



const heroes = ["IronMan", "Spider-Man", "Thor"]; //This is an array 


let myObj= {
 name: "Pradipta",
 age: 18,
}  //This is an obj

const myFunction = function(){
    console.log("Hello world");
} //This is in short the definition of function

//Is Javascript dynamically typed language or statically typed language? And the answer is dynamically typed language 


