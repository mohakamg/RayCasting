class Particle {

  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];

    for(var angle = 0; angle < 360; angle += 0.45){
      this.rays.push(new Ray(this.pos, radians(angle)));
    }

  }


  update(x,y){
    this.pos.set(x, y);

  }


  look(walls){
    for(var ray of this.rays){
      var closest = null;
      var record = Infinity;
      for(var wall of walls){
        const pt = ray.cast(wall)
        if(pt){
          const d = p5.Vector.dist(this.pos, pt);
          // record = min(d, record);
          if(d < record){
            record = d;
            closest = pt;
          }
        }
      }

      if(closest){
        stroke(255);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }

    }
  }

  show(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for(var ray of this.rays){
      ray.show();
    }
  }


}
