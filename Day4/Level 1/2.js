//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*Enter your age: 30
You are 5 years older than me.*/

let myAge = 32;
let YourAge = 30;
if(myAge<YourAge){
    console.log(`You are ${YourAge-myAge} years older than me `)
}else{
    console.log(`You are ${Math.abs(YourAge-myAge)} years elder than me`)
}