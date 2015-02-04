var Queue = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var removal = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size+removal] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0){size--;}
    var item = storage[removal];
    delete storage[removal];
    if(storage[removal+1]){removal++;}
    return item;
  };

  someInstance.size = function(){
    return size;
  };

  someInstance.store = function(){
    return [size,removal,storage];
  };

  return someInstance;
};
