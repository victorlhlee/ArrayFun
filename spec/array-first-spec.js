var arrayfun = require('../arrayfun');

describe("arrayfun", function(){
  it("must have a function named first()", function() {

    expect(arrayfun.first).toBeDefined();
    
  });

  it("first() function must return the first element or first argument (array)", function() {
    var test_array = [1, 2, 3, 4];

    var result = arrayfun.first (test_array);
    
    expect (result).toBe(1);

  });

  it("first() function must return a new array filled with the first n elements of the first argument (array)", function() {
    var test_array = [1,2,3,4];

    var result2 = arrayfun.first (test_array, 2);
    expect(result2).toEqual([1, 2]);

    var result3 = arrayfun.first(test_array, 3);
    expect(result3).toEqual([1,2,3]);
    
  });

});

