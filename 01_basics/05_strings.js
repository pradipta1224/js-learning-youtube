const name = "Pradipta"
const repoCount = 50
// console.log(name + repoCount + "Vaue") //Outdated in moderndays, instead we use backticks in modern days, and string interpolation happens

// console.log(`Hello my name is ${name} and my repo is ${repoCount}`) //It makes the code redeable 


const gameName = new String ('PradiptaPK') //Another way of declaring a string with the help of object, we name it inside the constructor
console.log(gameName[0]) // This is how we can access the key of a certain index, learning the methods is all about the strings
console.log(gameName.__proto__) //This method is used to access the prototype 

console.log(gameName.length) //This method is used to find the total length of the string , these all are functions as well
console.log(gameName.toUpperCase())
