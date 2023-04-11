const extractObject = require("../extract-object");

describe("inverse string test", () => {
  test("test n°1", () => {
    expect(
      extractObject(
        `Je ne vais pas taffer comme la Chine {"Valentin":"prenom","Sullyvan":"nom"} parce que taffer comme la Chine ça fait monter le taux de Co2`
      )
    ).toStrictEqual([{ prenom: "Valentin", nom: "Sullyvan" }]);
  });

  test("test n°2", () => {
    expect(
      extractObject(
        `Hello there {"hello":2,"a":3} comment ça va ? {"a":1,"z":2} {"hello":"World","abc":"def"}`
      )
    ).toStrictEqual([
      { 2: "hello", 3: "a" },
      { 1: "a", 2: "z" },
      { World: "hello", def: "abc" },
    ]);
  });

  test("test n°3", () => {
    expect(
      extractObject(
        `Cet exam est vachement facile {"hello":"undefined","a":3} surtout cet exo si on regarde le notion {"a":1  {"John":"Doe"}`
      )
    ).toStrictEqual([{ 3: "a", undefined: "hello" }, { Doe: "John" }]);
  });

  test("test n°4", () => {
    expect(extractObject(`Hello there comment ça va ?`)).toStrictEqual([]);
  });

  test("test n°5", () => {
    expect(extractObject("")).toStrictEqual([]);
  });
});

// console.log(extractObject('Hello World')) // World Hello
// console.log(extractObject('Ynov Ytrack Informatique ')) // Informatique Ytrack Ynov
// console.log(extractObject('Hello')) // Hello
// console.log(extractObject(' Hey')) // Hey
// console.log(extractObject(undefined)
