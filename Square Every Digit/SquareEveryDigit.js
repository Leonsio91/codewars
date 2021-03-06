function squareDigits(num) {
  let numStr = num.toString();
  let numStrArr = numStr.split("");

  for (let i = 0; i < numStrArr.length; i++) {
  	numStrArr[i] *= numStrArr[i];
  }

  return parseInt(numStrArr.join(""), 10);
}

