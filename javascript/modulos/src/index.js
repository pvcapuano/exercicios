const Planet = require("./planet");
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
console.log(spaceship);
