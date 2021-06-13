/* Create a method take that accepts a list/array and a number n,
 * and returns a list/array array of the first n elements from the
 * list/array.*/
const arr = ['1', '2', '3', '4', '5', '6'];
const take = (arr, n) => {
    return arr.slice(0, n);
}

const nArr = take(arr, 4);
console.log(nArr);

