let bird;
let pipes = [];
let score = 0;
let gameOver = false;
let mic;
let started = false;

function setup() {
  createCanvas(1900, 800);
  bird = new Bird();
  pipes.push(new Pipe());
  textSize(32);
  textAlign(CENTER);
  text("Click to start", width / 2, height / 2);
}

function draw() {
  if (!started) {
    background(100, 150, 255);
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("Click to start", width / 2, height / 2);
    return;
  }
  background(100, 150, 255);
  document.getElementById("score").innerText = "score : " + score;
  let vol = mic.getLevel() * 5;

  if (gameOver) {
    //pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
    }
    // bird
    bird.show();
    //gameover
    fill(255, 0, 0);
    textSize(64);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
    return;
  }

  bird.show();
  bird.update();

  //   if (frameCount % 150 == 0) {
  //     pipes.push(new Pipe());
  //   }

  //tingkat kesulitan
  if (score <= 5) {
    if (frameCount % 150 == 0) {
      pipes.push(new Pipe());
    }
  } else if (score > 5) {
    if (frameCount % 100 == 0) {
      pipes.push(new Pipe());
    }
  } else {
    if (frameCount % 80 == 0) {
      pipes.push(new Pipe());
    }
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();

    if (pipes[i].hit(bird)) {
      pipes[i].highlight = true;
      console.log("HIT");
      pipes[i].speed = 0;
      bird.gravity = 0;
      gameOver = true;
    }

    pipes[i].show();

    if (!pipes[i].hasHit && bird.x > pipes[i].x + pipes[i].w) {
      pipes[i].hasHit = true;
      score += 1;
      console.log("score : ", score);
    }

    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }

  //sound chart
  fill(0, 255, 0);
  let y = map(vol, 0, 1, height, 0);
  rect(width - 50, y, 50, height - y);
  fill(0, 255, 0);
  text("Volume: " + vol, width / 2, height / 2 - 100);

  if (vol > 0.1) {
    bird.up();
  }
}

function mousePressed() {
  if (!started) {
    userStartAudio().then(function () {
      mic = new p5.AudioIn();
      mic.start();
      started = true;
    });
  }
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
