// find largest value in each row of the tree  


class Node{
    constructor(value)
    {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  
  function findLargestValuesInEachRow(root)
  {
    if(!root)
    {
      return [];
    }
    
    const result = []
    const queue = [root];
    
    while(queue.length > 0){
      let rowMax = -Infinity;
      const levelSize = queue.length;
      
      for(let i = 0 ; i< levelSize; i++)
      {
        const node = queue.shift();
        rowMax =Math.max(rowMax,node.value)
      
      
      if(node.left)
      {
        queue.push(node.left)
      }
      
      if(node.right)
      {
        queue.push(node.right)
      }
    }
    result.push(rowMax);
    
  }
  return result;
  }
  
  let root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.left.left= new Node(40);
  root.left.right= new Node(50);
  root.right.left= new Node(60);
  root.right.right= new Node(15);
  console.log( findLargestValuesInEachRow(root))
  