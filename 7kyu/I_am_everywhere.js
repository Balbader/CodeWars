/*
Your task is to make a function that takes the value of word and returns it
with an "i" at the beginning of the word. For example we get the word "Phone",
so we must return "iPhone". But we have a few rules:

• The word should not begin with the letter "I", for example Inspire.

• The number of vowels should not be greater than or equal to the number
of consonants, for example East or Peace. ("y" is considered a consonant)

• The first letter should not be lowercase, for example road.

• If the word does not meet the rules, we return "Invalid word".
*/


const bringTheI = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let iWord = '';
    let totVowels = 0;
    let totConsonants = 0;

    // Split the word into an array
    let tempArr = word.split('');


    // count the vowels
    tempArr.map((letter) => {
        if (vowels.includes(letter)) {
            totVowels += 1;
        } else if (!(vowels.includes(letter))) {
            totConsonants += 1;
        }
    });

    if (tempArr[0] === tempArr[0].toLowerCase()) {
        return "Invalid word";
    }

    if (totVowels >= totConsonants) {
        return "Invalid word";
    }

    if (tempArr[0] === "I") {
        return "Invalid word";
    }

    tempArr.unshift('i');
    iWord = tempArr.join('');
    return iWord;
}

console.log(bringTheI("Phone"));
