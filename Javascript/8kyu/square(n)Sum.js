/*

Complete the square sum function so that it squares each number passed into
it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

const squareSum = arrOfNumbers => {
    const arrOfNumbersSquared = [];

    // Square all array numbers
    arrOfNumbers.forEach((number) => {
        arrOfNumbersSquared.push(Math.pow(number, 2));
    });

    // Sum of all numbers squared
    let sumOfNbrs = 0;
    arrOfNumbersSquared.map(arrNumber => {
        sumOfNbrs += arrNumber;
    });

    return sumOfNbrs;
}

squareSum([1, 2, 2]);
