function infected(s) {
  let total = [...s].filter(el => el !== 'X').join('').length
  
  let world = s.split('X');
  let infected = 0
    world.forEach((el) => { if (el.includes('1')) {infected += el.length}})

  return 100 * infected / total;
}

let test = '01000000X000X011X0X';
console.log(infected(test))