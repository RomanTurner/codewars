/**
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/


function stringy(size) {
  //Initialize an array and populate it with 1's and 0's, iterate based on size
    //convert array to string
    let arr = []  
    arr.push('1');
    for (let i = 0; arr.length <= size-1; i++){
        if (arr[i] == "1") {
          arr.push("0");
        } else arr.push("1");      
    }

    return console.log(arr.join(''));
}

// Another Answer

function stringy2(size) {
  var str = "";
  for (var i = 1; i <= size; i++) str += i % 2;
  return console.log(str);
}

let test = 12;
stringy(test);
stringy2(test);
