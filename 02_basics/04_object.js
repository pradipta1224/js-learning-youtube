// Objects declared by constructor
// const tinderUser = {} //Non Singleton Object means literal
const tinderUser  = new Object() //Singleton Object
tinderUser.id = "123abc"
tinderUser.name = "Pradipta"
tinderUser.isLoggedIn = false
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

const users = [ 
    {
        id: 1,
        email: "pradipta@gmail.com"
    },
    {
        id: 1,
        email: "pradipta@gmail.com"
    },
    {
        id: 1,
        email: "pradipta@gmail.com"
    },
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser)) //Important
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //Returns an output value if a particular property of an object is present or not


const {id} = tinderUser //This is another way to target the key of an object and then we can console.log more conveniently
console.log(id)