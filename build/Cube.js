"use strict";
var Cube = /** @class */ (function () {
    function Cube(vector) {
        this.vector = vector;
    }
    Cube.prototype.getVolume = function () {
        return this.vector.x * this.vector.y * this.vector.z;
    };
    Cube.prototype.getArea = function () {
        return this.vector.x * this.vector.y * 6;
    };
    Cube.prototype.getAttributes = function () {
        return [this.getVolume(), this.getArea()];
    };
    return Cube;
}());
var cube = new Cube({ x: 6, y: 7, z: 8 });
console.log(cube.getAttributes());
