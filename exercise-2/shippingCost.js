/*
3) You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"
*/
function shippingCost (cost, location) {
    if (location == 'EU') {
        return 'You have to pay a total of' + ' ' + (cost + 5)+'€' +',' + 
        ' ' + cost + ' ' + 'for the product' + ' ' + 'and' + ' ' + '5€ for shipping.';
    } else if (location == 'US' || location == 'Canada') {
        return 'You have to pay a total of' + ' ' + (cost + 15)+'€' +',' + 
        ' ' + cost + ' ' + 'for the product' + ' ' + 'and' + ' ' + '15€ for shipping.';
    } else {
        return 'You have to pay a total of' + ' ' + (cost + 20)+'€' +',' + 
        ' ' + cost +  ' ' + 'for the product' + ' ' + 'and' + ' ' + '20€ for shipping.';
    }
    
}

// console.log(shippingCost(45, 'EU'));
// console.log(shippingCost(45, 'US'));
// console.log(shippingCost(45, 'Canxada'));