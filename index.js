const rect = require("./rectangal");
const solveArea = (l, b) => {
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("err is,", err.message);
    } else {
      console.log(`The area of the rectangle is ${rectangle.area()}`);
      console.log(`The perimeter of the rectangle is ${rectangle.perimeter()}`);
    }
  });
  console.log("code is running ");
};

solveArea(2, 3);
solveArea(5, 6);
solveArea(2, -3);
solveArea(0, 3);
