let arr = ["shashank", "dhiraj", "mohit", "nilesh", "ankit"];

function print(arr, number) {
  if (number > arr.length) {
    console.log("🚀 number is greater than array length", number);
  } else if (number < 0) {
    console.log("🚀 number is negative");
  } else {
    for (let i = 0; i < number; i++) {
      console.log("🚀 ~ name:", arr[i]);
    }
  }
}

print(arr, 3);
