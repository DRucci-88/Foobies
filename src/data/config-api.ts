// KEY credentials API from https://developer.edamam.com/

// Credential from another github
const APP_ID = 'ea1d37d5';
const APP_KEY = 'fd382a172ba8d6668c0430dc9c14a181';

// Credential from us
// const APP_ID = '3f4f310f';
// const APP_KEY = 'a3fd0d28cd6a2b5c664de96da482a7c1';

export const getRecipeURLWithId = (id: string) : string => {
  return `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;
};

// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=3f4f310f&app_key=a3fd0d28cd6a2b5c664de96da482a7c1
export const getListRecipeWithSearch = (name: string) : string => {
  return `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${APP_ID}&app_key=${APP_KEY}`;
}

// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=3f4f310f&app_key=a3fd0d28cd6a2b5c664de96da482a7c1&diet=high-protein&cuisineType=South%20East%20Asian&mealType=Breakfast
export const getListRecipeWithQuery = (ingredients: string[], diet: string = "", mealType: string = "", cuisineType: string = "") => {

  console.log(ingredients)
  console.log(diet)
  console.log(mealType)
  console.log(cuisineType)

  let tempIngredient = "";
  // for(let temp of ingredients) tempIngredient.concat(temp+" ");
  for(let i = 0; i < ingredients.length; i++) tempIngredient.concat(ingredients[i]+" ");

  let url = "https://api.edamam.com/api/recipes/v2?type=public&q="+tempIngredient+"app_id="+APP_ID+"&app_key="+APP_KEY;

  if(diet!=="") url.concat(diet)
  if(mealType!=="") url.concat(mealType)
  if(cuisineType!=="") url.concat(cuisineType)

  return url;
}

