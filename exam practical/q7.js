// Q7.

// Write a function that:

// given array [1,2,3,4,2,3,5]
// return [1,2,3,4,5]

// Takes an array of numbers

// Creates a new array containing only unique values

// Do NOT use Set

let arr = [1,2,3,4,2,3,5]
let newArr = []

for(let i = 0; i<arr.length; i++){
    let first = arr.indexOf(arr[i])
    let last = arr.lastIndexOf(arr[i])

    if(first === last){
        newArr.push(arr[i])
    }
    

}
console.log("🚀 ~ newArr:", newArr)




