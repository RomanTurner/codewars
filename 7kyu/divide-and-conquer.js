/**Given a mixed array of number and string representations of integers, 
 * add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
 */

function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - +cur),
    0
  );
}

let testArr = ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"];
console.log(divCon(testArr));

var arr1 = [1, 2, 3, 4],
  arr2 = [2, 4],
  res = arr1.filter((item) => !arr2.includes(item));
console.log(res);

var filteredArray = array.filter(myCallBack);

function myCallBack(el) {
  return anotherOne.indexOf(el) < 0;
}
