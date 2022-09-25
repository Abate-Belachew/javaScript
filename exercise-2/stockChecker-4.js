/*
Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)
*/

let products = [
    {name : "nokia", price: 30, amount: 0},
    {name : "iphone", price: 50, amount: 10}, 
    {name : "samsung", price: 20, amount: 5},
    {name : "asus", price: 12, amount: 3}
];

function stockCheck(product, productName){
    let productArray = [];
    for (i = 0; i < product.length; i++){
        if (product[i].name != productName){
            productArray.push(product[i].name);
        }
    }
    return productArray;
}

console.log(stockCheck(products, "nokia"));