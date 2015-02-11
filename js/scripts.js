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

  if (Math.floor(num / romanNumDigits[0][1]) < 4) {
    romanNumString += repeatString(romanNumDigits[0][0], num);
  }

  return romanNumString;
};
