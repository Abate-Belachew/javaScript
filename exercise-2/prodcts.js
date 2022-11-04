// Prerequisites:
// - functions, objects, conditionals
// - arrow functions
// - array functions: map, filter, find, reduce, every, some..

const products = [
    "iPhone 13", 
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "OnePlus 10 Pro",
    "OnePlus 9",
    "Nokia G20",
    "Samsung Galaxy S20",
    "Samsung Galaxy S21",
    "Samsung Galaxy S22",
    "Sony Xperia 10",
    "Xiaomi Redmi 9A",
  ];


let favorites = [];

// Task 1. Add new Products: Google Pixel 6 Pro, Motorola Moto G31, Honor X7
/* 
products.push('Google Pixel 6 Pro', 'Motorola Moto G31', 'Honor X7');
console.log(products);
 */
// Task 2. remove Sony Xperia 10 from the list

// favorites = products.filter((item) => { if (item != 'Sony Xperia 10') return item; });
// console.log(favorites);

// Task 3. list the products with "Galaxy" in their names
/* 
let filteredList = products.filter((product) => { if (product.includes("Galaxy")) return product; });
console.log(filteredList); 
 */
// Task 4. Add Google Pixel 6 Pro, OnePlus 10 Pro, iPhone 13 Pro Max to favorites
 favorites.push("Google Pixel 6 Pro", "OnePlus 10 Pro", "iPhone 13 Pro Max");
// console.log(favorites);
// Task 5. remove OnePlus 10 Pro from favorites
// let filteredListTwo = favorites.filter((product) => {if (product !="OnePlus 10 Pro") return product;});
// console.log(filteredListTwo);
// Task 6. Calculate and print the number of products that have "Pro" in their names
// Try to implement this in two ways. 1. using reduce 2. using filter and length
// let countPro = products.filter((product) => {if (product.includes("Pro")) return product; }).length;
// console.log(countPro);
// Task 7. Print an array that has either iOS or Android for each product based on the name
// e.g. if the product has iphone in the name, it should be iOS; otherwise it should be android
// the resulting array could be ["iOS", "iOS", "iOS", "Android", "Android", "Android", "Android"...]
/* 
let productsTwo = products.map((item) => {if (item.includes("iPhone")) return "ios"; else return "Android";});
console.log(productsTwo);
 */
// Task 8. Print an array with the count of words for each product. Numbers could be regarded as words
// the resulting array could look sth like this [2, 3, 4, 2, 2, 3, 3, 2, 2, 3, 3, 3, 2, 2...]
/* 
let productsWordCount = products.map((wordCount) => { return wordCount.split(' ').length;});
console.log(productsWordCount);
 */
// Task 9. Print only the products that end with "Pro"
/* 
let productEndsWithPro = products.filter((item) => {return item.endsWith("Pro");});
console.log(productEndsWithPro);
 */
// Task 10. Print the products that are NOT in the favorites array
 
let productsNotInFavorites = products.filter((product) =>  favorites.find((fav) => {if (fav !== product) return product; }));
console.log(productsNotInFavorites);

// Task 11. Check if all the items in favorites are iPhones (have "iPhone" in the name). Print the boolean output.
/* 
console.log(favorites.every((items) => items.includes("iPhone")));
 */
// Task 12. Check if any of the items in favorites contain the number 12 or 13. Print the boolean output.
/* 
console.log(favorites.some((items) => items.includes("13")));
console.log(favorites.some((items) => items.includes("12")));
 */
// hint: 
// 1. push,  2. filter,       3. filter,  4. push,  5. filter,  6. reduce/filter-length
// 7. map,   8. map + split,  9. filter + string method to check string ending 
// 10. find in filter,        11. every,   12. some
