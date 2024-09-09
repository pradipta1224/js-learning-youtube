function sayMyName(){
    console.log("Repition is the key")
}

//This is the basic definition of the function

// sayMyName //This is the reference of the function
// sayMyName() //This is the execution of the function

// function addTwoNumbers(a,b) { //a and b are the parameters
//      console.log(a+b)
// }

// addTwoNumbers(3,4) //Calling the no.
//These 3 and 4 are the arguments to the parameters a and b inside the parenthesis of addTwoNumbers
//Parameters are the inputs of the functions, and the arguments are the values of those parameters

const result = addTwoNumbers(3,5)
console.log("Result value is ", result) //Output is undefined when it comes to result's value

function addTwoNumbers(a,b) { //a and b are the parameters
    let result = a + b
    console.log("Pradipta")
    return result
    // console.log("Pradipta") //It won't print coz nothing prints after the keyword result is used
}

function loginUserMessage(username){
    return `${username} just logged in`  //Important
}
console.log(loginUserMessage("Pradipta")) //When you don't pass anything as an argument then it returns undefined 

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(20, 400, 300))

const user = {
    username: "Pradipta",
    prices: 199
}

function handleObject(anyobject){  //anyobject is used to import and use any object and not just any single specific
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username: "Pradipta1",
    price: 399
})

const myNewArray = [200,400,600,800]

const myOldArray = [2,3,4,5]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myOldArray))