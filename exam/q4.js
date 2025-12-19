// Q25. Given an array of numbers, write a program to find all numbers greater than 10 and return them in a new array.

let arr = [2,3,5,10,20,34,50]

// let num = arr.map((e,i) =>{
//     return e > 10
    
// })
// console.log("🚀 ~ num:", num)
let newArr = []
for(let i=0; i<arr.length; i++){
    if(arr[i] > 10){
        let ele = arr[i]
        newArr.push(ele)
    }
}

console.log("🚀 ~ newArr:", newArr)