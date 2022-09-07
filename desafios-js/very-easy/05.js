function highestLetter(str) {
  const lowerCase = str.toLowerCase().split("").sort();

  const compare = lowerCase.pop();

  return compare;
}

console.log(highestLetter("Lorem ipsum dolore sec avant"));
console.log(highestLetter("Hello"));
console.log(highestLetter("May the force be with you"));
console.log(highestLetter("It s over nine thousand"));
