/* 
Given a non-empty array of integers,
return the result of multiplying the 
values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 
*/

function grow(array) {
    
    return array.reduce(function (acc, currItem) {
        acc *= currItem;
        return acc;
    }
    )
}

const grow = (x) => x.reduce((a, b) => a * b);

const test = [4, 1, 1, 1, 4];

console.log(grow(test));



