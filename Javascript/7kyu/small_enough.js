/*
You will be given an array and a limit value.
You must check that all values in the array are below or equal to the limit
value. If they are, return true. Else, return false.
You can assume all values in the array are numbers.
*/

const smallEnough = (array, limit) => {
    const temp = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= limit) {
            temp.push(array[i]);
        }
    }
    if (temp.length === array.length) {
        return true;
    }
    return false;
}

// Variation
function smallEnough(a, limit) {
    return Math.max(...a) <= limit
}

// Variation
smallEnough = (a, l) => a.every(e => e <= l)

// Variation
function smallEnough(array, limit) {
    return array.filter((value) => value > limit).length > 0 ? false : true;
}