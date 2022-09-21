/*
8) Write a simple calculator program that calculates 
the difference, sum or product of two numbers. 

The function takes as a parameter, the type of calculation to perform and two numbers.

Then based on the type of calculation given 
(addition, subtraction, multiplication, division), 
it performs the calculation and returns the result. 
*/

function calculator (number1, operation, number2) {
    if (operation === '+') {
        let result = number1 + number2;
        return result;
    } else if (operation === '-') {
         result = number1 - number2;
        return result;
    } else if (operation === '*') {
         result = number1 * number2;
        return result;
    } else if (operation === '/') {
         result = number1 / number2;
        return result;
    }
}

// console.log(calculator(6, '+', 2));
// console.log(calculator(6, '-', 2));
// console.log(calculator(6, '*', 2));
// console.log(calculator(6, '/', 2));