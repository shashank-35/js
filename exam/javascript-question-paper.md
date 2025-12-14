# JavaScript Question Paper

**Subject:** JavaScript Fundamentals  
**Topics Covered:** Loops, Conditions, Array Methods, String Methods, Data Types, Objects  
**Total Questions:** 30 + 5 Brain Storming Tasks  
**Total Marks:** 100

---

## Section A: Theoretical Questions (20 Questions × 2 Marks = 40 Marks)

### Data Types (4 Questions)

**Q1.** What are the primitive data types in JavaScript? List all of them with one example each.

**Q2.** Explain the difference between `null` and `undefined` with examples.

**Q3.** What will be the output of `typeof NaN` and why?

**Q4.** What is the difference between `==` and `===` in JavaScript? When should you use each?

---

### Conditionals (4 Questions)

**Q5.** Explain the difference between `if-else` and `switch` statements. When would you prefer one over the other?

**Q6.** What is a ternary operator? Write its syntax and explain with an example.

**Q7.** What are truthy and falsy values in JavaScript? List at least 5 falsy values.

**Q8.** Can we use multiple conditions in a single `if` statement? Explain with the help of logical operators (`&&`, `||`, `!`).

---

### Loops (4 Questions)

**Q9.** What is the difference between `for`, `while`, and `do-while` loops? When would you use each?

**Q10.** Explain what an infinite loop is and how can it be avoided.

**Q11.** What is the purpose of `break` and `continue` statements in loops? Give one example of each.

**Q12.** How does a `for...of` loop differ from a `for...in` loop?

---

### Arrays and Array Methods (4 Questions)

**Q13.** Explain the difference between `map()` and `forEach()`. When would you use one over the other?

**Q14.** What is the difference between `filter()` and `find()` methods?

**Q15.** How does `reduce()` work? Explain with a simple example.

**Q16.** What is the difference between `push()`, `pop()`, `shift()`, and `unshift()` methods?

---

### Strings and Objects (4 Questions)

**Q17.** Explain any 5 string methods with their use cases.

**Q18.** What is the difference between `slice()` and `substring()` in strings?

**Q19.** How do you access properties of an object? Explain dot notation vs bracket notation.

**Q20.** How can you loop through all keys and values of an object?

---

## Section B: Practical Coding Questions (10 Questions × 4 Marks = 40 Marks)

### Easy Level

**Q21.** Write a program to check if a number is even or odd.

---

**Q22.** Write a program to find the largest number among three given numbers.

---

**Q23.** Write a program to reverse a string without using the `reverse()` method.

---

**Q24.** Write a program to count the number of vowels in a given string.

---

### Medium Level

**Q25.** Given an array of numbers, write a program to find all numbers greater than 10 and return them in a new array.

```javascript
// Input: [5, 12, 8, 21, 3, 15]
// Output: [12, 21, 15]
```

---

**Q26.** Write a program to remove duplicate values from an array.

```javascript
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
```

---

**Q27.** Write a program to count how many times each character appears in a string and return an object.

```javascript
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
```

---

**Q28.** Given an array of objects representing students, write a program to find all students who scored more than 80.

```javascript
const students = [
  { name: "Raj", score: 85 },
  { name: "Priya", score: 72 },
  { name: "Amit", score: 90 },
  { name: "Neha", score: 65 }
];

// Output: [{ name: "Raj", score: 85 }, { name: "Amit", score: 90 }]
```

---

### Challenging Level

**Q29.** Write a program to find the second largest number in an array without using the `sort()` method.

```javascript
// Input: [12, 35, 1, 10, 34, 1]
// Output: 34
```

---

**Q30.** Write a program to group an array of objects by a specific property.

```javascript
const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Spinach", category: "Vegetable" }
];

// Output: 
// {
//   Fruit: [
//     { name: "Apple", category: "Fruit" }, 
//     { name: "Banana", category: "Fruit" }
//   ],
//   Vegetable: [
//     { name: "Carrot", category: "Vegetable" }, 
//     { name: "Spinach", category: "Vegetable" }
//   ]
// }
```

---

## Section C: Brain Storming Practical Tasks (5 Tasks × 4 Marks = 20 Marks)

> These tasks require creative thinking and combine multiple concepts.

---

### Task 1: Word Frequency Analyzer

**Problem:** Build a program that analyzes a paragraph and returns useful statistics.

**Requirements:**

- Count total words
- Count total characters (with and without spaces)
- Find the most frequently used word
- Find the longest word
- Return all unique words

