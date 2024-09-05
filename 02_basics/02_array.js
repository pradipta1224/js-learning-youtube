const marvelHeroes = ["thor", "iron-man", "spider-man"]
const dcHeroes = ["Batman", "superman", "flash"]
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes) //It outputs an array inside the array, it takes the array as a data, which means it took the second array as the fourth element or you can say as a 3rd index element
// console.log(marvelHeroes[3][1]) //This is used to access the first element of the third element of the main array
//But this element of merging is not preferrable, instead we can use concat

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes) 

//Spread Operator
const allNewHeroes= [...marvelHeroes, ...dcHeroes] //When we write ... then it doesn't stay as an element of the array anymore, it becomes a unique or individual data or value
console.log(allNewHeroes) 

const anotherArr = [1,2,3,[4,5,6] ,7 ,[6,7,[4,5]] ] //Very rare case situation where this might happen but you can use a way to handle this situation
const usableAnotherArr = anotherArr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. You should give the exact depth and not infinity in most cases
console.log(usableAnotherArr)


console.log(Array.isArray("Pradipta")) //Used for array checking
console.log(Array.from("pradipta")) //Used to convert to array
console.log(Array.from({name: "Pradipta"})) //Interesting case for interviews, gives an empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //Array.of returns a new array from a set of elements