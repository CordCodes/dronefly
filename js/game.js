//Create the setup function
function setup(){
  //p5.js code
}
//Create the draw function
function draw(){
  //p5.js code
}

//Create the update function
function update(){
  //movement code, score keeping ect. ect.
}
//Create the character object function
function character(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.draw = function(){
    //p5.js code
  }
  this.update = function(){
    //Movement code
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
}
