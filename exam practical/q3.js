// Ek array [5, 12, 8, 130, 44] diya hai.

// Sirf 50 se chhote numbers ko new array me store karo

// Result print karo

// (Hint: condition + loop / array method)

let arr = [5, 12, 8, 130, 44,100,110,50,51]
let newArr = []

for(let i=0; i<arr.length; i++){
    if(arr[i]> 50){
        newArr.push(arr[i])
    }
}

console.log("🚀 ~ newArr:", newArr)
console.log("🚀 ~ newArr:", newArr)