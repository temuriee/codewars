function betterThanAverage(classPoints, yourPoints) {
  // Your code here

  if (classPoints / classPoints.length <= yourPoints) {
    return false;
  } else {
    return true;
  }
}
betterThanAverage([50, 50, 120], 20);

const test = [50, 50, 50];
console.log(test);
const sum = test.reduce((acc, current) => acc + current, 0);
console.log(sum);
