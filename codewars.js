/** The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output
Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output
["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

const testerArray = [
  [60, 12],
  [21, 21],
  [90, 8],
  [90, 9],
  [54, 9],
  [0, 0],
  [75, 11],
  [1, 1],
  [90, 7],
  [55, 10],
];

/** 
 * Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Input
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

Output
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
*/

function songDecoder(song) {
  console.log(song.replace(/(WUB)+/g, " ").trim());
  return song.replace(/(WUB)+/g, " ").trim();
}

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

/**In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers) {
  // ...
  let x = Math.max(...numbers.split(" "));
  let y = Math.min(...numbers.split(" "));
  return `${x} ${y}`;
}
/**Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  let x = 0;
  let y = 0;
  let string = str.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "x") x++;
    else if (string[i] === "o") y++;
  }
  if (x === y) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

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

/**
 * Task
You've just moved into a perfectly straight street with exactly n identical 
houses on either side of the road. Naturally, you would like to find out the
 house number of the people on the other side of the street. The street looks 
 something like this:

Street
1|   |6
3|   |4
5|   |2
Evens increase on the right; odds decrease on the left. 
House numbers start at 1 and increase without gaps. 
When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example
Given your house number address and length of street n, 
give the house number on the opposite side of the street.

overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8 */
function overTheRoad(address, n) {
  return n * 2 + 1 - address;
}
