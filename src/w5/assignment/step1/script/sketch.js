const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep = 15;
let radius = 17.5;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      let x = ((r + 0.7) * width) / (rNum + 0.3);
      let y = ((c + 0.7) * height) / (cNum + 0.3);
      //stroke((360 / rNum) * r, (360 / cNum) * c, 30);
      if (r % 2 == 0) {
        ellipse(x, y, 35);
      } else {
        ellipse(x, y, 35);
      }

      for (let angle = 0; angle < 360; angle += angleStep) {
        let X = x + radius * cos(radians(angle));
        let Y = y + radius * sin(radians(angle));

        push();
        translate(x, y);
        rotate();
        line(0, 0, radius, 0);
        pop();
      }
    }
  }

  angleBegin += angleBeginVel;
}

function windowResized() {
  resizeCanvas(400, 400);
}
