exports.isMultipleOfThree = function(value){
  return (value % 3 == 0) ? value : 0;
}

exports.isMultipleOfFive = function(value){
  return (value % 5 == 0) ? value : 0;
}

exports.sum = function(value){
  if(value <= 0){
    return 0;
  }
  var calc = value => this.isMultipleOfThree(value) || this.isMultipleOfFive(value);
  value -= 1;
  return this.sum(value) + calc(value);
}
