//Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

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

// Destructure the 6th food element
const [, , , , , sixthFood] = favFood;
console.log(sixthFood); // Ice Cream


//For nested array
let numArray = [1,2,3,[4,5]];
let [,,,[,fivethNum]] = numArray;
console.log(fivethNum);