```javascript
const paragraph = "The quick brown fox jumps over the lazy dog. The dog was not amused by the fox.";

// Expected output format:
// {
//   totalWords: 17,
//   totalCharsWithSpaces: 78,
//   totalCharsWithoutSpaces: 62,
//   mostFrequentWord: "the",
//   longestWord: "amused",
//   uniqueWords: ["the", "quick", "brown", ...]
// }
```

---

### Task 2: Shopping Cart Calculator

**Problem:** Create a shopping cart system that calculates totals with discounts.

**Requirements:**

- Calculate subtotal of all items
- Apply 10% discount if subtotal exceeds ₹1000
- Apply additional 5% discount if there are more than 5 items
- Show savings amount
- Return final bill breakdown

```javascript
const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pants", price: 800, quantity: 1 },
  { name: "Socks", price: 100, quantity: 3 },
  { name: "Belt", price: 300, quantity: 1 }
];

// Think about: 
// - How will you structure the output?
// - How will you handle multiple discount conditions?
```

---

### Task 3: Student Grade Management System

**Problem:** Build a grade management system for a class.

**Requirements:**

- Calculate average score for each student
- Assign grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60)
- Find class topper
- Find subject-wise highest scorer
- List all failing students
- Calculate class average

```javascript
const students = [
  { name: "Rahul", scores: { math: 85, science: 90, english: 78 } },
  { name: "Priya", scores: { math: 92, science: 88, english: 95 } },
  { name: "Amit", scores: { math: 55, science: 60, english: 58 } },
  { name: "Sneha", scores: { math: 78, science: 82, english: 80 } }
];

// Challenge: 
// - How will you structure your solution?
// - Can you make it work for any number of subjects?
```

---

### Task 4: Password Strength Checker

**Problem:** Create a program that evaluates password strength.

**Requirements:**

- Check minimum length (8 characters)
- Check for uppercase letters
- Check for lowercase letters
- Check for numbers
- Check for special characters (!@#$%^&*)
- Return strength level: Weak, Medium, Strong, Very Strong
- Return suggestions for improvement

```javascript
// Test with different passwords:
// "password"     → Weak
// "Password1"    → Medium  
// "Password1!"   → Strong
// "MyP@ssw0rd!"  → Very Strong

// Think about:
// - How will you check each condition?
// - How will you calculate strength score?
// - What suggestions will you give for each missing requirement?
```

---

### Task 5: Data Transformation Challenge

**Problem:** Transform messy API data into a clean, usable format.

**Requirements:**

- Clean and standardize names (proper case)
- Convert date strings to readable format
- Group by department
- Calculate age from birthdate
- Sort employees by experience (joining date)
- Remove inactive employees

```javascript
const rawData = [
  { NAME: "RAJESH KUMAR", dept: "engineering", joined: "2020-05-15", dob: "1995-03-20", active: true },
  { NAME: "priya sharma", dept: "ENGINEERING", joined: "2019-08-01", dob: "1992-07-10", active: true },
  { NAME: "AMIT PATEL", dept: "Marketing", joined: "2021-01-10", dob: "1998-11-25", active: false },
  { NAME: "neha gupta", dept: "marketing", joined: "2018-03-22", dob: "1990-05-15", active: true },
  { NAME: "VIJAY SINGH", dept: "Engineering", joined: "2022-06-01", dob: "1997-09-08", active: true }
];

// Expected output structure:
// {
//   Engineering: [
//     { name: "Priya Sharma", age: 32, experience: "5 years", joinDate: "01 Aug 2019" },
//     { name: "Rajesh Kumar", age: 29, experience: "4 years", joinDate: "15 May 2020" },
//     ...
//   ],
//   Marketing: [...]
// }

// Hints:
// - Use string methods for name cleaning
// - Use Date object for calculations
// - Use filter, map, reduce appropriately
// - Think about edge cases
```

---

## Marking Scheme

| Section | Questions | Marks per Question | Total Marks |
|:--------|:---------:|:------------------:|:-----------:|
| Section A (Theory) | 20 | 2 | 40 |
| Section B (Practical) | 10 | 4 | 40 |
| Section C (Brain Storming) | 5 | 4 | 20 |
| **Total** | **35** | - | **100** |

---

## Instructions for Students

1. **Section A:** Write clear and concise answers with examples where asked.
2. **Section B:** Write complete working code with proper variable names and comments.
3. **Section C:** Focus on problem-solving approach. Partial marks will be given for correct logic even if code has minor errors.
4. **Time Management:** 
   - Section A: 30 minutes
   - Section B: 50 minutes  
   - Section C: 40 minutes

---

**Best of luck! 🎯**
