let aDrunkenObj;
let trace = [];
let path = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  aDrunkenObj = new Drunken(width / 2, height / 2);

  background('white');
}

function draw() {
  const randomForce = p5.Vector.random2D();
  randomForce.mult(1);
  aDrunkenObj.applyForce(randomForce);
  aDrunkenObj.update();
  aDrunkenObj.infiniteEdge();

  path.push([aDrunkenObj.pos.x, aDrunkenObj.pos.y]);
  if (aDrunkenObj.isCrossed) {
    trace.push(path);
    path = [];
  }

  if (aDrunkenObj.isCrossed) {
    background('red');
  } else {
    background('white');
  }

  beginshape();
  for (let idx = 0; idx < trace.length; idx++) {
    const point = trace[idx];
    for(let pointIdx=0; pointIdx< aPath.length; pointIdx)
    const point = aPath[pointIdx];
    vertex(point[0], point[1]);
  }
  endshape();

  aDrunkenObj.display();

  console.log(trace);
}
