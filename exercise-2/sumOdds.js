/*
7) Calculates the sum of 1+3+5+7...+99+101
Prints the sum of 1+3+5+7...+99+101
Output: "The sum is 2601"
(Source: https://github.com/py-study-group/beginner-friendly-programming-exercises/blob/master/exercises.md)
*/

function oddSum() {
    let s = 0;
    for(let i = 1; i < 102; i++) {
        if (i%2 != 0) {
            s += i;
        } 
    }
    return 'The sum is' + ' ' + s;
}

// console.log(oddSum());