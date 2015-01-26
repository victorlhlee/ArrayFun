var arrayfun = require('../arrayfun');

describe("arrayfun", function(){
  it("must have a function named difference()", function() {

    expect(arrayfun.difference).toBeDefined();
    
  });

  it("difference() function must exclude all values of the provided arrays using strict equality (array)", function(){

    var test_array = [1,2,3,4,5];
    var test_array2 = [5,2,10];

    var result = arrayfun.difference (test_array, test_array2);
    
    expect (result).toEqual([1,3,4]);

  });

});
