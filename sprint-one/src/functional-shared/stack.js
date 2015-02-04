var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.data = {};
  someInstance.size = 0;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(item){
	this.data[size] = item;
	this.size++;
};

stackMethods.pop = function(){
	if(this.size > 0){size--;}
	var result = data[size];
	delete this.data[size];
	return result;
};

stackMethods.size = function(){
	return this.size;
};

