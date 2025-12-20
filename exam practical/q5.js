// Q5.
// Ek array ["apple", "banana", "cherry"] diya hai.

// Har element ke aage "fruit: " add karo => using map
// 👉 Output: ["fruit: apple", "fruit: banana", "fruit: cherry"]


let arr = ["apple", "banana", "cherry"]

let fruit = arr.map((e) => {
return "fruit:" + e
})
console.log("🚀 ~ fruit:", fruit)
