/*
EX. 3-
 create three variables for first name, last name and temp (temporary) name
 assign your last name to your first name variable
 assign your first name to your last name variable
 then by using temp to temporarily store one of the names, switch the content of your first name to your last name
 To do this imagine you have three cups and one of them has juice and the other has water, the third one is empty.
 How would you transfer the juice to the water cup and the water to the juice cup using the third cup as a temporary storage?
 Use the same logic to switch the names from one of the variables to the other
*/

let firstName = 'Abate';
let lastName = 'Belachew';
let temporaryName;
temporaryName = firstName;
firstName = lastName;
lastName = temporaryName; 

console.log(firstName);
console.log(lastName);