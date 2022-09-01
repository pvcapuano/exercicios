function chunks(number) {
  let text = "chunks-";

  let total = text.repeat(number).slice(0, -1);

  return total;
}

console.log(chunks(4));
console.log(chunks(1));
console.log(chunks(8));
console.log(chunks(2));
console.log(chunks(0));
