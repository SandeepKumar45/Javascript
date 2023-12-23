class Shape{
    calculateArea(){}
    calculatePerimeter(){}
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius;
    }
    calculateArea(){
        return (Math.PI*this.radius*this.radius)
    }
    calculatePerimeter(){
        return (2*Math.PI*this.radius)
    }
}

class Rectangle extends Shape{
    constructor(length,width){
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea(){
        return (this.length * this.width)
    }
    calculatePerimeter(){
        return (2*(this.length + this.width))
    }
}

class Triangle extends Shape{
    constructor(height,base,a,c){
        super();
        this.leftSide = a;
        this.base = base;
        this.rightSide = c;
        this.height = height;
    }
    calculateArea(){
        return ((this.height*this.base)/2);
    }
    calculatePerimeter(){
        return (this.leftSide+this.base+this.rightSide);
    }
}

const circle = new Circle(5);
console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4,6);
console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8,6,5,7);
console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);