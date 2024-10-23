// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() // Map is an object which holds key value pair and remembers the original insertion order of the keys and it supports unique entries only
map.set('WB', "West Bengal")
map.set('DL', "Delhi")
map.set('MH', "Maharashtra")
map.set('MH', "Maharashtra") //It won't print coz it supports the ideology of unique entries

// console.log(map)

for (const [key,value]  of map){ //(here the array is destructured into key and value and that square bracket is the syntax)
    console.log(key, value)
}

const myObject = {
    'Game1': "NFS MW",
    'Game2': "RDR2",
}

// for(const[key,value] of myObject){
//     console.log(key, value) //Here my object is not interable and that's what the error shows, so this type of for of loop won't work here, maps are iterable that way but not objects
// }


