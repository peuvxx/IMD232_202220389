let pos;
let vel;
let acc;
let radius = 20;
let cv;
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = p5.Vector.random2D();
  vel.mult(0);
  acc = createVector(0, 0.01);

  console.log(vel.mag());
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  vel.rotate(random(TAU));
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('black');
  line(pos.x, pos.y, mv.x, mv.y);

  mv.sub(cv);
  translate(cv.x, cv.y);
  stroke('red');
}

function update() {
  vel.limit(20);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }

  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  ellipse(cv.x, cv.y, 2 * radius);
}
