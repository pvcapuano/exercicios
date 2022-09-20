hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

let filtrado = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  .map((spaceship) => {
    return spaceship[0];
  });

let pendente = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

let maiusculo = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

console.log(filtrado);
console.log(pendente);
console.log(maiusculo);







