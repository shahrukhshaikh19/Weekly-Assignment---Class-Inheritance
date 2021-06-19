// declare class

// export class using module.exports
import React from "react";

class Shape {
  constructor() {
    this.background = "black";
  }
  drawShape() {
    console.log("drawShape");
  }
  calculateArea() {
    console.log("calculateArea");
  }
  render() {
    return <p>This is Shape:</p>;
  }
}
module.exports = Shape;
