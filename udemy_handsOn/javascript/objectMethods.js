var obj={
    name:"Sumit",
    age:23,
    Qualification:"B.Tech"
}
console.log(obj); // object 

console.log("Keys of Object : "+Object.keys(obj)) // Object.keys() Method

console.log("Values of Object :"+Object.values(obj)) //Object.values() Method

let str=JSON.stringify(obj) // Convert Object to String 
console.log("String :"+str)

console.log(JSON.parse(str)) //Convert String into Object 




