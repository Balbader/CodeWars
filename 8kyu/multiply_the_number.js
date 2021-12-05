const multiply = (number) => {
  let exp = number.toString().length;
  let power = Math.pow(5, exp);
  let result = 0;
  if (number < 0) {
    number *= -1;
    exp = number.toString().length;
    power = Math.pow(5, exp);
    result = number * power;
    console.log(result * -1);
  } else {
    const result = number * power;
    console.log(result);
  }
};

multiply(-3);
