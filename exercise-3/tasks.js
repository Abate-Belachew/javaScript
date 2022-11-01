function getRecipes() {
    return [{
      name: "salmon soup",
      vegan: false,
      ingredients: [{
          name: "salmon",
          quantity: 1,
        }, {
          name: "cream",
          quantity: 2,
        }, {
          name: "milk",
          quantity: 1,
        }
      ]
    }, {
      name: "carbonara",
      vegan: false,
      ingredients: [{
          name: "pasta",
          quantity: 1,
        }, {
          name: "cheese",
          quantity: 5,
        }, {
          name: "milk",
          quantity: 1,
        }
      ]
    }, {
      name: "rice bowl",
      vegan: false,
      ingredients: [{
          name: "rice",
          quantity: 2,
        }, {
          name: "water",
          quantity: 1,
        }
      ]
    }];
  }


  // Implement functions that perform the following tasks

// Task: 1. Add a new recipe
const addRecipe = (recipes, recipe) => {
  if (recipe.name  && recipe.vegan != null) 
    // check if recipe has name and vegan status
    // add recipe to recipes
    // return recipes array
  recipes.push(recipe);
  return recipes;
}
    
 let recipe = {
  name: "Beef tibs",
  vegan: false,
  ingredients: [{
    name: "beef meat",
    quantity: 100,
  }, {
    name: "onion",
    quantity: 1,
  }, {
    name: "oil",
    quantity: 4,
  }, {
    name: "salt",
    quantity: 0.5,
  }
  ]
 }; 


// console.log(recipe);

// console.log(addRecipe(getRecipes(), recipe));
// console.dir(addRecipe(getRecipes(), recipe), {depth: null});