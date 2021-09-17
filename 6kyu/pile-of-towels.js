function laundry(amount, dirtyTowels) {
  return dirtyTowels.slice(-amount).sort((a, b) => b.localeCompare(a));
}

function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // Weekly used towels is [2, 2, 1] array of non negative numbers;
  for (let i = 0; i < weeklyUsedTowels.length; i++) {
    let t = weeklyUsedTowels[i];
    let topOfPile = pileOfTowels.length - t;
    let freshTowels = laundry(t, pileOfTowels);
    pileOfTowels.splice(topOfPile, t, ...freshTowels);
  }

  return pileOfTowels;
}

const towels = ['blue', 'red', 'blue', 'red', 'blue'];
const used = [2, 1, 4, 2];

console.log(sortThePile(towels, used));
