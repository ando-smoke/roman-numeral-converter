var repeatString = function(str, num) {
  var newString = "";

  if (num > 0) {
    for (var i = 0; i < num; ++i) {
      newString += str;
    }
  }

  return newString;
};

// algorithm for this method inspired by Richard Carr, published
// on 10-4-2007 at www.blackwasp.co.uk/NumberToRoman.aspx.
var toRomanNumeral = function(num) {
  var romanNumDigits = [['I', 1], ['IV', 4], ['V', 5], ['IX', 9],
    ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100],
    ['D', 500], ['CM', 900], ['M', 1000]];
  var romanNumString = "";
  var quotient;
  var divisor;

  if (num > 0 && num < 4000) {
    for (var i = romanNumDigits.length - 1; i >= 0; --i) {
      divisor = romanNumDigits[i][1];
      quotient = Math.floor(num / divisor);

      if (quotient > 0) {
        romanNumString += repeatString(romanNumDigits[i][0], quotient);
        num %= divisor;
      }
    }
  }

  return romanNumString;
};
