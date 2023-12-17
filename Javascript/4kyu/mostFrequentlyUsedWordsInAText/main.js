const accepted = (char) => {
  return ((/^[A-Z]$/i.test(char)) || (/^[a-z]$/i.test(char)) || char == '\'')
}

const getWordCount = (str) => {

  const trimmedStr = str.trim();
  let count = 0;
  let i = 0;

  if (trimmedStr === '')
    return 0;

  while (trimmedStr[i]) {
    if (accepted(trimmedStr[i])) {
      count++;
      while (accepted(trimmedStr[i]))
        ++i;
    }
    else if (!accepted(trimmedStr[i])) {
      while (!accepted(trimmedStr[i]))
        ++i;
    }
    ++i;
  }

  return count;
}

// my(5), hello(4), you(3)
const str = "Hello ... world my, hello my you /how my are hello 38 you today? hello my name is my basil you"
const wordCount = getWordCount(str);
const top3 = new Array;

console.log(`Word Count : ${wordCount}`);
console.log(top3);
