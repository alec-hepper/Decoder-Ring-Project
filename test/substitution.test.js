// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("returns false if the given alphabet isn't exactly 26 characters long", () => {
    const alphabet = "alskdjghqpwoeirutyzmxncb";
    const input = "testing";
    const encode = true;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.be.false;
  });
  
  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  
  it("returns false if there are any duplicate characters in the given alphabet", () => {
    const input = "thinkful";
    const alphabet = "duplicatetest";
    const encode = true;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.be.false;
  });
  
  it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
    const input = "you are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces and other nonalphabetic symbols in the message, before and after decoding", () => {
    const input = "elp xhm xf mbymwwmfj dne"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = false;
    const expected = "you are an excellent spy";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  
  it("ignores captial letters ('A message' and 'a message' should be the same)", () => {
    const input = "Thinkful"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const encode = true;
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
});