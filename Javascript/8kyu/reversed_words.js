/*
Complete the solution so that it reverses all of the words within the string passed in.
*/
const reverseWords = (str) => {
    const strArr = str.split(' ');
    const reversedStr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        reversedStr.push(strArr[i]);
    }
    console.log(reversedStr.join(' '));
}

reverseWords('Hello World, my name is balou');
