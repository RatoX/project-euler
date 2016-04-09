var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var problem = require('./problem_1/index.js');

suite.add('RegExp#test', function() {
  problem.run();
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('All problem were concluded');
})
.run({ 'async': true });
