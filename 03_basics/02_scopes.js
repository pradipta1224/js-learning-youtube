


if(true){
    let a = 10
const b = 20
var c = 30
} //This basically is the scope, it's not the scope when it's object, that's different, that's object declaration, but when it's functions or nested if else or loops then it's scope



// console.log(a) //An error shows which says a is not defined coz it's inside the braces, inside the scope
// console.log(b) //Same with b, just like a
console.log(c) //But when we comment out a and b console.logs then we can see that the output of c shows up and prints 30 , coz the datatype used here is var and that's the fault of using var, it doesn't obey the laws of block scope or local scope


//Global scope is different in the browser console vs the code envinronment


function one(){
    const username = "Pradipta"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const username = "Pradipta"
    if(username === "Pradipta"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)




//+++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++\



console.log(addone(5)) //Doesn't throw an error
function addone(num){
    return num + 1
}



addTwo(5) //But it throws an error saying cannot access before initialization, that's when the style of declaration comes in , here we store the function in a variable that's why it throws the error coz a variable should always be declared before accessing
const addTwo = function(num){  //This is also a function but it's also called expression because it's stored in a variable
    return num+2
}