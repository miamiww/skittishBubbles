
//first practice with constructor function

function cat(name) {
    this.name = name;
    this.talk = function() {
        console.log( this.name + " say meeow!" );
    }
    this.eat = function() {
        console.log(this.name + " eats fishes");
    }
}

cat1 = new cat("felix");
cat1.talk(); //alerts "felix says meeow!"
cat1.eat();

cat2 = new cat("ginger");
cat2.talk(); //alerts "ginger says meeow!"

//trying prototyping

cat.prototype.changeName = function(name) {
    this.name = name;
}

firstCat = new cat("pursur")
firstCat.changeName("hamlet")
firstCat.talk() //alerts "Bill says meeow!"

cat1.changeName("not felix");
cat1.talk();

//

var Car = function(color){
  var obj = {};
  obj.color = color;
  obj.door = 'closed';
  obj.doorOpen = function(){
    obj.door = "open";
  };
  obj.closeDoor = function(){
    obj.door = 'closed';
  };
  return obj;
};


var car = Car('red');
console.log(car.color);
console.log(car.door);
car.doorOpen();
console.log(car.door);
