/*
11) Write a function that takes a parameter array of working hours 
(e.g. [4, 5, 7.5, 8.5, 9, 6]), 
the function should return the sum of the working hours.

*/
let hours = [4, 5, 7.5, 8.5, 9, 6];
function workingHours(workhr) {
    let sum = 0;
    for (let i = 0; i < workhr.length; i++ ) {
         sum += workhr[i];
    }
    return sum;
}

console.log(workingHours(hours));
