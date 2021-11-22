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