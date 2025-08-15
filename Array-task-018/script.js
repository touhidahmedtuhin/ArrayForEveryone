//Can you give examples of sparse and dense arrays?

/* What Are Sparse and Dense Arrays?
     • 	Dense Array: Most or all elements are filled with actual values (non-zero or non-null).
    • 	Sparse Array: Most elements are empty, , , or zero—depending on context. 
*/

//Dense Array
const array =[1,2,3,4,5,6];

/* • 	Every index from  to  has a defined value.
   • 	No gaps or  entries.
 */

//Sparse Array
const sparseArray = [];
sparseArray[0] = 10;
sparseArray[5] = 50;
console.log(sparseArray);
/* • 	Indices 1 to 4  are missing.*/