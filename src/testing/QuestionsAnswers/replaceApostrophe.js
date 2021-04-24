const strReplace = function (string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '&' && string[i + 1] === '#') {
      newStr += "'";
      i += 5;
    } else {
      newStr += string[i];
    }
  }
  return newStr;
};

export default strReplace