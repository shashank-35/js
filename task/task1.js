let arr = [1, 2, 3, 4, 5, 6, 7, 101, 8, 9, 23, 11, 45, 55, 19];

// Big Number find function
function findBigNumber (arr)
{
     let maxNumber=0;
    for(let i=0; i<arr.length; i++)
        {

            if(arr[i]>maxNumber)
                {
                maxNumber = arr[i];

            }

    }
     console.log("🚀 ~ findBigNumber ~ maxNumber:", maxNumber)
}
findBigNumber(arr)