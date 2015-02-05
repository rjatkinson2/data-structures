var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.storage = {};
Queue.prototype.offset = 0;
Queue.prototype.count = 0;

Queue.prototype.enqueue = function(value) {
  this.storage[this.count + this.offset] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  this.count && this.count--;
  var temp = this.storage[this.offset];
  delete this.storage[this.offset];
  this.offset++;
  return temp;
};
Queue.prototype.size = function() {
  return this.count;
};
