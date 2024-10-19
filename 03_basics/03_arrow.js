const user = {
    username: "Pradipta",
    price: 999,
    
    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`) //If we write username inside the braces, it works but there is another more convenient way
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "Pradipta"
//     console.log(this) //Inside function if you print this then we get a lot of values and properties but outside of function if you print this then it doesn't print much coz it doesn't have the context
//     console.log(this.username)  //The answer comes undefined, and from here we can understand that it takes the context inside the object but not the function
// }

// chai()


// const chai = function (){
//     let username = "pradipta"
//     // console.log(this.username)
// }

const chai =  ()=>{
    let username = "pradipta"
    console.log(this)
}

// chai()
//()=> {} This is the basic syntax of arrow function 

// const addTwo = (num1, num2) =>{
//    return num1+ num2
// }

// console.log(addTwo(2,4))


// const addTwo = (num1, num2) =>  num1+ num2 //This is another way which is called the implicit return where you remove the braces and also remove the return keyword and bring all those in same line

const addTwo = (num1, num2) =>  ({username: "Pradipta"}) //If you don't give the parenthesis then it won't return the object just with the braces
console.log(addTwo(2,4)) 
