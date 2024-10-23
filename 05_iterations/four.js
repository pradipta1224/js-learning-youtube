const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}

// console.log(myObject)

//For in loop will work with objects

for(const key in myObject){
    // console.log(myObject[key])  //This will give the values belonging to the particular keys 
    // console.log(`${key} for shortcut is for ${myObject[key]}`)
}


const programming = ["js", "cpp", "ruby"]

for (const key in programming){
    // console.log(key)  //It prints the keys which is the index values instead of the values, that's the difference, for of loops directly take the values of the array but the for in takes the keys
}

//Map is not iterable with for in loops


