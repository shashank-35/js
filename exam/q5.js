// Write a program to count the number of vowels in a given string.

let vowels = 0;


let str = "shashanki";

let arr = str.split("");

arr.forEach((e) => {
    if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u'){
        vowels++
    }
})


console.log("🚀 ~ vowels:", vowels)
