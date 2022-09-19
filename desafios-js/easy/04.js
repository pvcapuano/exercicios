function compareCounts(count, index, array) {
  return index !== 0 ? count === array[index - 1] : true;
}

function checkBalance(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
  }

  return Object.values(charCount).every(compareCounts);
}

console.log(checkBalance("This is tree")); //true
console.log(checkBalance("ssd")); //false
console.log(checkBalance("lorem ipsum")); //false
console.log(checkBalance("qqwweerrttyy")); //true
