// KEY credentials API from https://developer.edamam.com/

// Credential from another github
const APP_ID1 = 'ea1d37d5';
const APP_KEY1 = 'fd382a172ba8d6668c0430dc9c14a181';

// Credential from us
const APP_ID2 = '3f4f310f';
const APP_KEY2 = 'a3fd0d28cd6a2b5c664de96da482a7c1';

export const getRecipeURLWithId1 = (id: string) : string => {
  return `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID1}&app_key=${APP_KEY1}`
};

export const getRecipeURLWithId2 = (id: string) : string => {
  return `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID2}&app_key=${APP_KEY2}`
};