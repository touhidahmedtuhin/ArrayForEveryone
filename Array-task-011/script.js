//Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArray.length; i++) {
  console.log( numArray[i]);
  if (numArray[i] === 5) {
    console.log(`Found five at index: ${i}`);
    numArray.length = 6;
    console.log("Resized array:", numArray);
    break;
  }
};