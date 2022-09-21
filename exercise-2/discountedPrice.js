/*
2) Write a function that takes price and discount percentage as parameters and 
calculates the discounted price. 
The function should give an error message if the price or percentage are < 0. 
(e.g. If price = 30€, discount = 50%, new price should be 15€)

15 = 30 - (30 * (50 / 100));
*/

function discountCalculator(price, discountPercent) {
    if (price == 0 || discountPercent ==0) {
        return 'The parameters should be different than zero';
    } else {
        return price - (price * discountPercent/100);
    }

}

// console.log(discountCalculator(10, 20));
// console.log(discountCalculator(0, 20));
// console.log(discountCalculator(10, 0));