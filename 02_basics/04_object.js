//Objects declared by constructor
// const tinderUser = {} //Non Singleton Object means literal
// const tinderUser  = new Object() //Singleton Object
// tinderUser.id = "123abc"
// tinderUser.name = "Pradipta"
// tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "pradipta@gmail.com",
    fullname: {
        userfullname: {
           firstname: "Pradipta",
           surname: "Kar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
     3: "a",
     4: "b"
}

// const obj3 = Object.assign({}, obj1,obj2) //This empty braces is an optional parameter which makes sure that all the values will combine and the guaranteed output will come, just for the information, it's an empty array 
//We will still use assign very less, instead we will use spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3)