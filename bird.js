function preload() {
  birdImg = loadImage("assets/bird.png"); // Pastikan path ke gambar sudah benar
}

function Bird() {
  this.y = height / 2;
  this.x = 100;
  this.img = birdImg;

  this.gravity = 0.6;
  this.lift = -20;
  this.velocity = 0;

  this.show = function () {
    image(this.img, this.x, this.y, 80, 80);
  };

  this.up = function () {
    this.velocity += this.lift;
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height - 80) {
      this.y = height - 80;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
