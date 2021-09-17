function persistence(num) {
  let numStr = num.toString();
  let count = 0;
   
  while (numStr.length > 1) {
    numStr = numStr
      .split('')
      .reduce((acc, curr) => (acc *= curr))
        .toString();

    count++;
  }
    
  return count;
}

console.log(persistence(39));
