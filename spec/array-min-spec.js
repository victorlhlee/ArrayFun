var arrayfun = require('../arrayfun');

describe("arrayfun", function(){
  it("must have a function named min", function() {

    expect(arrayfun.min).toBeDefined();
    
  });

  it("min() function must return the minimum value of the argument (array)", function() {
      var test_array = [4, 2, 8, 6];

      var result = arrayfun.min(test_array);

      expect(result).toBe(2);

  });

  it("if min() function array is empty or falsey Infinity is returned", function() {
    var test_array = [];
    var result = arrayfun.min(test_array);

    expect(result).toBe(Infinity);
  });


});

