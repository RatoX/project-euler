var assert = require('assert'),
    problem = require('./multiples_of_3_and_5.js');


describe('Multiples of 3 and 5', function() {
  describe('Is multiple of 3?', function () {
    it('should return the value if is true', function () {
      assert.equal(problem.isMultipleOfThree(9),9 );
    });
    it('should return zero if is false', function () {
      assert.equal(problem.isMultipleOfThree(5),0 );
    });
  });


  describe('Is multiple of 5?', function () {
    it('should return the value if is true', function () {
      assert.equal(problem.isMultipleOfFive(10),10 );
    });
    it('should return zero if is false', function () {
      assert.equal(problem.isMultipleOfFive(9),0 );
    });
  });
});

describe('Sum number from a range', function() {
  it('should return 23 to sum all even number below 10', function () {
    assert.equal(problem.sum(10), 23);
  });

  it('should return 233168 to sum all even number below 1000', function () {
    assert.equal(problem.sum(1000), 233168);
  });
});
