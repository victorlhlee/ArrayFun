var arrayfun = require('../arrayfun');

describe("arrayfun", function(){
  it("must have a function named max", function() {

    expect(arrayfun.max).toBeDefined();
    
  });

  it("max() function must return the maximum value of the argument (array)", function() {
      var test_array = [4, 2, 8, 6];

      var result = arrayfun.max(test_array);

      expect(result).toBe(8);

  });

  it("if max () function array is empty or falsey -Infinity is returned", function() {
    var test_array = [];
    var result = arrayfun.max(test_array);

    expect(result).toBe(-Infinity);
  });


});

