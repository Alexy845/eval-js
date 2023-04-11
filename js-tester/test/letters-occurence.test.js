const lettersOccurence = require("../letters-occurence");

describe("inverse string test", () => {
  test("test n°1", () => {
    expect(lettersOccurence("")).toStrictEqual({});
  });

  test("test n°2'", () => {
    expect(lettersOccurence("Hello World")).toStrictEqual({
      H: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      W: 1,
      r: 1,
      d: 1,
    });
  });

  test("test n°3", () => {
    expect(
      lettersOccurence("hruio rehiorg hre hgr orehg h oirhegrhhoigrh")
    ).toStrictEqual({
      h: 10,
      r: 9,
      u: 1,
      i: 4,
      o: 5,
      " ": 6,
      e: 4,
      g: 5,
    });
  });

  test("test n°4", () => {
    expect(
      lettersOccurence("occtyazZaXqWxRdBts6fCx6c3Jj8HgeK9x4qRy3SYiVvCKkqBT")
    ).toStrictEqual({
      3: 2,
      4: 1,
      6: 2,
      8: 1,
      9: 1,
      o: 1,
      c: 3,
      t: 2,
      y: 2,
      a: 2,
      z: 1,
      Z: 1,
      X: 1,
      q: 3,
      W: 1,
      x: 3,
      R: 2,
      d: 1,
      B: 2,
      s: 1,
      f: 1,
      C: 2,
      J: 1,
      j: 1,
      H: 1,
      g: 1,
      e: 1,
      K: 2,
      S: 1,
      Y: 1,
      i: 1,
      V: 1,
      v: 1,
      k: 1,
      T: 1,
    });
  });

  test("test n°5", () => {
    expect(lettersOccurence("65466632")).toStrictEqual({
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 4,
    });
  });

  test("test n°6", () => {
    expect(lettersOccurence(null)).toStrictEqual({});
  });

  test("test n°7", () => {
    expect(lettersOccurence(NaN)).toStrictEqual({});
  });

  test("test n°8", () => {
    expect(lettersOccurence(undefined)).toStrictEqual({});
  });
});
