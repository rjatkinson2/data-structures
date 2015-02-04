var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;
  storage.offset = 0;
  storage.enqueue = queueMethods.enqueue;
  storage.dequeue = queueMethods.dequeue;
  storage.size = queueMethods.size;
  return storage;
};

var queueMethods = {};
queueMethods.enqueue = function(item) {
  this[(this.count+this.offset)] = item;
  this.count++;
};
queueMethods.dequeue = function() {
  this.count && this.count--;
  var temp = this[this.offset];
  delete this[this.offset];
  this.offset++;
  return temp;
};
queueMethods.size = function() {
  return this.count;
};

