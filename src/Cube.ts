type Vector3 = {
  x: number;
  y: number;
  z: number;
};

class Cube {
  constructor(private vector: Vector3) {}
  private getVolume(): number {
    return this.vector.x * this.vector.y * this.vector.z;
  }
  private getArea(): number {
    return this.vector.x * this.vector.y * 6;
  }
  getAttributes(): number[] {
    return [this.getVolume(), this.getArea()];
  }
}

const cube = new Cube({ x: 6, y: 7, z: 8 });
console.log(cube.getAttributes());
