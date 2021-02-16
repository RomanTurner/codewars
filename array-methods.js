//forEach
//does not return new array
const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
  { name: "anna", age: 35, position: "senior developer", id: 4, salary: 500 },
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

//forEach requires a callback function.

//people.forEach(showPerson);
//people.forEach(function (item) {
//  console.log(item.position)});

/**
 * Map
 * does return a new array
 * does not change size of original array
 * uses values from original array when making new one
 * functions by default return undefined
 */

const ages = people.map(function (person) {
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1> ${person.name}</h1>`;
});

//document.body.innerHTML = names.join('');

/**
 * filter
 * does return new array
 */

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return (
    person.position === "senior developer" || person.position === "developer"
  );
});

/**
 * find
 * returns single instance -- (in this case an object)
 * returns first match, if no match it returns undefined
 * great for getting unique value
 */
/**const names2 = ['bob', 'peter', 'susy'];
console.log(
  names2.find(function (name) {
    return name === "bob";
  })
);
*/

const person = people.find(function (person) {
  return person.id === 3;
});

//console.log(person.name);

//differences between find and filter for simple solo instances

const person2 = people.filter(function (person) {
  return person.id === 3;
});

//console.log(person2[0].name);

/** Reduce Method
 *
 * iterates, callback function
 * reduces to a single value- number, array, object
 * 1 parameter ('acc') - total of all calculations - The value we will return
 * 2 parameter ('curr') -current iteration/value
 */

const total = people.reduce(function (acc, currItem) {
  `total ${acc}`;
  `current money: ${currItem.salary}`;
  acc += currItem.salary;
  return acc;
}, 0);

//Math
//Standard built-in objects

//const number = 4.1222;
//const result = Math.floor(number);

//const number = 4.1222;
//const result = Math.ceil(number);

//const number = 81;
//const result = Math.sqrt(number);

//const result = Math.PI

//const result = Math.min(4, 5, 6, 8, 3);
//const result2 = Math.max(4, 5, 6, 8, 3);

//const result = Math.floor(Math.random() * 10 + 1);
