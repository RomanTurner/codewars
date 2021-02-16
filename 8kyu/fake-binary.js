/**
 * Given a string of digits, you should replace any digit below 5 with '0'
 *  and any digit 5 and above with '1'. Return the resulting string.
 */

function fakeBin(array) {
    let newarr = array.split("");
    
  // (newarr[element] >= 5) ?  newarr[element] = '1': newarr[element] = '0';
    
  for (element in newarr) {
    if (newarr[element] >= 5) {
      newarr[element] = "1";
    } else newarr[element] = "0";
  }
  console.log(newarr.join(""));
}

function fakeBin2(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
  


 

let test = '45385593107843568';
fakeBin(test);

console.log(test)