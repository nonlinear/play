void setup() {
  size(250, 250);
}

void draw() {
	background(mouseX/2);
	fill(width-mouseX);
	noStroke();
	ellipse(mouseX, mouseY, 80, 80);
}
