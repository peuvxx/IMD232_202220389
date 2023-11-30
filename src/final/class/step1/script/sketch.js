function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(0);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

// let input, button, greeting;

// function setup() {
//   // 캔버스 생성하기
//   createCanvas(710, 400);
//   background('white');
//   input = createInput();
//   input.position(20, 65);

//   button = createButton('submit');
//   button.position(input.x + input.width, 65);
//   button.mousePressed(greet);

//   greeting = createElement('h2', 'what is your name?');
//   greeting.position(100, 100);

//   textAlign(CENTER);
//   textSize(50);
// }

// function greet() {
//   const name = input.value();
//   greeting.html('hello ' + name + '!');
//   input.value('');

//   for (let i = 0; i < 200; i++) {
//     push();
//     fill(random(255), 255, 255);
//     translate(random(width), random(height));
//     rotate(random(2 * PI));
//     text(name, 0, 0);

//     pop();
//   }
// }

// let rectWidth;

// function setup() {
//   createCanvas(720, 400);
//   noStroke();
//   background('white');
//   rectWidth = width / 4;
// }

// function draw() {
//   // draw()를 여기에 작성하여 키보드 입력을 기다리는 동안 반복되게 합니다.
// }

// function keyPressed() {
//   let keyIndex = -1;
//   if (key >= 'a' && key <= 'z') {
//     keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
//   }
//   if (keyIndex === -1) {
//     // 글자 자판이 아닐 경우, 화면을 비웁니다.
//     background('white');
//   } else {
//     // 글자 자판일 경우, 사각면을 채웁니다.
//     randFill_r = Math.floor(Math.random() * 255 + 1);
//     randFill_g = Math.floor(Math.random() * 255 + 1);
//     randFill_b = Math.floor(Math.random() * 255 + 1);
//     fill(randFill_r, randFill_g, randFill_b);
//     let x = map(keyIndex, 0, 25, 0, width - rectWidth);
//     rect(x, 0, rectWidth, height);
//   }
// }

// let num = 60;
// let mx = [];
// let my = [];

// function setup() {
//   createCanvas(720, 400);
//   noStroke();
//   fill(255, 153);
//   for (let i = 0; i < num; i++) {
//     mx.push(i);
//     my.push(i);
//   }
// }

// function draw() {
//   background(237, 34, 93);

//   // Cycle through the array, using a different entry on each frame.
//   // Using modulo (%) like this is faster than moving all the values over.
//   let which = frameCount % num;
//   mx[which] = mouseX;
//   my[which] = mouseY;

//   for (let i = 0; i < num; i++) {
//     // which+1 is the smallest (the oldest in the array)
//     let index = (which + 1 + i) % num;
//     ellipse(mx[index], my[index], i, i);
//   }
// }
