/*
* Description:
    The input is a string str of digits. Cut the string into chunks (a chunk here is a 
    substring of the initial string) of size sz(ignore the last chunk if its size is less than sz).
    If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
    reverse that chunk; otherwise rotate it to the left by one position.Put together these modified chunks and return the result as a string.
* If: 
     sz is <= 0 or if str is empty return ""
     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
        
*Vars: 
     splitTemp: Temporary holder for the newly split array of strings. 
     chunks: The 'chunks' of the initial array, size depenedent on sz parameter.
     count: Helper variable to make sure we don't add any remainder chunks if str.length is not divisible by sz.

* Helpers:
    cuber: Cubes elements of array.
    cubeAndSum: Uses cuber to cube elements and then sums them.
    rotate: Takes first element from array and makes it the last element. 
     
* Examples:
     let s = "733049910872815764";
     revrot(s, 5) # => => "330479108928157"
     
     revrot("123456987654", 6)  # => =>  "234561876549"
     revrot("123456987653", 6)  # => =>  "234561356789"
     revrot("66443875", 4)  # => =>  "44668753"
     revrot("66443875", 8)  # => =>  "64438756"
     revrot("664438769", 8)  # => =>  "67834466"
     revrot("123456779", 8)  # => =>  "23456771"

* Returns: 
    A new string. 
*/


function revrot(str, sz) {
  if (sz < 1 || sz > str.length) return "";

  const cubeAndSum = (arr) => cuber(arr).reduce((acc, curr) => acc + curr);

  const cuber = (arr) => arr.map((el) => el ** 3);

  const rotate = (arr) => {
    let temp = arr.shift();
    arr.push(temp);
  };

  const flaten = (arr) => arr.reduce((acc, val) => acc.concat(val), []);

  let splitTemp = str.split("");

  let chunks = [];

  let count = str.length % sz;

  for (let i = 0; i < str.length - count; i += sz) {
    chunks.push(splitTemp.splice(0, sz));
  }

  const cubedAndSummedChunks = chunks.map((chunk) => cubeAndSum(chunk));

  for (let i = 0; i < chunks.length; i++) {
    cubedAndSummedChunks[i] % 2 == 0 ? chunks[i].reverse() : rotate(chunks[i]);
  }

  return flaten(chunks).join("");
}
