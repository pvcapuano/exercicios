function invert(str) {
  const words = str.toLowerCase().split(" ");

  const invertedWords = words.map((word) => {
    word.split("").reverse().join("");
  });

  return invertedWords.join(" ");
}

console.log(invert("Lorem ipsum dolore sec avanti")); // merol muspi erolod ces itnava
console.log(invert("This is an apple")); // siht si na elppa
console.log(invert("May the force be with you")); // yam eht ecrof eb htiw uoy
console.log(invert("It's over nine thousand")); // ti s revo enin dnasuoht
