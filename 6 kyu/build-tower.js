/**
 * Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *
for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

I noticed that with each level the amount of stars is just
the level number with the loop increment. 

naive attempt:

function towerBuilder(nFloors) {
  // build here
    let tower = [];
    let space = " ";
    let star = "*";

    for (i = 0; i < nFloors; i++){
        let padding = "";
        let stars = "";
        let amountOfStars = nFloors - stars.length -i;
        
        while (amountOfStars > 0) {
            stars += star;
            amountOfStars--;
        }

        let amountOfSpace = nFloors - stars.length;
        while (amountOfSpace > 0) {
            padding += space;
            amountOfSpace--;
        }
        debugger;
        
        tower.unshift(padding);
        tower.unshift(stars);
        tower.unshift(padding);
        tower.join('');
    }


   console.log(tower);
}
*/
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    console.log(spaces + "*".repeat(k + k + 1) + spaces);
  });
}

