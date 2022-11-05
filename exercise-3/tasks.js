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

let recipes = getRecipes();
// console.dir(recipes, {depth:null});

// console.dir(addRecipe(getRecipes(), recipe, {depth: null}));

// Task: 2. delete a recipe that matches a given name
/* 
const deleteRecipe = (recipes, recipeName) => {
  const updatedList = recipes.filter((item) =>  !item.name.includes(recipeName)); 
  return updatedList;
}
 */
// let recipeName = "salmon soup";
// console.dir(deleteRecipe(recipes, recipeName));

// Task: 3. get only vegan recipes
/* 
const veganRecipe = (recipes) => {
  const onlyVegan = recipes.filter((recip) => recip.vegan == true);
  return onlyVegan;
}

console.dir(veganRecipe(recipes), {depth: null}); 
*/

// Task: 4. get the names of the ingredients of a recipe
const getIngredientNames = (recipes, recipe) => {
  const recip = recipes.find((recipeName) =>  {if (recipeName.name === recipe ) return recipe;}); 
  let ingredientName = recip.ingredients.map((x) => x.name);
  return ingredientName;
}

let recip = "carbonara";

console.log(getIngredientNames(recipes, recip));