function preload() {
  birdImg = loadImage("assets/bird.png"); // Pastikan path ke gambar sudah benar
}

function Bird() {
  this.y = height / 2;
  this.x = 100;
  this.img = birdImg;

  this.gravity = 0.1;
  this.velocity = 0;

  this.show = function () {
    image(this.img, this.x, this.y, 80, 80);
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.y += this.velocity;
  };
}
