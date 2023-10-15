class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass ** 0.5 * 10;
    this.gravity = createVector(0, 10);
  }

  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }

  applyGravity(gravity) {
    let f_gravity = p5.Vector.mult(gravity, this.mass);
    this.applyForce(this.gravity);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.8;
    if (this.pos.x - this.radius < 0) {
      this.pos.x = this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.x + this.radius > width) {
      this.pos.x = width - this.radius;
      this.vel.x *= bounce;
    }
    if (this.pos.y + this.radius > height) {
      this.pos.y = height - this.radius;
      this.vel.y *= bounce;

      const minSpeed = 0.1;
      if (this.vel.mag() < minSpeed) {
        this.vel.mult(0);
      }
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
