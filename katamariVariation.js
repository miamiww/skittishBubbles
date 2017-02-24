var bubbles = [];
var MAX_BUBBLES = 1750;
var YOU_COLOR;
var WIN_COLOR;
var CONGRAT_COLOR;



function Bubble () {
      this.x = random(0, width);
      this.y = random(0, height);
}

Bubble.prototype.display = function(){
  stroke(this.r,this.b,this.g);
  fill(this.r,this.b,this.g);
  ellipse(this.x, this.y, 24);
}

Bubble.prototype._move = function(){
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
}

Bubble.prototype.color = function(r,b,g){
  this.r = r;
  this.b = b;
  this.g = g;
}

Bubble.prototype.coalesce = function(mouseX, mouseY, cubeSize, runAwaySpeed){
  if(this.x < mouseX + cubeSize && this.x > mouseX - cubeSize && this.y < mouseY + cubeSize && this.y > mouseY - cubeSize ){
    if(this.x < mouseX ){
      this.x = this.x + random(runAwaySpeed);
    }
    if(this.x > mouseX ){
      this.x = this.x - random(runAwaySpeed);
    }
    if(this.y < mouseY){
      this.y = this.y + random(runAwaySpeed);
    }
    if(this.y > mouseY){
      this.y = this.y - random(runAwaySpeed);
    }
  //  this.color(125,255,125);
  } else{
    return this._move();
  }

}

function setup() {
  createCanvas(600, 400);
  YOU_COLOR = color(125,255,0,175);
  WIN_COLOR = color(125,0,255,175);
  CONGRAT_COLOR = color(125,255,0,175);
  //object definition in setup
  for (var i = 0; i < MAX_BUBBLES; i++) {
     bubbles[i] = new Bubble();
     bubbles[i].color(random(255),random(255),random(255));
  }
//  frameRate(60);
}

function message(){
  textSize(72);

  textAlign(RIGHT);
  stroke(YOU_COLOR);
  fill(YOU_COLOR);
  text("you",width/3,height/4);

  textAlign(CENTER);
  stroke(WIN_COLOR);
  fill(WIN_COLOR);
  text("win,",width/3,height/2);

  textAlign(LEFT);
  stroke(CONGRAT_COLOR);
  fill(CONGRAT_COLOR);
  text("congrats!",width/2,height/1.5);
}


function draw() {
  background(0);
  message();
  for (var i = 0; i < MAX_BUBBLES; i++) {
//    bubbles[i]._move();
    bubbles[i].coalesce(mouseX, mouseY, 75, 45);
    bubbles[i].display();

  }
}
