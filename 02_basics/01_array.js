//Array

const myArr = [0,1,2,3,4,5]  //Array always written in square bracket, inside the brackets there are elements which can be of different datatype
const myHeroes = ["iron-man" , "spider-man"]
// console.log(myArr[0]) //This is how we can access the elements inside an array
const myArr2 = new Array(1,2,3,4,5)


//Array methods

// myArr.push(7) //This method is used to add values to the array
// myArr.push(6)
// myArr.pop() //used to remove or delete the last element of the array
// myArr.unshift(0)  //Used to insert an element to the zeroeth index of the array
// myArr.shift //Used to remove the zeroeth index element

// console.log(myArr.includes(9)); //This method is a questionairre type of method, which questions the presence of a certain element
// console.log(myArr.indexOf(29)) // The output will be -1 if you typed in an index which is not there in the array
const newArr = myArr.join() //Binds the array and also converts it into string

// console.log(newArr)

//Splice and splice

console.log("A" , myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B", myArr)

const myn2= myArr.splice(1,3)
console.log(myn2)

console.log(myArr) 

//What really happens here is that slice doesn't manipulate the original array, but splice does, which means it gets the original reference
