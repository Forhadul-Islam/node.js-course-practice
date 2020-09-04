module.exports = (x, y, callBack) => {
  if (x <= 0 || y <= 0) {
    setTimeout(
      () =>
        callBack(
          new Error(
            `The dimension of a rectangle must be greater than zero: here, length is ${x} and breath is ${y}`
          ),
          null
        ),
      4000
    );
  } else {
    setTimeout(
      () =>
        callBack(null, {
          area: () => x * y,
          perimeter: () => 2 * (x + y),
        }),
      4000
    );
  }
};
