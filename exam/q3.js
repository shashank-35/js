// Write a program to reverse a string without using the reverse() method.

let str = "shashank"

let str1 = str.split("")
// console.log("🚀 ~ str1:", str1)
for(let i = str1.length; i>=0; i--){
    console.log(str1[i])
}
