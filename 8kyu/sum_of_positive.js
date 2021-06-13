const positiveSum = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] < 0)) {
            count += arr[i];
        } else {
            continue;
        }
    }
    return count;
}

console.log(positiveSum([1, -2, 7, 12]));