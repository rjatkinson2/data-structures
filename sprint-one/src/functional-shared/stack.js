var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;
  storage.offset = 0;
  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size;
  return storage;
};

var stackMethods = {};
stackMethods.push = function(item){
  this[this.count] = item;
  this.count++;
};
stackMethods.pop = function(){
  this.count && this.count--;
  return this[this.count];
};
stackMethods.size = function(){
  return this.count;
};
