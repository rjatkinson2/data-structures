var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(queueMethods);
  object.count = 0;
  object.offset = 0;
  return object;
};

var queueMethods = {};
queueMethods.enqueue = function(val){
  this[this.count + this.offset] = val;
  this.count++;
};

queueMethods.dequeue = function(){
  this.count && this.count--;
  var temp = this[this.offset];
  delete this[this.offset];
  this.offset++;
  return temp;
};

queueMethods.size = function(){
  return this.count;
};

