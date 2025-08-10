// What is the difference between the slice() and splice() methods?

const arr = [1, 2, 3, 4, 5];

const sliced = arr.slice(1, 3); // [2, 3], arr remains unchanged
const spliced = arr.splice(1, 2); // [2, 3], arr is now [1, 4, 5]


/* slice() returns a shallow copy of a portion of an array into a new array, without modifying the original array.


splice() changes the contents of an array by removing, replacing, or adding elements in place, and returns the removed elements. */