describe("repeatString", function() {
  it("takes the character 'I' and number 3 and returns the string 'III'", function() {
    expect(repeatString('I', 3)).to.equal('III');
  });

  it("takes the character 'V' and number 0 and returns an empty string", function() {
    expect(repeatString('V', 0)).to.equal('');
  });
});
