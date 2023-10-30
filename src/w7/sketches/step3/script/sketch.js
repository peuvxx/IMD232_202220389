let dom;
let htmllDom;
let canvasW;
let canvasH;

function setup() {
  let dom = select('#hereGoesMyP5Sketch');
  console.log(dom);
  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('리사이즈됩니다.');
}
