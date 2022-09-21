/*
6) Create a program that:
Calculates the sum of 1+2+3+4...+98+99
Prints the sum of 1+2+3+4...+98+99
Output: "The sum is 4950"

*/

function sum() {
    let s = 0;
    for(let i = 1; i < 100; i++) {
        s += i;   
    } 
    return 'The sum is' + ' ' + s;
}

// console.log(sum());