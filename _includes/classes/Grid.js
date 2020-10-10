function Grid(cell,gap) {
  this.cell = cell;
  this.gap = gap;
  this.width = (width-((this.cell-1)*this.gap))/this.cell;
  
  
  this.show = function() {
    push();
    for (let i = 0; i < this.cell; i++) {
      noStroke();
      fill(255, 0, 0, 20);
      rect(this.width*i+this.gap*i, 0, this.width, height);
    }
    pop();
  }
  
  this.cellPosition = function(n) {
    return this.width*n+this.gap*n;
  }
  
}