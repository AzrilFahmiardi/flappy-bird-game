var bird;

function setup() {
  createCanvas(1900, 800);
  bird = new Bird();
}

function draw() {
  background(100, 150, 255);
  bird.show();
  bird.update();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key == " " || key == "w" || key == "W" || keyCode == UP_ARROW) {
    bird.up();
  }
}
