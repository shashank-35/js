// find min value of array
let arr = [1,10,38,67,33,2];

function findMinNumber (arr)
{
     let minNumber=arr[0];
    for(let i=0; i<arr.length; i++)
        {
     
            if(arr[i]<minNumber)
                {
                minNumber = arr[i];
                
                
            }
         
    }
     console.log("🚀 ~ findMinNumber ~ minNumber:", minNumber)
}
findMinNumber(arr)
