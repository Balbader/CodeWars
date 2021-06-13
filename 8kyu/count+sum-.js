/*
Given an array of integers.
Return an array, where the first element is the count of positives numbers and
the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
*/

const countPositivesSumNegatives = (array) => {
    let posCount = 0;
    let negSum = 0;
    const res = [];
    if (array == null || array.length < 1) {
         return [];
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            posCount++;
        }
        if (array[i] < 0) {
            negSum += array[i];
        }
    }
    res.push(posCount, negSum);
    return res;
}

console.log(countPositivesSumNegatives());