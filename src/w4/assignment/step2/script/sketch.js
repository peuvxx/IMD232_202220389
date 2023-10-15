let mover;
let gravity;
let mVec;
let pMVec;
let throwingForcehim = 6;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 50);
  gravity = createVector(1, -0.1);

  mVec = createVector();
  pMVec = createVector();

  background(255);
}

function draw() {
  background(255);
  mover.applyGravity(gravity);
  mover.update();
  mover.checkEdges();
  mover.display();
}

function mouseMoved() {}

function mousePressed() {}

function mouseDragged() {
  const throwingForce = createVector(mouseX - pmouseX, mouseY - pmouseY);
  throwingForce.mult(throwingForcehim);
  mover.applyForce(throwingForce);
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  mover.applyForce(throwingForce);
}
