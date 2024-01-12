// First Example: 
// var marks = prompt("Enter Your Marks");
// if (marks>=80 && marks<=100)
// console.log("A+");
// else if (marks>=70 && marks<=79)
// console.log("A");
// else if (marks>=60 && marks<=69)
// console.log("B");
// else if (marks>=50 && marks<=59)
// console.log("C");
// else if (marks>=40 && marks<=49)
// console.log("D");
// else
// console.log("Fail");


// Second Example:
// var num1 =prompt("Enter First Number");
// var num2 =prompt("Enter Second Number");
// var num3 =prompt("Enter Third Number");
// if (num1>num2 && num1>num3)
// console.log("Large Number "+ num1);
// else if (num2>num1 && num2>num3)
// console.log("Large Number "+num2);
// else
// console.log("Large Number "+num3);



// Vowel Or Consonant Nirnoi Third Example:
var letter = prompt("Enter A Letter");
letter = letter.toLocaleLowerCase();
if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
console.log("Vowel "+letter);
else
console.log("Consonant")