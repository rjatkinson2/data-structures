var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(stackMethods);
  object.count = 0;
  return object;
};

var stackMethods = {};
stackMethods.push = function(val) {
  this[this.count] = val;
  this.count++;
};
stackMethods.pop = function() {
  this.count && this.count--;
  return this[this.count];
};
stackMethods.size = function() {
  return this.count;
};

