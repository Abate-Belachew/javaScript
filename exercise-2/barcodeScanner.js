/*
18) Write a program that simulates a barcode scanner.

Hint: Write a function that returns an array of products.
The product object should have the barcode string.
Write another function that takes a barcode string and 
returns the product that matches the given barcode.

*/
let products = [
    {name : "nokia", price: 30, amount: 0, barcode: "xzyz"},
    {name : "iphone", price: 50, amount: 10, barcode: "xyzx"}, 
    {name : "samsung", price: 20, amount: 5, barcode: "xyyz"},
    {name : "asus", price: 12, amount: 3, barcode: "xyzt"}
];

function productsArray(product){
    return function barcodeScan(barcodeString){
        for (i = 0; i < product.length; i++){
            if (product[i].barcode === barcodeString){
            return product[i];
        }
    }
}
}

console.log(productsArray(products)("xzyz"));
console.log(productsArray(products)("xyyz"));
