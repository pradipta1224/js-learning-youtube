// const coding = ["java", "ruby", "python"]

// const values = coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(values)  //It won't return anything except undefined, so for each loop doesn't return any value 



const  myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> {
//     // num>4 //It returns empty array
//     return num>4 //If we open the scope then we have to use the return keyword
// } ) //filter method returns the values unlike for each which only stores but doesn't return the value
// console.log(newNums)

// const newNums = myNums.filter( (num)=> (num>4))
//     console.log(newNums)      A SLIGHT EXPERIMENT DONE BY ME

// const newPage = myNums.forEach((num)=>{
//     return num>4; //here is the proof that for each function doesn't return anything
// })
// console.log(newPage)


//If we want to do the same thing with for each loop then we have to write the code this way

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



  let userBooks =books.filter( (bk) => {
//    return bk.genre === 'History'   //IMPORTANT POINT: Whenever you use a scope make sure to use the return keyword
})
  userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre ==='History'
    
})

  console.log(userBooks) 



