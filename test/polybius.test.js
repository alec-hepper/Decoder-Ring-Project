// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  it("when encoding, it translates the letters 'i' and 'j' to '42'", () => {
    const input = "jiffy";
    const encode = true;
    const expected = "4242121245"
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  
  it("when decoding, it translates '42' to 'i/j'", () => {
    const input = "12423351";
    const encode = false;
    const expected = "f(i/j)ne";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  
  it("ignores captial letters ('A message' and 'a message' should be the same)", () => {
    const input = "Racecar";
    const encode = true;
    const expected = "24113151311124";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces in the message, before and after encoding", () => {
    const input = "the message";
    const encode = true;
    const expected = "443251 23513434112251";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces in the message, before and after decoding", () => {
    const input = "443251 23513434112251";
    const encode = false;
    const expected = "the message";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
});