let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(0, 0.2);
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  acc = p5.Vector.random2D();
  acc.mult(2);
  // vel.add(acc);
  vel.limit(5);
  pos.add(vel);
  infiniteEdge();
  ellipse(pos.x, po.y, 2 * random2D);
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }

  //   if(pos.x <0) {
  // vel.x *= -1;
  // }else if (pos.x > width){
  //     vel.x *= -1;
  //   }
  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }
  // ellipse(pos.x, pos.y, 2 * radius);
}
