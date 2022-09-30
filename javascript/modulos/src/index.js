/* const Planet = require("./planet");
const solarSystem = require("./solar_system");
const moment = require("moment");
import armamentKind from "./armaments";
import Spaceship from "./spaceship";

const earth = new Planet("Terra", 500);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new Planet("Marte", 800));

console.log(solarSystem);

console.log(moment().format("h:m"));

const spaceship = new Spaceship("USS", "PV", armamentKind.laser);
console.log(spaceship); */

let komodoShip = {
  name: "Komodo",
  velocity: 80,
  acceleration: 0,
};

const velocityAfter2Seconds = (velocity, acceleration) => {
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2;
        console.log(`Nova velocidade: ${velocity}`);
        resolve(velocity);
      } else {
        console.log("Aceleração inválida!");
        reject("Não possui aceleração!");
      }
    }, 1000);
  });
};

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration);

console.log("Execução de Promises!");
