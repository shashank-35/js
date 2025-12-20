// Q6.
// Ek array [1, 2, 3, 4, 5, 6, 7, 8] diya hai.

// Even numbers ka square nikaalo

// Sirf squared even numbers ko new array me store karo

// 👉 Output: [4, 16, 36, 64]

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let newArray = [] 

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 ==0){
        var ele = arr[i]*arr[i];
        newArray.push(ele)
    }
}
console.log("🚀 ~ newArray:", newArray)
