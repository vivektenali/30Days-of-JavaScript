/* 
7.Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh' 
Your first name, Asabeneh is longer than your family name, Yetayeh */

let firstName = 'Vivek';
let lastName = 'Tenali';

if(firstName.length > lastName.length)
{
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}
else{
    console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
}