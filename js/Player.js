class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
   //escribe el código correcto para mostrar las vidas como tres rectángulos verdes en una línea horizontal.
   textSize(20);
  fill("white");
  text("Player", this.body.position.x - 7, 40); 


  fill(this.life1);
  rect(this.body.position.x - 90, 50, 60, 30); 
  fill(this.life2);
  rect(this.body.position.x - 30, 50, 60, 30); 
  fill(this.life3);
  rect(this.body.position.x + 30, 50, 60, 30); 
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
