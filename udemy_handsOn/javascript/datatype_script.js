//checking data Type 
var x2=10.66 //number 
console.log(typeof x2)

var y=10n //bigInt .. any No append with n called as bigInt
console.log(typeof y)

var y="salesforce" // string 
console.log(typeof y) 

var z // undefind ... in JS by default value of any unintialzed varible  is undefind
console.log(typeof z)  

var arr=[] // object ... array is object 
console.log(typeof arr) 

var s=10
s=null // null is trated as object 
console.log(typeof s)

//null vs undefined 
var x
console.log(x) // undefined 

var y=null
console.log(y) // null -->object ... type of null

console.log(x==y) // TRUE 
console.log(x===y) // false  --> x is undefined and y is object type of data 

