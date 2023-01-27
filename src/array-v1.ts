let result = [];
let singleResult: number | undefined = 0;
let boolResult = false;

// note - in const array you can't reassign to any value. but can change item inside array
// An array declared with const has Block Scope.
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// The join() method also joins all array elements into a string.
// The pop() method return last element and removes from an array:
// The push() method insert element to an array at last:
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// The concat() method creates a new array by merging (concatenating) existing arrays:
// The splice() method Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// The slice() method slices out a piece of an array.

const numbers = new Array(45, 4, 9, 16, 25);
{
  const numbers = new Array(99, 4, 9, 16, 25);
  console.log(numbers[0]);
}
console.log(numbers[0]);

// for each method
numbers.forEach((value, index, main_arr) => {
  console.log({ key: index, data: value });
  //console.log(main_arr[index]);
});

// filter method
result = numbers.filter((x, i) => {
  return x > 15;
});
console.log("filter example: \n" + result);

// find
singleResult = numbers.find((v, i) => {
  return v > 18;
});
console.log("find example: \n" + singleResult);

// reduce method
singleResult = numbers.reduce((total, v, i, _) => {
  return total + v;
});
console.log("reduce example: \n" + singleResult);

// every - should pass all element of array
boolResult = numbers.every((v, i) => {
  return v > 18;
});
console.log("every example: \n" + boolResult);

// some - should pass some element of array or linq any
boolResult = numbers.some((v, i) => {
  return v > 18;
});
console.log("some example: \n" + boolResult);

// concat
result = numbers.concat([3, 4, 78, 96, 43]);
console.log("concat example:");
console.log("array: " + result + "\n");

// The splice() method Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
var a1 = result.splice(0, 3);
console.log("splice example1:");
console.log("deleted items: " + a1);
console.log("items after deletion: " + result);

var a2 = result.splice(2, 1, 989);
console.log("splice example2:");
console.log("deleted items: " + a2);
console.log("items after deletion: " + result);

// The slice() method slices out a piece of an array.
var a3 = result.slice(0, 2);
console.log("slice example2:");
console.log("selected items: " + a3);
console.log("items after slice: " + result);

// sort and reserve
console.log("reverse of array: " + result.reverse());
console.log(
  "sort of array: " +
    result.sort((a, b) => {
      return a - b;
    })
);

// custom method
function myArrayMax(arr: number[]) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMax(result));
