//How can you check if a value is partially matching with any of the elements of an Array?

const arr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0;i<arr.length;i++){
  console.table(arr[i]);
  if(arr[i] == 5){
    console.log(`Find element index ${i} : Value ${arr[i]}`);
    break;
  }
}

//using filter() method

const firstArray = [1,2,3,4,5,6,7,8,9,10];
const findVal = 5;

const matches = firstArray.filter(item => item === findVal);
console.log(matches); // [5]

