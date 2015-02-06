var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list[value] = null;
    } else if (list.tail === null) {
      list.head.next = node;
      list[value] = node;
    } else {
      list.tail.next = node;
      list[value] = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    delete list[list.head.value];
    list.head = list.head.next;

    return temp;
  };

  list.contains = function(target){
    var lookup = JSON.stringify(target);
    return (list.hasOwnProperty(lookup));
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
