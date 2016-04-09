var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var problem1 = require('./problem_1/index.js');
var problem2 = require('./problem_2/index.js');

suite
.add('Problem 1', function() {
  problem1.run();
})
.add('Problem 2', function() {
  problem2.run();
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('All problem were concluded');
})
.run({ 'async': true });
