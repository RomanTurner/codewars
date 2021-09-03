function cakes(recipe, available) {
  let recipeMap = new Map(Object.entries(recipe));
  let pantry = new Map(Object.entries(available));
  let result = 0;
  while (true) {
    for (let [key, value] of recipeMap) {
      if (!pantry.has(key)) return result;
      let ingredientValue = pantry.get(key);
      if (ingredientValue - value <= 0) return result;
      let newValue = ingredientValue - value;
      pantry.set(key, newValue);
    }
    result++;
  }
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
