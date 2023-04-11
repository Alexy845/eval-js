const manipArray = require("../manip-array");

describe("manip array test", () => {
  test("should return [] when array passed is []", () => {
    expect(manipArray([])).toEqual([]);
  });

  test("should return [ [ 2, 2, 6, 4, 10 ], [ -4, -3, -2, -1, 0 ], [ 3 ], [ 5, 4, 3, 2, 1 ] ] when array passed is [1, 2, 3, 4, 5]", () => {
    expect(manipArray([1, 2, 3, 4, 5])).toEqual([
      [2, 2, 6, 4, 10],
      [-4, -3, -2, -1, 0],
      [3],
      [5, 4, 3, 2, 1],
    ]);
  });

  test("should return [[ 50, 10, 42, 86, 2, 2 ], [ 45, 0, 37, 81, -3, -4 ], [ 42 ], [ 86, 50, 42, 5, 2, 1 ]] when array passed is [50, 5, 42, 86, 2, 1]", () => {
    expect(manipArray([50, 5, 42, 86, 2, 1])).toEqual([
      [50, 10, 42, 86, 2, 2],
      [45, 0, 37, 81, -3, -4],
      [42],
      [86, 50, 42, 5, 2, 1],
    ]);
  });

  test("should return [ [ 10, 10, 2, 26 ], [ 5, 0, -3, 8 ], [], [ 13, 10, 5, 2 ] ] when array passed is [10, 5, 2, 13]'", () => {
    expect(manipArray([10, 5, 2, 13])).toEqual([
      [10, 10, 2, 26],
      [5, 0, -3, 8],
      [],
      [13, 10, 5, 2],
    ]);
  });

  test("should return [[ 90, 66, 66, 30 ], [ 40, 61, 28, 25 ], [ 66, 33 ], [ 66, 45, 33, 30 ] when array passed is [45, 'z', 66, 'a', 33, null, 30, undefined]", () => {
    expect(manipArray([45, "z", 66, "a", 33, null, 30, undefined])).toEqual([
      [90, 66, 66, 30],
      [40, 61, 28, 25],
      [66, 33],
      [66, 45, 33, 30],
    ]);
  });
});
