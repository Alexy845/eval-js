const inverseString = require("../inverse-string");

describe("inverse string test", () => {
  test("should return '' when string passed is ''", () => {
    expect(inverseString("")).toBe("");
  });

  test("should return 'World Hello' when string passed is 'Hello World'", () => {
    expect(inverseString("Hello World")).toBe("World Hello");
  });

  test("should return 'Informatique Ytrack Ynov' when string passed is 'Ynov Ytrack Informatique '", () => {
    expect(inverseString("Ynov Ytrack Informatique ")).toBe(
      "Informatique Ytrack Ynov"
    );
  });

  test("should return 'Hello' when string passed is 'Hello'", () => {
    expect(inverseString("Hello")).toBe("Hello");
  });

  test("should return '789 456 123' when string passed is '123 456 789'", () => {
    expect(inverseString("123 456 789")).toBe("789 456 123");
  });

  test("should return 'Hey' when string passed is ' Hey'", () => {
    expect(inverseString(" Hey")).toBe("Hey");
  });

  test("should return '' when string passed is undefined", () => {
    expect(inverseString(undefined)).toBe("");
  });

  test("should return '' when string passed is null", () => {
    expect(inverseString(null)).toBe("");
  });
});

// console.log(inverseString('Hello World')) // World Hello
// console.log(inverseString('Ynov Ytrack Informatique ')) // Informatique Ytrack Ynov
// console.log(inverseString('Hello')) // Hello
// console.log(inverseString(' Hey')) // Hey
// console.log(inverseString(undefined)
