function reverse(arr) {
  let newArr = [];
  for (let i = arr.length; i > 0; i--) {
    newArr.push(arr[i - 1]);
  }
  return newArr;
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse(["Oh", "Hi", "PV"]));
console.log(reverse([false, true, true, true]));
console.log(reverse(["Its", "Not", true, 0]));
