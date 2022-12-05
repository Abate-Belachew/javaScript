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

const recipes = getRecipes();
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
 /*    
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
 */

// console.log(recipe);

// let recipes = getRecipes();
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
  let ingredientName = recip.ingredients.map((ingrName) => ingrName.name);
  return ingredientName;
}

let recip = "carbonara";

// console.log(getIngredientNames(recipes, recip));

// Task: 5. add a recipe to favorites
const addToFavorites = (favorites, recipe) => {
  // .....
  favorites.push(recipe);
  return favorites;
}
//const favorites = getRecipes();
// console.dir(addToFavorites(getRecipes(), recipe));

// Task: 6. remove a recipe from favorites
function removeFavorite(favorites, recipeName) {
  //....
  // use filter
  //
  updatedFavorites = favorites.filter((favRecipe) => {
    return !favRecipe.name.includes(recipeName)});
  return updatedFavorites;
}

let salmonRecipe = "salmon soup";
// console.dir(removeFavorite(getRecipes(), salmonRecipe), {depth: null});

// Task: 7. get the list of names of the items in favorites
// console.log(favorites.map((recipeName) => {return recipeName.name}));

// Task: 8. edit a recipe - change the name
// find the recipe by oldName
  // change the name to newName
  // this can be done by map
  // map each recipe to itself. If the name matches, map it to a new object with newName
function editRecipe(recipes, oldName, newName) {
  let changeName = recipes.map(recipe => {
    if ( recipe.name === oldName) {
    return {...recipe, name: newName};
  } else {return recipe};
  
  });
  return changeName;
}

// console.dir(editRecipe(recipes,"carbonara", "carbo"), {depth: null});

// Task: 9. edit a recipe - make it vegan / make it non-vegan
const toggleVeganStatus = (recipes, recipeName) => { 
    let editRecipe = recipes.map((recipe) => {
    if(recipe.name === recipeName && recipe.vegan === false) {return{...recipe, vegan: true};}
    if (recipe.name === recipeName && recipe.vegan === true) {return{...recipe, vegan: false};}
    else{return recipe};
  });
  return editRecipe;
  
} 

// console.dir(toggleVeganStatus(recipes, 'rice bowl'), {depth: null});

// Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe
const searchByRecipeName = (recipes, recipeName) => {
  // use filter
  let serchByRecipeName = recipes.filter((recipe) => {if (recipe.name === recipeName) return recipe; });
return serchByRecipeName;
}

console.dir(searchByRecipeName(recipes, 'rice bowl'), {depth: null});