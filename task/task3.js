// find big and small value from array using dynamic function

let arr = [1, 2, 3, 4, 5, 6, 7, 101, 8, 9, 23, 11, 45, 55, 19];

function dynamic(arr, findValue) {
  if (findValue == "bigValue") {
    let maxNumber = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    console.log("🚀 ~ findBigNumber ~ maxNumber:", maxNumber);
  }else if(findValue == "smallValue"){
         let minNumber=arr[0];
    for(let i=0; i<arr.length; i++)
        {
     
            if(arr[i]<minNumber)
                {
                minNumber = arr[i];
                
                
            }
         
    }
     console.log("🚀 ~ findMinNumber ~ minNumber:", minNumber)
  }else{
    console.log("plz enter choice (bigValue/smallValue)")
  }
}

dynamic(arr,"big")