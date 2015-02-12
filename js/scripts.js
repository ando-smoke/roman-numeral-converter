var repeatString = function(str, num) {
  var newString = "";

  if (num > 0) {
    for (var i = 0; i < num; ++i) {
      newString += str;
    }
  }

  return newString;
};

var toRomanNumeral = function(num) {
  var romanNumDigits = [['I', 1], ['V', 5], ['X', 10],
    ['L', 50], ['C', 100], ['D', 500], ['M', 1000]];
  var romanNumString = "";
  var quotient = 0;
  var divisor = 1;

  for (var i = romanNumDigits.length - 1; i >= 0; --i) {
    divisor = romanNumDigits[i][1];
    quotient = Math.floor(num / divisor);

    if (quotient > 0) {
      if (quotient !== 4) {
        romanNumString += repeatString(romanNumDigits[i][0], quotient);
        num %= divisor;
      }
      else {
        var lowDigitIndex = 0;
        var highDigitIndex = 0;

        for (var j = 0; (highDigitIndex === 0) &&
          (j < romanNumDigits.length - 1); ++j) {
          for (var k = j + 1; k < romanNumDigits.length; ++k) {
            if (romanNumDigits[k][1] - romanNumDigits[j][1] === quotient) {
              lowDigitIndex = j;
              highDigitIndex = k;
              break;
            }
          }
        }

        romanNumString +=
          romanNumDigits[lowDigitIndex][0] +
            romanNumDigits[highDigitIndex][0];
      }
    }
  }

  return romanNumString;
};
