
const isASCII = (str) => {
  return /^[\x00-\x7F]*$/.test(str);
}

const accepted = (char) => {
  return ((/^[A-Z]$/i.test(char)) || (/^[a-z]$/i.test(char)) || char == '\'')
}

const getWordCount = (str) => {

  const trimmedStr = str.trim();

  if (trimmedStr === '')
    return 0;

  let count = 0;

  for (let i = 0; i < str.length; ++i) {
    if (accepted(str[i])) {
      count++;
      while (accepted(str[i]))
        ++i;
    }
    while (!accepted(str[i])) {
      ++i;
    }
  }

  // const words = trimmedStr.split(/\s+/);

  return count;
  // return words.length;
}

const str = "Hello ... world, /how are 38 you today?"
const wordCount = getWordCount(str);
console.log(`Word Count : ${wordCount}`);

const words = str.split(/\s+/);
console.log(words);
