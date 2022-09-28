class Spaceship {
  constructor(name, maxCrew, maxVel) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxVel = maxVel;
    this.currentVelocity = 0;
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if (this.currentVelocity > this.maxVel) {
      console.log("velocidade ultrapassada!!");
    }
  }
}

class BattleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log("parando nave");
  }
}

class DiscoverySpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log("parando nave de descoberta");
  }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200);
let fenix = new BattleSpaceship("Fênix", 8, 240);

console.log(darwin);
console.log(fenix);

darwin.speedUp(210);
fenix.speedUp(230);
