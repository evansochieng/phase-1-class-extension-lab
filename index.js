// Your code here

// Geometry application
class Polygon {
    constructor(Array){
        this.sides = Array;
    }

    // count sides
    get countSides(){
        return this.sides.length;
    }

    // parameter
    get perimeter(){
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

// class triangle
class Triangle extends Polygon {
    // check if the triangle is valid
    // sum of pairs of sides should be > third side
    get isValid(){
        //const sides = this.sides;
        const check1 = this.sides[0] + this.sides[1] > this.sides[2];
        const check2 = this.sides[0] + this.sides[2] > this.sides[1];
        const check3 = this.sides[1] + this.sides[2] > this.sides[0];
        return ( check1 && check2 && check3 );
    }
}

// class Square
class Square extends Polygon {
    // check if all sides are equal
    get isValid(){
        return (this.sides[0] === this.sides[1]) && (this.sides[2] === this.sides[3]);
    }

    // area method
    get area(){
        return this.sides[0] * this.sides[0];
    }
}