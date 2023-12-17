const accepted = (char) => {
  return ((/^[A-Z]$/i.test(char)) || (/^[a-z]$/i.test(char)) || char == '\'')
}

const getWordCount = (str) => {

  const trimmedStr = str.trim();

  if (trimmedStr === '')
    return 0;

  let count = 0;
  let i = 0;
  while (str[i]) {

    if (accepted(str[i])) {
      count++;
      while (accepted(str[i]))
        ++i;
    }

    else if (!accepted(str[i])) {
      while (!accepted(str[i]))
        ++i;
    }

    ++i;
  }

  return count;
}


const str = "Hello ... world my, hello myhyou /how my are hello 38 you today? hello my name is my basil you"
const wordCount = getWordCount(str);
console.log(`Word Count : ${wordCount}`);
