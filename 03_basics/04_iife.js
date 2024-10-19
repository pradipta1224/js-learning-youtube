//Immediately Invoked Function Expressions(IIFE)

(function chai() { //This is a named iife and the bottom one is a simple or unnamed iife
    console.log(`DB Connected`)
})(); // Here if we don't give a semi colon(;) after writing the iife then it won't understand when to finish the context so to finish or end the context or line we have to use a semicolon
    //We alotta times have problems from the global scope pollution, so to remove the variables or declarations of the global scope, we use iife
    // The first parenthesis is for the function definition and then the other one is for the execution
    ((name) => {
        console.log(`DB connected 2 ${name}`)
    })('Pradipta')