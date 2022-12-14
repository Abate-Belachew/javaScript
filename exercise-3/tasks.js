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

//const recipes = getRecipes();
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

//console.dir(addRecipe(getRecipes(), recipe, {depth: null}));

// Task: 2. delete a recipe that matches a given name
 
const deleteRecipe = (recipes, recipeName) => {
  const updatedList = recipes.filter(recipe => recipe.name !== recipeName); 
  return updatedList;
}


//console.dir(deleteRecipe(recipes, 'salmon soup'));

// Task: 3. get only vegan recipes
 
const veganRecipe = (recipes) => {
  const onlyVeganRecipes = recipes.filter((recip) => recip.vegan == true);
  return onlyVeganRecipes;
}

//console.dir(veganRecipe(recipes), {depth: null}); 


// Task: 4. get the names of the ingredients of a recipe
const getIngredientNames = (recipes, recipe) => {
  const aRecipe = recipes.find((item) =>  {
    if (item.name === recipe ) {
      return item;
    }
  });
  let ingredientNames = aRecipe.ingredients.map(ingredient => ingredient.name);
  return ingredientNames;
}



//console.log(getIngredientNames(recipes, 'carbonara'));

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

// Task: 14. edit a recipe - change the quantity of an ingredient
// find the recipe by name
  // update the ingredients of the recipe you found to have newQuantity
  // use map to map each recipe to itself, but if the name matches the recipeName, update the ingredients
  // return the updated recipes array 
  const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
    let updatedRecipes = recipes.map(recipe => { 
      if (recipe.name === recipeName) { 
        return {...recipe, ingredients: recipe.ingredients.map(ingredient => {
          if (ingredient.name.includes(ingredientName)){
            return{...ingredient, quantity: newQuantity};
          }
          else{
            return ingredient;
          };
        })};
      }
      else{
        return recipe;
      };
        
    });
    return updatedRecipes;
  }
  
//console.dir(editIngredientQuantity(recipes, 'carbonara', 'cheese', 4), {depth: null});

// Task: 15. Execute the functions you implemented above as required below
const main = () => {
  let recipes = getRecipes();

  let favorites = [];

  // Task: 15.1
  // Add the following recipes to the recipes array using the function from Task-1
  //    Lentil Bolognese, vegan, & Ingredients: 1 lentil; 3 tomatoes; 1 pasta; 1 onion
  //    Ozzo Chicken, non-vegan, & Ingredients: 1 spinach; 1 chicken; 1 sour cream
  const lentilBolognese = { 
    name: 'Lentil Bolognese', 
    vegan: true,
    ingredients:[
      {name: 'lentil', quantity: 1},
      {name: 'tomatoes', quantity: 3},
      {name: 'pasta', quantity: 1},
      {name: 'onion', quantity: 1}
    ]

  }; // fill in the attributes

  const ozzoChicken = {
    name: 'Ozzo Chicken',
    vegan: false,
    ingredients: [
      {name: 'spinach', quantity: 1},
      {name: 'chiken', quantity: 1},
      {name: 'sour cream', quantity: 1}
    ]
  };
  
  recipes = addRecipe(recipes,lentilBolognese); // add ozzo chicken in a similar way
  recipes = addRecipe(recipes, ozzoChicken);


  // Task: 15.2
  // Delete the recipe named "carbonara" using the function from Task-2
  
  recipes = deleteRecipe(recipes, 'carbonara');

  // Task: 15.3
  // Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
  // Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"
  recipes = addIngredient(recipes, 'salmon soup', {name: 'garlic', quantity: 3});
  recipes = addIngredient(recipes, 'rice bowl', {name: 'lentil', quantity: 1});

  // Task: 15.4
  // Delete ingredient named "water" from the recipe "rice bowl"
  recipes = deleteIngredient(recipes, 'rice bowl', 'water');


  // Task: 15.5
  // Get the recipe by the name "Ozzo Chicken" and Add it to favorites
  // Get the recipe by the name "salmon soup" and Add it to favorites
  // Get the recipe by the name "Lentil Bolognese" and Add it to favorites
  const salmonSoup = searchByRecipeName(recipes, 'salmon soup');
  favorites = addToFavorites(favorites, lentilBolognese);
  favorites = addToFavorites(favorites, ozzoChicken);
  favorites = addToFavorites(favorites, salmonSoup);

  // Task: 15.6
  // Delete the recipe "Lentil Bolognese" from the favorites
  favorites = deleteRecipe(favorites, 'Lentil Bolognese');

  // Task: 15.7
  // Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"
  recipes = editRecipe(recipes, 'rice bowl', 'Japanese Rice Bowl');

  // Task: 15.8
  // change "rice bowl" to be vegan
  recipes = toggleVeganStatus(recipes, 'Japanese Rice Bowl');

  // Task: 15.9
  // change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese
  recipes = editIngredientQuantity(recipes, 'Lentil Bolognese', 'lentil', 2);

  // Task: 15.10
  // call the function you implemented on task-4 to get the list of ingredients of "salmon soup"
  // console.log these Ingredients
  // TEST 1: it should print these ingredients: salmon, cream, milk, garlic
  let ingredientsOfSalmonSoup = getIngredientNames(recipes, 'salmon soup');
  //console.log(ingredientsOfSalmonSoup);

  // Task: 15.11
  // console.log all the vegan recipes
  // TEST 2: It should print the recipe Japanese Rice Bowl
  //console.dir(veganRecipe(recipes), {depth: null});


  // Task: 15.12
  // console.log all the recipes that contain the ingredient "lentil"
  // TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognese
  //console.dir(searchByIngredientName(recipes,'lentil'), {depth: null});

  // Task: 15.12
  // console.log the favorites array
  // TEST 4: It should print the recipes "salmon soup" & "Ozzo Chicken"
  //console.dir(favorites, {depth: null});

  // Task: 15.13
  // console.log the recipes array
  // TEST 5: It should print an array of 4 recipes that matches expectedRecipesArray defined below
  console.dir(recipes, {depth: null});
}


main();


