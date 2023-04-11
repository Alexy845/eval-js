const TCGBattle = require("../tcg-battle");

describe("tcg battle test", () => {
  test("test n°1", () => {
    expect(TCGBattle("2 30 27", "9 38 1")).toBe("Gagnant");
  });
  test("test n°2", () => {
    expect(TCGBattle("1 2 3", "3 2 1")).toBe("Nul");
  });
  test("test n°3", () => {
    expect(
      TCGBattle(
        "35 27 10 4 33 14 38 7 20 39 35 31 13 25 23 7 6 25 41 11 19 32 26 30 15 29 28 24 40 16 18 39 42 16 38 31 3 19 32 26 3 9 33 29 35 12 2 6 6 32",
        "35 26 30 31 10 39 2 2 2 30 32 22 23 40 18 32 33 38 16 4 11 42 16 18 22 14 23 40 8 38 7 15 4 13 24 4 19 13 26 38 22 9 6 31 38 40 2 29 24 30"
      )
    ).toBe("Perdant");
  });
  test("test n°4", () => {
    expect(
      TCGBattle(
        "35 7 1 18 22 8 11 32 37 25 31 15 9 42 15 37 37 18 8 20 20 36 16 39 5",
        "42 20 27 11 11 13 23 24 3 13 33 21 14 4 40 14 35 26 6 27 23 4 30 17 2"
      )
    ).toBe("Nul");
  });
  test("test n°5", () => {
    expect(TCGBattle("42 25 12 3", "25 42 13 4")).toBe("Gagnant");
  });

  test("test n°6", () => {
    expect(TCGBattle("12 24 42 6", "10 6 42 20")).toBe("Perdant");
  });
});
