let ray, particle;
let walls = [];

function setup() {
  createCanvas(400, 400);



  walls.push(new Boundary(100, 120, 150, 120));
  walls.push(new Boundary(150, 120, 150, 170));
  walls.push(new Boundary(150, 170, 100, 170));
  walls.push(new Boundary(100, 170, 100, 120));


  walls.push(new Boundary(100+100, 120+100, 150+100, 120+100));
  walls.push(new Boundary(150+100, 120+100, 150+100, 170+100));
  walls.push(new Boundary(150+100, 170+100, 100+100, 170+100));
  walls.push(new Boundary(100+100, 170+100, 100+100, 120+100));

  walls.push(new Boundary(350, 250, 380, 300));
  walls.push(new Boundary(380, 300, 250, 390));
  walls.push(new Boundary(250, 390, 350, 250));

  walls.push(new Boundary(150+100, 170+100, 100+100, 170+100));
  walls.push(new Boundary(100+100, 170+100, 100+100, 120+100));


  walls.push(new Boundary(300, 100, 200, 120));

  walls.push(new Boundary(10, 10, width-10, 10));
  walls.push(new Boundary(width-10, 10, width-10, height-10));
  walls.push(new Boundary(width-10, height-10, 10, height-10));
  walls.push(new Boundary(10, height-10, 10, 10));

  particle = new Particle();
}


function draw() {
  background(color(9, 51, 119));
  for(wall of walls){
    wall.show();
  }

  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);
  // ray.show();
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);
  //
  // console.log(pt);
  //
  // if(pt) {
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8);
  // }




}
