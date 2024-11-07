//Promises
// const promiseOne = new Promise(function(resolve, reject){ 
//     //Do an async task
//     //DB Calls, cryptography, network call
//     setTimeout(function(){
//         console.log('Async Task is COMPLETED');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed")
// }) 


// new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     console.log('Async Task is COMPLETED')
//     resolve()
//    },1000)
// }).then(()=> {
//     console.log("Promise Consumed")
// })

// const promiseThree = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({username: "Pradipta", email: "pradiptakar1224@gmail.com"})
//     },1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })

// const promiseFour = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             res({username: "Pradipta", password: "369"})
//         }
//         else{
//             rej('ERROR: File is missing')
//         }
//     },2000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.password
// }).then((username)=> {
//     console.log(username) //Gets the password coz in the previous then we returned user.password 
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Final Execution Done")
// })



// const promiseFive = new Promise((res,rej)=>{
//     setTimeout(()=>{
//                 let error = true;
//                 if(!error){
//                     res({username: "javascript", password: "369"})
//                 }
//                 else{
//                     rej('ERROR: Js went wrong')
//                 }
//             },2000)
// });


// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//     console.log(response);
//     }catch(error){
//         console.log(error)
//     }
// }



// //Async await methods or functions are a bit like .then and .catch, so don't worry

// consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//     const data = await response.json()
//     console.log(data)
//     } catch(error){
//         console.log("E: ", error)
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json() 
}).then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log("ERROR")})