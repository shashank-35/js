
// task 1 ->
// make one function who take marks and return grade

// switch
// if else // if

// 36 > marks => faild
// 37-50 => D
// 51-60 => C
// 61-70 => B
// 71-80 => A
// 81-100 => A+

// if user send wrong marks => 'invalid marks'
// 105 => marks can't hire then 100
// -10 => marks can't less then 0


// task 2 ->

// make one functoin who take marks and grade critaria and return a grade  


// 10-20 => D
// 21-30 => C
// 31-40 => B
// 41-50 => A

// [
//     [10,20,'D']
//     {max : 20,min :10, grade :'D'}
// ]


// function marks (marks, grade)
// {
// if(marks < 0)
//     {
//     console.log("🚀 ~ invalid marks");
// } else if(marks > 100)
//     {
//     console.log("🚀 ~ marks can't hire then 100");
// }
// else if(marks <= 36)
//     {
//     console.log("🚀 ~ faild")
//     } else if(marks <= 50)
//         {
//         console.log("🚀 ~ D"
//     );
//     } else if(marks <= 60)
//         {
//         console.log("🚀 ~ C"
//     );
//     } else if(marks <= 70)
//         {
//         console.log("🚀 ~ B "
//         );
//     }
//     else if(marks <= 80)
//         {
//         console.log("🚀 ~ A")
//     } else
//         {
//         console.log("🚀 ~ A+")
//     }
// }

// function marks (marks, grade)
// {

    // switch(true)
    // {
    //     case (marks < 0):
    //         console.log("🚀 ~ invalid marks");
    //         break;
    //     case (marks > 100):
    //         console.log("🚀 ~ marks can't hire then 100");
    //         break;
    //     case (marks <= 36):
    //         console.log("🚀 ~ faild");
    //         break;
    //     case (marks <= 50):
    //         console.log("🚀 ~ D");
    //         break;
    //     case (marks <= 60):
    //         console.log("🚀 ~ C");
    //         break;
    //     case (marks <= 70):
    //         console.log("🚀 ~ B");
    //         break;
    //     case (marks <= 80):
    //         console.log("🚀 ~ A");
    //         break;
    //     case (marks <= 100):
    //         console.log("🚀 ~ A+");
    //         break;
    // }
// }

grade = [
    {max: 20, min: 10, grade: 'D'},
    {max: 30, min: 21, grade: 'C'},
    {max: 40, min: 31, grade: 'B'},
    {max: 50, min: 41, grade: 'A'}
];
function marks (marks, grade)
{
    for(let i = 0; i < grade.length; i++)
    {
        if(marks >= grade[i].min && marks <= grade[i].max)
        {
            console.log("🚀 ~ grade:", grade[i].grade);
            return;
        }
    }
    console.log("🚀 ~ invalid marks");
    

}


marks(200, grade);