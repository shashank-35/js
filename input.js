// Taking user input from terminal and passing function as argument
const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define some functions to choose from
const greetUser = (name) => {
    console.log(`🚀 Hello, ${name}! Welcome!`);
};

const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    console.log(`🚀 You are ${age} years old`);
};

const getGrade = (marks) => {
    if (marks < 0 || marks > 100) {
        console.log("🚀 Invalid marks! Must be between 0-100");
    } else if (marks <= 36) {
        console.log("🚀 Grade: Failed");
    } else if (marks <= 50) {
        console.log("🚀 Grade: D");
    } else if (marks <= 60) {
        console.log("🚀 Grade: C");
    } else if (marks <= 70) {
        console.log("🚀 Grade: B");
    } else if (marks <= 80) {
        console.log("🚀 Grade: A");
    } else {
        console.log("🚀 Grade: A+");
    }
};

// Function that takes a function as argument
function executeFunction(fn, arg) {
    fn(arg);
}

// Display menu
console.log("🚀 Choose a function:");
console.log("1. Greet User (enter name)");
console.log("2. Calculate Age (enter birth year)");
console.log("3. Get Grade (enter marks)");
console.log("");

// Take user input
rl.question("Enter your choice (1/2/3): ", (choice) => {
    switch (choice) {
        case '1':
            rl.question("Enter your name: ", (name) => {
                executeFunction(greetUser, name);
                rl.close();
            });
            break;
        case '2':
            rl.question("Enter your birth year: ", (year) => {
                executeFunction(calculateAge, Number(year));
                rl.close();
            });
            break;
        case '3':
            rl.question("Enter your marks: ", (marks) => {
                executeFunction(getGrade, Number(marks));
                rl.close();
            });
            break;
        default:
            console.log("🚀 Invalid choice!");
            rl.close();
    }
});
