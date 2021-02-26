for (let i = 1; i <= 100; i++) {
  let strHolder = "";
  if (i % 3 == 0) strHolder += "Fizz";
  if (i % 5 == 0) strHolder += "Buzz";
  console.log(strHolder || i);
}
