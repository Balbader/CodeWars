/*
Just a simple sorting usage. Create a function that returns the elements of
the input-array / list sorted in lexicographical order.
*/

const sortMe = (arr) => {
	return arr.sort();
}

console.log(sortMe(['one', 'two', 'three']));

// Variation
const sortMeNow = (arr) => {
	return arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0 );
}

console.log(sortMeNow(['one', 'two', 'three']));
