/** 
Create a function named divisors/Divisors that takes an integer n > 1 and returns
an array with all of the integer's divisors(except for 1 and the number itself), 
from smallest to largest. If the number is prime return the string '(integer) is prime' 
*/

function divisors(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}
