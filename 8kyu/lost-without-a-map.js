/* 
Given an array of integers, 
return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - 
it comes in very handy quite a lot so is a good 
one to know. 
*/

function maps(x) {
  return x.map((n) => n * 2);
}

/* ##################### */

function maps(array) {

    const newArr = array.map(function (number) {
        return number * 2;
        
});
    return test;
}

/* ##################### */

function maps2(array) {

    let newArr = [];
    let newNum = 0;
    for (let i = 0; i < array.length; i++) {
    
        newNum = array[i] * 2;
        newArr.push(newNum);
    }
    return newArr;

}


const test = [1, 2, 3];

console.log(maps2(test));