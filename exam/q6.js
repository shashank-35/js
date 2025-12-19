// Q29. Write a program to find the second largest number in an array without using the sort() method.

// Input: [12, 35, 1, 10, 34, 1]
 // Output:

let arr = [12, 35, 1, 10, 34, 1];

let largest = 0;
let secondLargest = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } 
    else if(arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("🚀 ~ findSecBigNumber ~ largest:", largest)
console.log("🚀 ~ findSecBigNumber ~ secondLargest:", secondLargest)
