function flatAndSort(arr) {
  const flatedNadSorted = arr.flat().sort();

  return flatedNadSorted;
}

console.log(
  flatAndSort([
    [1, 5, 3],
    [6, 19, 11],
    [47, 128, 5],
    [1, 93, 57, 42, 103],
  ])
);

console.log(
  flatAndSort([
    [1, 3],
    [4, 8],
    [7, 5],
    [2, 6],
  ])
);

console.log(flatAndSort([[], [], [], []]));

console.log(
  flatAndSort([
    [100, 50],
    [60, 100],
    [20, 100, 70],
    [10, 40, 80],
  ])
);
