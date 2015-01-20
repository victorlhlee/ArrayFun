var arrayfun = require('../arrayfun');

describe("arrayfun", function(){
  it("must have a function named first()", function() {

    expect(arrayfun.intersection).toBeDefined();
    
  });

  it("intersection() function must return elements provided in all arrays using strict equality (array)", function(){

    var test_array = [1, 2, 3, 4];
    var test_array2 = [1, 3, 5, 6, 7];

    var result = arrayfun.intersection (test_array, test_array2);
    
    expect (result).toEqual([1, 3]);

  });

});

