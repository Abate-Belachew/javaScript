/*
15) Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock. 
*/

// let product1 = {name : "iphone", price: 50, amount: 10};
// let product2 = {name : "samsung", price: 20, amount: 5};
// let product3 = {name : "nokia", price: 30, amount: 0};
let products = [
    {name : "iphone", price: 50, amount: 10}, 
    {name : "samsung", price: 20, amount: 5}, 
    {name : "nokia", price: 30, amount: 0}
];



function inStock(item){
    let stock = [];
    for (i = 0; i < item.length; i++){
        if (item[i].amount != 0) {
            stock.push(item[i].name);
        }  
    }
    return stock; 
}

console.log(inStock(products));
