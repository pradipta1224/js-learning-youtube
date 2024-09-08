//There are 2 ways of defining on object, one is the literal way and one is the constructor way
//Singleton-When you make an object with a constructor
//When we declare an object with literals then it's not singleton
//Object.create is the way to declare the object the constructor way

//Object Literals

const mySym = Symbol("key1")

const JsUser= {
    name: "Pradipta",
    age: 19,
    location: "Bangalore",
    [mySym]: "key1" ,//This is the syntax of using the symbol inside an object, you use it inside a bracket
    email: "pradiptakar1224@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name) //This is a way but not the convenient way
// console.log(JsUser["name"]) //This is the convenient way 
// console.log(JsUser[mySym]) //This comes in interview often, they ask you to declare a symbol and then use it inside an object and console.log it
//If you use .freeze after console.log then the changes will not be propagated


JsUser.greeting = function() {
    console.log("Hola JSUser")
}
JsUser.greetingTwo = function() {
    console.log(`Hello JsUser , ${this.name}`)
}

console.log(JsUser.greeting) //The output comes function returnback coz we just typed in the method and even the function is not ran
console.log(JsUser.greetingTwo())

