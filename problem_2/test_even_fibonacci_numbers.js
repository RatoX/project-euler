var assert = require('assert'),
    problem = require('./even_fibonacci_numbers.js');


describe('Fibonacci', function() {
    var Fibonacci;
    beforeEach(function(){
      Fibonacci = new problem.fibonacci();
    });

    it('should return the value of ten position', function () {
      assert.equal(Fibonacci.stopOn(10).run(), 144);
    });

    it('should return the value of thrid position', function () {
      assert.equal(Fibonacci.stopOn(3).run(), 5);
    });

    it('should return the sum of all values until of thrid position', function () {
			Fibonacci.stopOn(3).sum().run();
      assert.equal(Fibonacci.result(), 11);
    });

    it('should return the sum of odd values until of thrid position', function () {
			Fibonacci.stopOn(3).sum().only((x) => (x%2===1)).run();
      assert.equal(Fibonacci.result(), 9);
    });

    it('should return the sum of even values until max value', function () {
			Fibonacci.sum().only((x) => (x%2===0)).run();
      assert.equal(Fibonacci.result(), 4613732);
    });
});
