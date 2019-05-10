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

  walls.push(new Boundary(350, 250, 390, 300));
  walls.push(new Boundary(390, 300, 250, 390));
  walls.push(new Boundary(250, 390, 350, 250));

  walls.push(new Boundary(150+100, 170+100, 100+100, 170+100));
  walls.push(new Boundary(100+100, 170+100, 100+100, 120+100));


  walls.push(new Boundary(300, 100, 200, 120));

  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));

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
