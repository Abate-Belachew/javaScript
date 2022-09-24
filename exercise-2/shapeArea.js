/*
Write a function that takes a shape as a param and returns the area of the shape.
Pass shape as an object, 
e.g. {type: "rectangle", sides: { width: 5, height: 6} }

calculate area based on shape.type and shape.sides or the attribute you define.
Implement the area calculation for a triangle, circle and a square.
*/

let rectangle = {type: "rectangle", sides: {width: 5, height: 6}};
let triangle = {type: "triangle", sides: {width: 5, height: 6}};
let circle = {type: "circle", sides: {radius: 5}};
let square = {type: "square", sides: {length: 5}};


function area(shape){
    let area;
    const pi = 3.142;
    if(shape.type === "rectangle") {
         area = shape.sides.width * shape.sides.height;
    } else if (shape.type === "triangle"){
        area = (shape.sides.width * shape.sides.height) / 2;

    } else if (shape.type === "circle"){
        area = pi * (shape.sides.radius) **2;
    } else if (shape.type === "square"){
        area = shape.sides.length **2;
    }
    return area;
}

// console.log(area(rectangle));
console.log(area(triangle));
console.log(area(circle));
console.log(area(square));