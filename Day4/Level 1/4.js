/* Even numbers are divisible by 2 and the remainder is zero. How do you check,
 if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */


let number = 9;
let check = (number%2==0) ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`);