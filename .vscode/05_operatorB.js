
//STEP 1
console.log("STEP 1");
console.log("10 is greater than -10:", 10 > -10);
console.log("800 is greater than 899:", 800 > 899);

// STEP 2
console.log("\nSTEP 2");
const numbers = [29, 44, 0, 101];
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num + " is Even Number.");
    } else {
        console.log(num + " is Odd Number.");
    }
});

// STEP 3
console.log("\nSTEP 3");
const words = ["Javascript", "developer", "Google"];
words.forEach(word => {
    if (word.length % 2 === 0) {
        console.log("Given word " + word + " is with Even length.");
    } else {
        console.log("Given word " + word + " is with Odd length.");
    }
});


