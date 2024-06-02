//spread Operator 

//1. Array  in js 

var arr=["a","b","c"] 
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//2. Object 
var obj={
    "name":"Sumit",
    "age":23,
    "college name":"KIT college of engineering Kolhapur"
}

console.log(obj)
console.log(obj.name)
console.log(obj.age) //  dot (.) operator for accessing object value  
console.log(obj["college name"]) // we cannot access object whose key has spaces so use array Notation like this
 
//Usage of Spread Operator(...)

//1. Exapnding String  to array 
let str1="Hello salesforce"
var str2=[...str1]
// console.log(str2)
console.log([...str1]) 

//2. Combine Array
let arr1=[1,2] // arr1= [1,2]
let arr2=[3,4] // arr2= [3,4]
let arr3=[...arr1,...arr2] //combine with ...operator 
console.log(arr3) // arr3= [1,2,3,4]
// we can add values to array also using ...


//3. Combine Object 

let obj1={
    firstname:"sumit",
    education:"B.tech"

}

let obj2={
    lastname:"Patil",
    education:"CDAC"
}

let obj3={...obj1,...obj2} // same key  will replace .. 
//here B.tech Will replaced with CDAC 
console.log(obj3)

//4. Shallow Copy 
//it simply copies data from one array to another 
//using push opertor to add data in newly created array it  adds in old array also 
//it is bcz of push does refernce wise copy 
// to avoid this use ...opertor so no changes in old array 

let arr5=[10,20]
let arr6=arr5
arr6.push("Sumit")// it will add sumit in both arr5 and arr6 
console.log(arr5)
console.log(arr6)
// to avoid this 

let arr7=[...arr5] // it adds patil only in arr7 not in original 
arr7.push("[patil]") 
console.log("Old Array :"+arr5)
console.log("New Array :"+arr7)







