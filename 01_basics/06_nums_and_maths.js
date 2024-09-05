const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)


console.log(balance.toString().length);
console.log(balance.toFixed(2)) //output becomes 100 to 100.00, helps in making the precision value , mainly used in e-commerce websites


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //Mainly used in e-commerce websites to make the representation of the no. better and more redeable, by default it's set to US standards so we have to type in en-IN to set it to the Indian standard 



//This was all about numbers, now begins MATHS
//Maths is a library in Javascript which comes with it by default

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)