/* Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds. */


let oneYearSec = 31536000;
let yearsYouLive = parseInt(prompt(`Enter number of years you live`));
console.log(`You Lived ${oneYearSec * yearsYouLive} seconds`)