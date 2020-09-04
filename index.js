const rect = require("./rectangal");
const solveArea = (l, h) => {
  console.log(`It is a rectangle of l = ${l} and h = ${h}`);
  if (l <= 0 || h <= 0) {
    console.log(
      `The dimensions of a rectangle must be greater than zero: Here, l=${l} and h=${h}`
    );
  } else {
    console.log(`The area of the rectangle is ${rect.area(l, h)}`);
    console.log(`The perimeter of the rectangle is ${rect.perimeter(l, h)}`);
  }
};

solveArea(2, 3);
solveArea(5, 6);
solveArea(2, -3);
solveArea(0, 3);
