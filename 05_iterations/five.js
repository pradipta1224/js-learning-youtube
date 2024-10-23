//For each loop
//For each is a loop parameter which is by default injected to the array

const coding = ["js", "ruby", "java", "python", "c++"]


// coding.forEach(  function(item) { //It's a callback function that's why you don't give the name
//     console.log(item)
// } ) 


// coding.forEach((item)=>{
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)  This is interesting and the reference must be given of the function, we won't have to execute

// coding.forEach( (item, index, arr)=>{
// console.log(item, index, arr)
// } )



const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "Java",
        languageFile: "java"
    }
]

myCoding.forEach( (keyaccess)=>{
   console.log(keyaccess.languageFile)  //Important
} )