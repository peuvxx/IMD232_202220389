function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  //루프로 인해 아래서 적용한 설정이 타고 넘어오는 것을 방지하기 위해 초기화
  fill(255);
  rectMode(CORNER);
  colorMode(RGB);
  stroke(0);
  strokeWeight(1);

  ellipse(60, 60, 60, 60);
  ellipse(60, 60, 50, 50);
  stroke(0);

  //모니터 기둥
  rect(165, 210, 13, 30);
  //책상
  rect(30, 230, 10, 180);
  rect(280, 230, 10, 180);
  rect(20, 230, 280, 15);
  //모니터 화면
  rect(120, 150, 100, 60);
  rect(123, 152, 94, 53);

  //컵
  rect(240, 190, 20, 40);
  //컵 내용물
  fill(200, 200, 200);
  rect(242.4, 198, 15, 30);

  //의자
  rect(111, 300, 8, 40);
  rect(80, 340, 70, 5);
  rect(80, 340, 5, 20);
  rect(145, 340, 5, 20);
  rect(112.3, 340, 5, 20);
  //의자 다리 바퀴
  ellipse(82, 364, 10, 10);
  ellipse(115, 364, 10, 10);
  ellipse(147.5, 364, 10, 10);
  //의자 머리 기둥
  rect(100, 180, 5, 30);
  rect(123, 180, 5, 30);
  // 의자 몸
  rect(74, 200, 80, 90, 5, 5, 0, 0);
  rect(100, 295, 30, 10, 0, 0, 7, 7);
  rect(74, 290, 80, 7, 0, 0, 3, 3);
  rect(90, 160, 50, 30, 5, 5, 5, 5);

  // ellipse(100, 100, 50, 50);
  // rect(100, 100, 50, 50);
  // ellipse(200, 100, 50, 25);
  // rect(200, 100, 25, 50);

  // rectMode(CENTER);
  // rect(300, 100, 50, 50);
  // ellipse(300, 100, 50, 50);
  // rect(400, 100, 50, 25);
  // ellipse(400, 100, 25, 50);

  // fill(255, 127, 0);
  // ellipse(100, 200, 50);
  // fill('#00ee40');
  // circle(200, 200, 50);
  // colorMode(HSL);
  // fill(200, 100, 50);
  // rect(300, 200, 50);
  // noStroke();
  // square(400, 200, 50);

  // rect(100, 300, 50, 50, 10);
  // rect(200, 300, 50, 50, 5, 10, 15, 20);

  // stroke(0);
  // line(100, 400, 150, 450);

  // stroke('royalblue');
  // line(200, 400, 250, 400);
  // stroke('salmon');
  // strokeWeight(5);
  // line(250, 400, 250, 450);
  // stroke('slateBlue');
  // strokeWeight(10);
  // line(250, 450, 200, 450);

  // stroke(50, 100, 10);
  // strokeWeight(2);
  // point(300, 400);
  // point(310, 400);
  // point(320, 400);
  // point(330, 400);
  // point(340, 400);
  // point(350, 400);
  // stroke(50, 100, 20);
  // strokeWeight(3);
  // point(300, 410);
  // point(310, 410);
  // point(320, 410);
  // point(330, 410);
  // point(340, 410);
  // point(350, 410);
  // stroke(50, 100, 30);
  // strokeWeight(4);
  // point(300, 420);
  // point(310, 420);
  // point(320, 420);
  // point(330, 420);
  // point(340, 420);
  // point(350, 420);
  // stroke(50, 100, 40);
  // strokeWeight(5);
  // point(300, 430);
  // point(310, 430);
  // point(320, 430);
  // point(330, 430);
  // point(340, 430);
  // point(350, 430);
  // stroke(50, 100, 50);
  // strokeWeight(6);
  // point(300, 440);
  // point(310, 440);
  // point(320, 440);
  // point(330, 440);
  // point(340, 440);
  // point(350, 440);
}
