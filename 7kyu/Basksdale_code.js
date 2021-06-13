const decode = (str) => {
    str.split('');
    const newStr = [];
    const temp = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '0') {
            newStr[i] = '5';
            temp.push(newStr[i]);
        }
        if (str[i] == '1') {
            newStr[i] = '9';
            temp.push(newStr[i]);
        }
        if (str[i] == '2') {
            newStr[i] = '8';
            temp.push(newStr[i]);
        }
        if (str[i] == '3') {
            newStr[i] = '7';
            temp.push(newStr[i]);
        }
        if (str[i] == '4') {
            newStr[i] = '6';
            temp.push(newStr[i]);
        }
        if (str[i] == '5') {
            newStr[i] = '0';
            temp.push(newStr[i]);
        }
        if (str[i] == '6') {
            newStr[i] = '4';
            temp.push(newStr[i]);
        }
        if (str[i] == '7') {
            newStr[i] = '3';
            temp.push(newStr[i]);
        }
        if (str[i] == '8') {
            newStr[i] = '2';
            temp.push(newStr[i]);
        }
        if (str[i] == '9') {
            newStr[i] = '1';
            temp.push(newStr[i]);
        }
    }
    return (temp.join(''));
}

console.log(decode('4103432323'));

// Variation
function decode(string) {
    return string.split("").map(function(value) {
      return value==5 ? 0 : value==0 ? 5 : 10 - value;
    }).join("");
  }

// Variation
const decode = s => [...s].map(e => '5987604321'[+e]).join``