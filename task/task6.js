/*
let str = "Hello  world"

let length= str.length
console.log("🚀 ~ length:", length)
*/

/*
let str = "Hello world"

// let subString = str.slice(2,5)
// let subString = str.substring(2,5)
console.log("🚀 ~ subString:", subString)

*/

/*
let str = "Hello world"

let newStr = str.concat("!!!","---")
console.log("🚀 ~ newStr:", newStr)
*/

/*
let str = "Hello world";

// let newStr = str.toUpperCase()
let newStr = str.toLowerCase();
console.log("🚀 ~ newStr:", newStr);

let name = "Urvish";

let searchName = "urvish";
console.log("------>", searchName.toLowerCase() === name.toLowerCase());
*/

/*
let str = "   Hello world    ";
let newStr = str.trim();
console.log("🚀 ~ newStr:", newStr)
*/

/*
let str = "Hello world";
// let index = str.indexOf("o",5);
// let index = str.lastIndexOf("o");
console.log("🚀 ~ index:", index)
*/

/*

let str = "Hello world, @ welcome / to the * world of JavaScript";

// let str2 = str.replace("world", "Universe");
// let str2 = str.replaceAll("world", "Universe");
// let str2 = str.replaceAll(/[@/*]/g, "----");
let str2 = str.replace(/[@/*]/g, "----");

console.log("🚀 ~ str:", str2)
*/

/*
let str = "Hello world, welcome to the world of JavaScript";

let availabe = str.includes("World");
console.log("🚀 ~ availabe:", availabe)
*/

/*
let str = "Hello world, welcome to the world of JavaScript";

let ans = str.startsWith(" Hello");
console.log("🚀 ~ ans:", ans)
*/

// let str = "Hello world,  welcome to the world of JavaScript";

// let arr = str.split("world");
// let arr = str.split(" ");
// let arr = str.split("");
// console.log("🚀 ~ arr:", arr)

// hello world => dlorw olleh
// hello world => world hello
// hello    world ji   !! => hello world ji !!

// TASK 1 hello world => dlorw olleh

// let str = "hello world";
// let str1 = str.split("")
// console.log("🚀 ~ str1:", str1)

// for (let i = str1.length; i >= 0; i--) {
// console.log(str1[i])
// }


//task 2 hello world => world hello

// let j = str.split(" ").reverse().join(" ")
// console.log("🚀 ~ j:", j)



// hello    world ji   !! => hello world ji !!

// let str = " hello    world ji   !! "

// let result = str.replace(/\s+/g, " ").trim();
// console.log("🚀 ~ result:", result)

// let arr = [ ]
// console.log(arr[0])

// console.log(typeof(NaN))
// str.substring(1,3)
// console.log(str.substring(1,3))

let arr = [1,2,3,4,5,6,7,8,9];
let arr1 =  arr.toString()
console.log("🚀 ~ arr1:", arr1)
console.log("🚀 ~ arr:", arr)




let arr2 = arr.join("/")
console.log("🚀 ~ arr2:", arr2)
console.log("🚀 ~ arr:", arr)


