/*
* Description:

    returns true / True if every element in an array is an integer or a float with no decimals.
    returns true / True if array is empty.
    returns false / False for every other input.

*Tip: 
    The tests really false for EVERY other input. You have to think about 
    all the availible inputs: NaN, Null, Undefined, -1, 123.3, "y" etc..
        
* Examples:

    isIntArray([]) # => => true
    isIntArray([1, 2, 3, 4]) # => => true
    isIntArray([1, 2, 3, NaN]) # => => false

* Returns: 
    Boolean 
*/

function isIntArray(arr) {
    if (!Array.isArray(arr)) {
      return false;
    }
    for (let i = 0; i < arr.length; i++){
        if (Math.floor(arr[i]) !== arr[i]) { return false };
    }
    return true; 
}


