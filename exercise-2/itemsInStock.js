/*
16) Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then should return true/false if that product name exists
	in the products array.
*/

let products = [
    {name : "nokia", price: 30, amount: 0},
    {name : "iphone", price: 50, amount: 10}, 
    {name : "samsung", price: 20, amount: 5},
    {name : "asus", price: 12, amount: 3}
];

function itemAvailable(product, x){
    for (i = 0; i < product.length; i++){
        if (product[i].name === x ){
            return true;
        } 
    }
    return false;
   
}


console.log(itemAvailable(products, "asus"));