

var Graph = function(){
  this.storage = [];
};

Graph.prototype.addNode = function(node){
  var node = [node];
  this.storage.push(node);
};

Graph.prototype.contains = function(node){
  var graph = this.storage;
  for(var i = 0; i < graph.length; i++){
    if(graph[i][0] === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var graph = this.storage;
  for(var i = 0; i < graph.length; i++){
    if(graph[i][0] === node){
      graph.splice(i,1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var graph = this.storage;
  var fNode;
  for(var i = 0; i < graph.length; i++){
    if(graph[i][0] === fromNode){
      fNode = graph[i];
    }
  }
  if(fNode){
    for(var j = 1; j < fNode.length; j++){
      if(fNode[j] === toNode){
        return true;
      }
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var graph = this.storage;
  for(var i = 0; i < graph.length; i++){
    if(graph[i][0] === fromNode){
      graph[i].push(toNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var graph = this.storage;
  for(var i = 0; i < graph.length; i++){
    for(var j = 0; j < graph[i].length; j++){
      if(graph[i][0] === fromNode && graph[i][j] === toNode){
        graph[i].splice(j,1);
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  var graph = this.storage;
  for(var i = 0; i < graph.length; i++){
    cb(graph[i][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



