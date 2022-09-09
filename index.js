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
    get parameter(){
        const total = this.sides.reduce((sum, side) => sum + side, 0);
        return total;
    }
}

// class triangle
class Triangle extends Polygon {
    // constructor(sides){
    //     super(sides);
    // }

    // check if the triangle is valid
    // sum of pairs of sides should be > third side
    get isValid(){
        const sides = this.sides;
        
    }
}