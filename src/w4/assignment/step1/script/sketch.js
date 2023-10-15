const bodies = [];
const bodyNum = 50;
const G = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  init();
  background(255);
}

function draw() {
  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0 + 1; j < bodies.length; j++) {}
  }
  bodies.forEach((each) => {});
  background(255);
  bodies.forEach((each) => {});
}

function mousePressed() {
  init();
}

function init() {
  bodies.length = 0;
  for (let i = 0; i < bodyNum; i++) {
    const x = random(width);
    const y = random(height);
    const circle = new Body(x, y);
    bodies.push(circle);
  }
}
