// Q4.
// Ek string "programming" di gayi hai.

// Count karo kitni baar "g" aata hai

// Final count print karo

let str = "programming"
let arr = str.split("")

let count = 0

for(let i=0; i<arr.length; i++){
    if(arr[i] == 'g'){
        count++
    }
}
console.log("🚀 ~ count:", count)
