describe("repeatString", function() {
  it("takes the character 'I' and number 3 and returns the string 'III'", function() {
    expect(repeatString('I', 3)).to.equal('III');
  });

  it("takes the character 'V' and number 0 and returns an empty string", function() {
    expect(repeatString('V', 0)).to.equal('');
  });
});

describe("toRomanNumeral", function() {
  it("takes in the number 3 and returns the roman numeral 'III'", function() {
    expect(toRomanNumeral(3)).to.equal("III");
  });

  it("takes in the number 4 and returns the roman numeral 'IV'", function() {
    expect(toRomanNumeral(4)).to.equal("IV");
  });

  it("takes in the number 8 and returns the roman numeral 'VIII'", function() {
    expect(toRomanNumeral(8)).to.equal("VIII");
  });

  it("takes in the number 66 and returns the roman numeral 'LXVI'", function() {
    expect(toRomanNumeral(66)).to.equal("LXVI");
  });

  it("takes in the number 2,778 and returns the roman numeral 'MMDCCLXXVIII'", function() {
    expect(toRomanNumeral(2778)).to.equal("MMDCCLXXVIII");
  });
});
