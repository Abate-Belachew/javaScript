/*
9) Write a function that takes three numbers and write two more functions 
which calculate and return the largest and smallest of these numbers.
The first function should print what is returned from 
the functions largest and smallest.
*/

function largest(x, y, z) {
    if (x >y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else if (z > x && z > y) {
        return z;
    } 
} 
function smallest(x,y, z) {
    if (x < y && x < z) {
        return x;
    } else if (y < x && y < z) {
        return y;
    } else if (z < x && z < y) {
        return z;
    } 

}
    
   
function numbers(x, y, z) {
       return 'The smallest number is' + ' ' +smallest(x, y, z) +' ' + 'and' + ' ' + 'the largest number is' + ' ' +largest(x, y, z);
}

// console.log(numbers(1, 2, 3));