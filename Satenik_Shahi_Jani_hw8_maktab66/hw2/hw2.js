//constructor function
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
  this.getPerimeter = function () {
    return Math.PI * 2 * this.radius;
  };
}
let circy = new Circle(11);
circy.getArea();

console.log(circy.getArea());
//-----------------------------------
let circy1 = new Circle(4.44);
circy.getPerimeter();
console.log(circy1.getPerimeter(4.44));
//-----------------------------------

//constructor function with using prototype
function Circle2(_radius) {
  this.radius = _radius;
  // creating an instance increments the count for everyone
  Circle2.prototype.circleCount++; // not this.circleCount++ which will create a new property on instance
}
Circle2.prototype.getArea = function () {
  return Math.pow(this.radius, 2) * Math.PI;
};
Circle2.prototype.getPerimeter = function () {
  return Math.PI * 2 * this.radius;
};
Circle2.prototype.circleCount = 0;

let c1 = new Circle2(10);
console.log(c1.circleCount);
console.log(c1.getPerimeter());
console.log(c1.getArea());

let c2 = new Circle2(20);
console.log(c2.circleCount);
console.log(c2.getPerimeter());
console.log(c2.getArea());
//-----------------------------------
//class--->
class Circle3 {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getPerimeter() {
    return Math.PI * 2 * this.radius;
  }
}
const circy3 = new Circle3(11);
console.log(circy3.getArea());
const circy4 = new Circle3(4.44);
console.log(circy4.getPerimeter());
