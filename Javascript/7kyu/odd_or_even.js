/*
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).
*/

const oddOrEven = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count += array[i];
    }
    return count % 2 === 0 ? "even" : "odd";
}

// Using reduce()
function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

// Using reduce()
const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';