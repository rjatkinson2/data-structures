var Queue = function(){
  // FIFO
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
  };

  someInstance.dequeue = function(){
    count--;
    return storage[count];
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
