class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    distance = constrain(distance, 5, 25);

    let strength = (this.mass * mover.mass) / distance ** 2;
    if (distance < 20) {
      dirVector.setMag(-strength);
    } else {
      let strength = (this.mass * mover.mass) / distance ** 2;
      dirVector.setMag(strength);
    }
    return dirVector;
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
