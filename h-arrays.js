function filterHomogenous(arrays) {
  let filterArray = [];
  
    for (let i; i < arrays.length; i++) {
        if (arrays[i].length != 0) {
          filterArray = arrays[i].map((element) => element === arrays[i[0]])
        }
    }
  
  return filterArray;
}

//if (emptyFilter.every((i) => i === arr[0])) {
//}

const testGrid = [[123, 234, 432], ["", "abc"], [""], ["", 1], ["", "1"], []];
console.log(filterHomogenous(testGrid));
