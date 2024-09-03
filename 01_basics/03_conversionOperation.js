let score = "33abc";

// console.log(typeof score);
// console.log(typeof(score)); //Score is defined as a method here because it's inside parenthesis
//Just a simple dataype

let valueInNumber = Number(score);
//  console.log(typeof valueInNumber);
//  console.log(valueInNumber); //It shows NaN which means Not a number but still it got converted to number datatype
//If we have written null instead of "33abc" then the value would be 0 after converting to number but it would be NaN if it got converted from undefined

//"" is false when converted to boolean
//"string" is true

/* Operations */

let value = 3;
let negValue = -value;
//  console.log(negValue);

let str1 = "hello";
let str2 = " Motto";
let str3 = str1 + str2;
console.log(str3); // This is simple but the below one is complex

console.log("1" + 2); //Output 12
console.log(1 + "2"); //Output 12
console.log("1" + 2 + 2); //Still output 122, you are wrong if you had thought 14
console.log(1 + 2 + "2"); //But here output 32, yep javascript is a hypocrite , it's all written in the ecma script guidelines and standards but in short you can understand that the datatype value which will come first will be the ruler, and the output will be according to that
//That's all operator precedence
//Better use parenthesis 
//We also have to learn about prefix and postfix operator precedence
