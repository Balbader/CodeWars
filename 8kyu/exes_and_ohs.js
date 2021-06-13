/* Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive.
 * The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

let countX = 0;
let countO = 0;
let i = 0;
const XO = (str) => {
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'x' || str[i] === 'X') 
            countX += 1;
        if (str[i] === 'o' || str[i] === 'O') 
            countO += 1;
    }
    if (countX === countO) {
        countO = 0;
        countX = 0;
        return true;
    }
    if ((countX == 0 && countO > 0) || (countX > 0 && countO == 0)) {
        countO = 0;
        countX = 0;
        return false;
    }
    if (countX !== countO) {
        countO = 0;
        countX = 0;
        return false;
    }
    else
        return true;
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));
