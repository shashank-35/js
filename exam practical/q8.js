// Q8.

// Write a program that:

// Takes an array of strings

// ["urvish", "raj", "tejash"]

// ["urvish", "tejash"]

// Returns a new array containing strings with length > 5

// Convert those strings to uppercase

// Use filter() and map()

let arr = ["urvish", "raj", "tejash"]

let a = arr[0].length
console.log("🚀 ~ a:", a)
let array = []
for(let i=0;i<arr.length; i++){
    if(arr[i].length > 5){
        let str = arr[i].toUpperCase()
        console.log("🚀 ~ str:", str)
        array.push(str)
    }
}
console.log("🚀 ~ array:", array)



