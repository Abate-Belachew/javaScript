/*
14) Let's write a program that manages products in stock.
Write a function that takes an array of products as a parameter. 
The product should be an object with name, price, and stockAmount. 
Add multiple products to the array, with varying stock amount, 
where some of the products have stock amount 0. 

Return the total sum of all the items in stock. 

e.g. if prod-1 has 4 items, prod-2 has 6, prod-3 has 5 => 
total should be 4+6+5=15
*/

let product1 = {name : "iphone", price: 50, amount: 10};
let product2 = {name : "samsung", price: 20, amount: 5};
let product3 = {name : "nokia", price: 30, amount: 0};
let productAmount = [product1.amount, product2.amount, product3.amount]

function totalItems(sum){
    let s = 0;
    for (i = 0; i < sum.length; i++){
        s += sum[i];
    }
    return s;
}

console.log(totalItems(productAmount));
