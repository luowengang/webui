

// 面向对象编码测试方法:  构建对象，通过原型混合方法构建。
function Car(color, size, speed) {
	this.color = color;
	this.size = size;
	this.speed = speed;

}

Car.prototype.drive = function() {
	alert("drive speed:" + this.speed);
};



function myFunction(color,speed)
{
  var car1 = new Car(color,  "47", speed);
  car1.drive();

  var car2 = new Car(color,  "47", speed + 20);
  car2.drive();
}


