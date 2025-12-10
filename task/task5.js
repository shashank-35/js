//find avarage from array

let array = [1,4,9,3,2,8];

function findAvg(array){
    let sum = 0;
    for(i=0;i<array.length; i++){
        sum = sum + array[i];
        
    }
    let avg = sum/array.length;
    console.log("🚀 ~ findAvg ~ length:", array.length)
    
    console.log("🚀 ~ findAvg ~ sum:", sum)
    console.log("🚀 ~ findAvg ~ avg:", avg)

}

findAvg(array);