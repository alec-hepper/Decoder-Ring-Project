// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // Constructing the standard alphabet and splitting it into an array.
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function subEncode(input, alphabet) {
    let codedMessage = [];
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let messageIndex = standardAlphabet.indexOf(input[i]);
      let messageLetter = alphabet[messageIndex];
      if (messageIndex < 0) {
        codedMessage.push(input[i]);
      }
      codedMessage.push(messageLetter);
    }
    return codedMessage.join("");
  }
  
  function subDecode(input, alphabet) {
    let decodedMessage = [];
    for (let i = 0; i < input.length; i++) {
      let messageIndex = alphabet.indexOf(input[i]);
      let messageLetter = standardAlphabet[messageIndex];
      if (messageIndex < 0) {
        decodedMessage.push(input[i]);
      }
      decodedMessage.push(messageLetter);
    }
    return decodedMessage.join("");
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (alphabet === undefined || !alphabet || alphabet.length != 26) {
      return false;
    }
    for (let i = 0; i < input.length; i++) {
      if (alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i])) {
        return false;
      }
    }
    if (encode) {
      return subEncode(input, alphabet);
    }
    return subDecode(input, alphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
