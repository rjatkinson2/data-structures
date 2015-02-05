var Queue = function(){
  // FIFO
  var someInstance = {};
  var count = 0;
  var offset = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count+offset] = value;
    count++;
  };

  someInstance.dequeue = function(){
    count && count--;
    var temp = storage[offset];
    delete storage[offset];
    offset++;
    return temp;
  };

  someInstance.size = function(){
    return count;
  };
  return someInstance;
};
