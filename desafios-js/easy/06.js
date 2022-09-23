function smallerPairs(pair) {
  const result = [];

  for (let x = 0; x <= pair[0]; x++) {
    for (let y = 0; y <= pair[1]; y++) {
      result.push([x, y]);
    }
  }
  return result;
}

console.log(smallerPairs([2, 2]));
console.log(smallerPairs([2, 7]));
console.log(smallerPairs([-3, -3]));
console.log(smallerPairs([7, 6]));
