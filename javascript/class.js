class Captain {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}

class Spaceship {
  constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.captain = new Captain(captainName, captainAge, captainFlightHours);
  }
}

let spaceship = new Spaceship("teste", 13, "PV", 45, 15000);

console.log(spaceship);
