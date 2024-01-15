// I created a new array where I can store the negative integers.
// I then created a for loop that runs through every element in the array.
// Once it gets to an element it multiplies it by -1 and pushes it to the new array. 
// Finally I returned the array.
function invert(array) {
    let newArr = [];
     for (let i = 0; i < array.length; i++) {
       newArr.push(array[i] * -1);
     }
   return newArr;
 }