// ========================================
// READLINE MODULE - COMPLETE GUIDE
// ========================================

const readline = require('readline');

// Step 1: Create an interface
// This creates the input/output stream for reading user input
const rl = readline.createInterface({
    input: process.stdin,      // Read from terminal keyboard
    output: process.stdout     // Write output to terminal
});

// ========================================
// EXAMPLE 1: Simple Question
// ========================================
console.log("\n--- EXAMPLE 1: Simple Question ---");

function example1() {
    rl.question("What is your name? ", (answer) => {
        console.log(`🚀 Hello, ${answer}!`);
        example2();
    });
}

// ========================================
// EXAMPLE 2: Multiple Questions (Sequential)
// ========================================
function example2() {
    console.log("\n--- EXAMPLE 2: Multiple Questions ---");
    
    rl.question("What is your age? ", (age) => {
        rl.question("What is your city? ", (city) => {
            console.log(`🚀 You are ${age} years old and live in ${city}`);
            example3();
        });
    });
}

// ========================================
// EXAMPLE 3: Using Promises (Cleaner)
// ========================================
function example3() {
    console.log("\n--- EXAMPLE 3: Using Promises ---");
    
    askQuestion("Enter a number: ")
        .then((num1) => {
            return askQuestion("Enter another number: ")
                .then((num2) => {
                    const sum = Number(num1) + Number(num2);
                    console.log(`🚀 Sum: ${sum}`);
                    return sum;
                });
        })
        .then(() => {
            example4();
        });
}

// Helper function to convert question to Promise
function askQuestion(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

// ========================================
// EXAMPLE 4: Async/Await (Best)
// ========================================
async function example4() {
    console.log("\n--- EXAMPLE 4: Using Async/Await ---");
    
    try {
        const fruit = await askQuestion("Your favorite fruit? ");
        const color = await askQuestion("Your favorite color? ");
        console.log(`🚀 You like ${color} ${fruit}s`);
        
        rl.close();  // Close the readline interface
    } catch (error) {
        console.error("Error:", error);
        rl.close();
    }
}

// Start the examples
example1();

// ========================================
// COMMON READLINE METHODS
// ========================================
/*

1. rl.question(prompt, callback)
   - Asks a question and gets user input
   - callback(answer) - receives the user's answer
   
   Example:
   rl.question("Enter your name: ", (name) => {
       console.log("Hello " + name);
   });

2. rl.close()
   - Closes the readline interface
   - Stops listening for input
   
   Example:
   rl.close();

3. rl.on('line', callback)
   - Listens for each line of input
   - Useful for continuous input
   
   Example:
   rl.on('line', (line) => {
       console.log("You typed: " + line);
   });

4. rl.on('close', callback)
   - Triggered when interface is closed
   
   Example:
   rl.on('close', () => {
       console.log("Program ended");
   });

*/

// ========================================
// PRACTICAL EXAMPLE: Calculator
// ========================================

/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calculator() {
    const num1 = await askQuestion("Enter first number: ");
    const num2 = await askQuestion("Enter second number: ");
    const operation = await askQuestion("Enter operation (+, -, *, /): ");
    
    let result;
    switch(operation) {
        case '+': result = Number(num1) + Number(num2); break;
        case '-': result = Number(num1) - Number(num2); break;
        case '*': result = Number(num1) * Number(num2); break;
        case '/': result = Number(num1) / Number(num2); break;
        default: result = "Invalid operation";
    }
    
    console.log(`🚀 Result: ${result}`);
    rl.close();
}

function askQuestion(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

calculator();
*/
