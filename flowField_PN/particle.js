
function Particle(){
  this.pos = createVector(width-1, random(200, 400));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxspeed = 4;
  this.h = 0;
  this.g = 0;


  this.prevPos = this.pos.copy();

  this.bounce = function(){
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.mult(-1);
    }if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.mult(-1);
    }
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    // this.bounce();
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors){
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    this.h = map(mouseX, 0, width, 0, 255);
    this.g = map(mouseY, 0, height, 0, 255);
    stroke(this.h, 180, this.g, random(15,20));
    // this.h += 0.2;
    // if (this.h > 255) {
    //   this.h = 0;
    // }

  //
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePev();
  }

  this.updatePev = function(){
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
  }

  this.edges = function(){
    if (this.pos.x > width){
       this.pos.x = 0;
       this.updatePev();
     }if (this.pos.x < 0){
       this.pos.x = width;
       this.updatePev();
     }if (this.pos.y > height){
       this.pos.y = 0;
       this.updatePev();
     }if (this.pos.y < 0){
       this.pos.y = height;
       this.updatePev();
     }

  }
}
