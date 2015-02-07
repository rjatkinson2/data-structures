var BinarySearchTree = function(value){
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = BinarySearchTree(value);
  var currentTree = this;

  var recursiveInsert = function(tree,val) {
    if (tree.value < val) {
      if (tree.right === null) {
        tree.right = newTree;
      } else {
        recursiveInsert(tree.right, val);
      }
    } else {
      if (tree.left === null) {
        tree.left = newTree;
      } else {
        recursiveInsert(tree.left, val);
      }
    }
  };

  recursiveInsert(currentTree, value);
};
BinarySearchTree.prototype.contains = function(value) {
  var currentTree = this;
  var recursiveFind = function(tree,val){
    if(tree.value === val){
      return true;
    }else if(tree.value < val && tree.right){
      return recursiveFind(tree.right,val);
    }else if(tree.value >= val && tree.left){
      return recursiveFind(tree.left,val);
    }
    return false;
  };

  return recursiveFind(currentTree,value);
};
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var currentTree = this;
  var dflog = [];
  var recursiveCallback = function(tree,parent,callBack){
    dflog.push(tree.value);
    if(tree.left !== null){
      recursiveCallback(tree.left,tree,callBack);
    }else if(tree.right !== null){
      recursiveCallback(tree.right,tree,callBack);
    }else{

    }
  };
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
