var Fibonacci = function(){
  var position = 0,
		interation = 1,
		MAX_VALUE = 4000000,
		total = 0;

	var doIt = () =>{};
	var isTrue = () => true;
  var next = function(prev, actual){
		isTrue(actual) && doIt(actual);
    if(interation === position || actual > MAX_VALUE){
      return actual;
    }
    interation += 1;
    return next(actual, prev+actual);
  }


  this.stopOn = function(value){
    position = value;
    return this;
  }

	this.sum = function(){
		doIt = (value) => total += value;
		return this;
	}

	this.only = function(expression){
		isTrue = (value) => expression(value);
		return this;
	}

  this.run = function(){
		isTrue(1) && doIt(1);
    return next(1,2);
  }

	this.result = function(){
		return total;
	}
};


exports.fibonacci = Fibonacci;
