const highestRank = (arr) => {
  let temp = [];
  let count = 0;
  let finalCount = 0;
  let i = 0;
  let j = 0;
  temp[0] = arr[0];
  while (i < arr.length) {
    while (j < arr.length) {
      if (temp[j] === arr[i]) {
        count++;
      }
      j++;
    }
    i++;
  }
  console.log(count);
};

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
