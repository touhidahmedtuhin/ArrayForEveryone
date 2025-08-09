//Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

const favFood = [
  "Pizza",
  "Sushi",
  "Burger",
  "Pasta",
  "Tacos",
  "Ice Cream",
  "Steak",
  "Salad",
  "Ramen",
  "Curry"
];

const [a,b,...rest] =favFood;
console.log(rest);
console.table(rest);