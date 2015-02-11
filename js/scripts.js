var repeatString = function(str, num) {
  var newString = "";

  if (num > 0) {
    for (var i = 0; i < num; ++i) {
      newString += str;
    }
  }

  return newString;
};
