var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node){
  node = node || this;
  var test = (node.value === target);
  if(node.children.length !== 0){
    for (var i = 0; i < node.children.length; i++) {
      test = test || this.contains(target, node.children[i]);
    }
  }
  return test;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
