/* 
1) Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)
*/
function phCalculator(ph) {
    if (ph < 7) {
        return 'Acidic';
    } else if (ph == 7) {
        return 'Neutral';
    } else {
        return 'Alkaline';
    }
}

// console.log(phCalculator(5));
// console.log(phCalculator(10));
// console.log(phCalculator(7));