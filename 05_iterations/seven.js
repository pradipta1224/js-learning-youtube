const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=>{return num+10})//Also automatically returns value


const newNums = myNumbers
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num > 30)
 //This is called chaining


console.log(newNums)