function Element(size) {
  this.palette = [color(153,204,224), color(227,92,55), color(52,52,50)];
  this.shapes = ['straight','arc-left','arc-right'];
  this.color = this.palette[floor(random(this.palette.length))];
  this.direction;
 
  this.shape = this.shapes[floor(random(this.shapes.length))];
  this.size = size;
  this.thickness = (this.size/3);
  this.background = color(255,255,255);
  
  this.show = function() {
    push();
    noStroke(); 
    if (this.shape == 'arc-left') {
      translate(this.size, this.size);
      fill(this.color);
      arc(0, 0, this.size*2, this.size*2, HALF_PI, PI + HALF_PI);
      fill(this.background);
      arc(0, 0, this.size*2 -  (this.thickness*4), this.size*2 -  (this.thickness*4), HALF_PI, PI + HALF_PI);
    } else if (this.shape == 'arc-right') {
      translate(0, this.size);
      fill(this.color);
      arc(0, 0, this.size*2, this.size*2, PI + HALF_PI, HALF_PI);
      fill(this.background);
      arc(0, 0, this.size*2 - (this.thickness*4), this.size*2 - (this.thickness*4), PI + HALF_PI, HALF_PI);
    }
    else if (this.shape == 'straight') {
      fill(this.palette[2]);
      rect(0,0,this.size, this.thickness*2);
      rect(0,(this.size*2 - this.thickness*2),this.size, this.thickness*2);  
    }
    pop();
  }
  this.height = function() {
    return this.size*2;
  }
  
}