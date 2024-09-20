let bird;
let pipes = [];

function setup() {
  createCanvas(1900, 800);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(100, 150, 255);
  bird.show();
  bird.update();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }
}

function mousePressed() {
  bird.up();
}

function keyPressed() {
  if (key == " " || key == "w" || key == "W" || keyCode == UP_ARROW) {
    bird.up();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
