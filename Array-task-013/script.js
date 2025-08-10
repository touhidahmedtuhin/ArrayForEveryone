//Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?


// Create an array of 10 elements
let arr = [1,2,3,4,5,6,7,8,9,10];

// 1. Using length property
arr.length = 0;

// 2. Using pop() method
arr = [1,2,3,4,5,6,7,8,9,10];
while(arr.length) arr.pop();

// 3. Using shift() method
arr = [1,2,3,4,5,6,7,8,9,10];
while(arr.length) arr.shift();

// 4. Setting the array to []
arr = [1,2,3,4,5,6,7,8,9,10];
arr = [];

// 5. Using splice() method
arr = [1,2,3,4,5,6,7,8,9,10];
arr.splice(0, arr.length);

// Most efficient: Setting arr.length = 0 or arr = [] is most efficient because they clear the array in constant time. pop(), shift(), and splice() are less efficient for large arrays as they involve element-by-element operations.