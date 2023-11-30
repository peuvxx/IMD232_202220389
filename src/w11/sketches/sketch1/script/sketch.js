let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);

  cam.hide();
  console.log(cam);
  // noLoop();
}

function draw() {
  background('white');
  // image(cam, 0, 0, width, (cam.width/width) * height);
  image(cam, 0, 0, width, (cam.hieght / cam.width) * width);
  loadPixels();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      const idx = cam.width * y + x;
      const color = cam.pixels[idx];
      const b = brightness(color);
    }
  }
  updatePixels();
}
