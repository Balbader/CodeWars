const firstNonConsecutive = (arr) => {
    let count = arr[0];
    let nonConsecutive;
    for (let i = 1; i < arr.length; i++) {
        if ((count + 1) !== arr[i]) {
            nonConsecutive = arr[i];
            break;
        }
    count++;
    }
    return nonConsecutive !== undefined ? nonConsecutive : null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));