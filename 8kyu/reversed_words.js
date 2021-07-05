/*
Complete the solution so that it reverses all of the words within the string passed in.
*/
const reverseWords = (str) => {
    const newStr = str.split(' ');
    const finalStr = [];
    for (let i = newStr.length - 1; i >= 0; i--) {
        finalStr.push(newStr[i]);
    }
    console.log(finalStr.join(' '));
}

reverseWords('Hello World, my name is balou');
