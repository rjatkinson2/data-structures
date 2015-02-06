var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null){
      list.head = node;
    } else{
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var search = function(node){
      console.log(node.next);
      if(node.value === target){
        return true;
      }
      if(node.next === null){
        return false;
      }
      return search(node.next);
    };
    return search(list.head);
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
