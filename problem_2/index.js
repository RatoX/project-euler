var problem = require('./even_fibonacci_numbers.js');

exports.run = function(){
	var Fibonacci = new problem.fibonacci();
	Fibonacci.sum().only((x) => (x%2===0)).run();
  return Fibonacci.result();
}
