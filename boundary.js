class Boundary {

  constructor(x1, y1, x2, y2, wallColor = color(194, 224, 74)){
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.wallColor = wallColor;
  }

  show(){
    push();
    stroke(this.wallColor);
    strokeWeight(2);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    pop();
  }

}
