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
 
const deleteRecipe = (recipes, recipeName) => {
  const updatedList = recipes.filter((item) =>  !item.name.includes(recipeName)); 
  return updatedList;
}


// console.dir(deleteRecipe(recipes, 'salmon soup'));

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
  const aRecipe = recipes.find((recipeName) =>  {
    if (recipeName.name === recipe ) {return recipe;}
  }); 

  let ingredientNames = aRecipe.ingredients.map((ingrName) => ingrName.name);
  return ingredientNames;
}



// console.log(getIngredientNames(recipes, 'carbonara'));

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


// console.dir(removeFavorite(getRecipes(), 'salmon soup'), {depth: null});

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
    } 
    else {
      return recipe
    };
  
  });
  return changeName;
}

// console.dir(editRecipe(recipes,"carbonara", "carbo"), {depth: null});

// Task: 9. edit a recipe - make it vegan / make it non-vegan
const toggleVeganStatus = (recipes, recipeName) => {
  let editedRecipes = recipes.map((recipe) => {
    if(recipe.name === recipeName && recipe.vegan === false){
      return{...recipe, vegan: true};
    }
    if (recipe.name === recipeName && recipe.vegan === true) {
      return{...recipe, vegan: false};
    } else{
      return recipe
    };

  });

  return editedRecipes;
  
} 

// console.dir(toggleVeganStatus(recipes, 'rice bowl'), {depth: null});

// Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe
// use filter
const searchByRecipeName = (recipes, recipeName) => {
  let searchByRecipeName = recipes.filter((recipe) => {
    if (recipe.name === recipeName) {
      return recipe;
    }

  });

  return searchByRecipeName;
}

// console.dir(searchByRecipeName(recipes, 'rice bowl'), {depth: null});

// Task: 11. search by ingredient name - return all recipes that contain a given ingredient name
// use filter and again filter through the ingredients
const searchByIngredientName = (recipes, ingredientName) => {
  let searchByIngredient = [];
  recipes.filter((recipe) => { recipe.ingredients.forEach((ingredient) => { 
      if (ingredient.name === ingredientName) {
        searchByIngredient.push(recipe);
      }
    });
      
    });
  return searchByIngredient; 
} 
// the above task can be done also by for-loop
/*
const searchByIngredientName = (recipes, ingredientName) => {
  let searchByIngredient = recipes.filter((recipe) => {for (let i = 0; i < recipe.ingredients.length; i++) {
     if (recipe.ingredients[i].name === ingredientName) {return recipe;}}});
     return searchByIngredient;
}
 */
// console.dir(searchByIngredientName(recipes, 'rice'), {depth: null});

// Task: 12. add an ingredient to a recipe
// add the ingredient to the recipe that matches the recipename
  // return updatedList;
  const addIngredient = (recipes, recipeName, ingredient) => {
    let updatedList = recipes.filter((recipe) => {
      if (recipe.name === recipeName) {
        return recipe.ingredients.push(ingredient)
      }
      else{
        return recipe;
      };
    });
    return updatedList;
  }

let newIngredient = {name: 'carrot', quantity: 2};

//console.dir(addIngredient(recipes, 'rice bowl', newIngredient), {depth: null});

// Task: 13. delete an ingredient from a recipe, 
  // delete the ingredient of the recipe that matches the recipename
  // return updatedList;
const deleteIngredient = (recipes, recipeName, ingredientName) => {
  let updatedList = []; 
  recipes.filter((recipe) => {
    if (recipe.name === recipeName) {
      updatedList.push({...recipe, ingredients: recipe.ingredients.filter(ingr =>  !ingr.name.includes(ingredientName))});    
      }
      else { 
        updatedList.push(recipe);
      }
  });
  return updatedList;
}
       

// console.dir(deleteIngredient(recipes, 'carbonara', 'cheese'), {depth: null});