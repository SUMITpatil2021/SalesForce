//Array Methods  
// mostly Used array Methods used in LWC 
// 1.sort()     -->>  sort array 
// 2.map()      -->> itrate over array and return new array 
// 3.forEach()  -->> itrate array 
// 4.reduce()   -->> reduce array to single value and return it
// 5.filter()   -->> return new array with elements which statisfy the condition 
// 6.some()     -->> return Boolean Value(TRUE/FALSE) if atleast one element satisfies condition
// 7.every()    -->> return  Boolean Value(TRUE/FALSE) if all  elements satisfies condition

var arr=[1,4,6,4,8,20];

//1. sort() Method 

    // sorting of character or String 
    //  let str=["Sumit","Prchi","Apurva"]
    //  console.log(str.sort()) 

    //sorting of Numbers 

    console.log(`Ascending Order : ${arr.sort(function(a,b){return a-b})}`)
    let sortedValues=arr.sort(function(a,b){
        return b-a
    })

    console.log("decending Order : "+sortedValues)

//2. map()

// let newArr=arr.map(function(currentItem,index,array){
//    console.log(`Current Element in array : ${currentItem} index : ${index}  Actual Array : ${array}`)

//     return currentItem*2

// })
// console.log(`original array ${arr}`)
// console.log(`new Array ${newArr}`) 

//3.forEach()

// same as  map() but one differnce is that map()returns new array but forEach() never returns 
arr.forEach(function(currentItem){
    console.log(currentItem)
})
//4.reduce()
// let arr1=[10,20,30,40]
// let sum=arr1.reduce(function(total,Current){
//     return total+Current
// },0)
// console.log( `Sum of elements : ${sum}` )


//5.filter
// let filteredValues=arr.filter(function(currentItem,index,array){
//     return currentItem%2==0;  -->> it will return  only even numbers from array 
// }) 
// console.log(filteredValues) 

//6.some()
//  let  marks=[30,60,45,34]

//  let isPass=marks.some(function(currentItem)
// {
//     return currentItem>=35;
// })
// isPass?console.log("Pass"):console.log("fail")

//7.every()

// let arrAge=[21,23,25,23]
// let isAllAdult=arrAge.every(function(currentItem){
//     return currentItem>=18
// })
// isAllAdult?console.log("All are Adult"):console.log("No Not all are adult ") ;