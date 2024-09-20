function Pipe() {
  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.x = width;
  this.w = 80;
  this.speed = 3;
  this.highlight = false;
  this.hasHit = false;

  this.show = function () {
    if (this.highlight) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function () {
    this.x -= this.speed;
  };

  this.offScreen = function () {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };

  this.hit = function (bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        this.hasHit = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  };
}
