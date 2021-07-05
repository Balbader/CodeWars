/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

const isSortedAndHow = arr => {
    let prev = arr[0];
    let next = arr[1];
    if (arr[0] == arr[1]) {
        return 'no';
    }

    let ascending = next > prev;
    for (let i = 2; i < arr.length; i++) {
        if (ascending && arr[i] < prev) {
            return 'no';
        }
        if (!ascending && arr[i] > prev) {
            return 'no';
        }
        prev = arr[i];
    }

    return ascending ? 'yes, ascending' : 'yes, descending';
}
