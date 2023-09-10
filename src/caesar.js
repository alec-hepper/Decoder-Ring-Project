// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let solved = "";
    input = input.toLowerCase();
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    if (!encode) {
      shift *= -1;
    };
    for (let i = 0; i < input.length; i++) {
      let unicodeValue = input[i].charCodeAt();
      if (unicodeValue < 97 || unicodeValue > 122) {
        solved += String.fromCharCode(unicodeValue);
      } else {
        unicodeValue += shift;
        if (unicodeValue >= 97 && unicodeValue <= 122) {
          solved += String.fromCharCode(unicodeValue);
        }
        if (unicodeValue < 97) {
          solved += String.fromCharCode(123 - (97 - unicodeValue));
        }
        if (unicodeValue > 122) {
          solved += String.fromCharCode(96 + (unicodeValue - 122));
        }
      }
    }
    return solved;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
