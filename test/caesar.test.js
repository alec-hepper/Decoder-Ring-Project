// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("should return false if the shift value is equal to 0", () => {
    const input = "thinkful";
    const shift = 0;
    const encode = true;
    const actual = caesar(input, shift, encode);
    expect(actual).to.be.false;
  });
  
  it("should return false if the shift value is less than -25", () => {
    const input = "thinkful";
    const shift = -26;
    const encode = true;
    const actual = caesar(input, shift, encode);
    expect(actual).to.be.false;
  });
  
  it("should return false if the shift value is greater than 25", () => {
    const input = "thinkful";
    const shift = 27;
    const encode = true;
    const actual = caesar(input, shift, encode);
    expect(actual).to.be.false;
  });
  
  it("should return false if the shift value is not present", () => {
    const input = "thinkful";
    const shift = undefined;
    const encode = true;
    const actual = caesar(input, shift, encode);
    expect(actual).to.be.false;
  });
  
  it("ignores captial letters ('A message' and 'a message' should be the same)", () => {
    const input = "Thinkful";
    const shift = 3;
    const encode = true;
    const expected = "wklqnixo";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  
  it("handles shifts that go past the end of the alphabet (shifting z to the right by 3 should start at the top again and be at c)", () => {
    const input = "thinkful";
    const shift = 10;
    const encode = true;
    const expected = "drsxupev";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
    const input = "testing testing 1 2 3";
    const shift = 3;
    const encode = true;
    const expected = "whvwlqj whvwlqj 1 2 3";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces and other nonalphabetic symbols in the message, before and after decoding", () => {
    const input = "whvwlqj whvwlqj 1 2 3";
    const shift = 3;
    const encode = false;
    const expected = "testing testing 1 2 3";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  })
});