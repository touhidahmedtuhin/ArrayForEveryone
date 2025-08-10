//Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified. 

//immutable way 
// const fruits = ["banana", "grape","apple","pineapple", "orange"];
// const sortFruits = fruits.toSorted();
// console.log(sortFruits);


//regular way
// const fruits2 = ["banana", "grape","apple","pineapple", "orange"];
// const sort = fruits2.toSorted();
// console.log(sort)
// console.log(fruits2);

//Descending order 
const fruits = ["banana", "grape","apple","pineapple", "orange"];
const descending = fruits.toSorted((a, b) => b.localeCompare(a));
console.log(descending);

