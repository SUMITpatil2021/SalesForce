//Promises 
// function myfun(data){
//     return new Promise(function(resolve,reject){
        
//         if(data==="sumit") 
            
//             return resolve("Name Matched !!!")
//         else
//             return reject("Name Doesnt match!!!")
//     })
  
// }
// myfun('sushant').then(function(result){console.log(result)}).catch(function(error){console.log(error)})

//Real Time Example For Fetching Details of gitHub 

fetch("https://api.github.com/users/SUMITpatil2021").then(function(result){
    return result.json()
}).then(function(response){
    console.log(response)
}) 