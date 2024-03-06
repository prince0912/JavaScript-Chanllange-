class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function areIdenticalTreesRecursive(root1, root2){
  const stack1=[root1];
  const stack2 =[root2];
  
  while(stack1.length > 0 && stack2.length > 0)
  {
    const node1 = stack1.pop();
    const node2 = stack2.pop();
    
    if(!node1 && !node2)
    {
      continue
    }
    
    if(!node1 || !node2 || node1.val !== node2.val)
    {
      return false;
    }
    
    stack1.push(node1.left, node1.right);
    stack2.push(node2.left, node2.right);
  }
  return true
}


const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(4));

console.log(tree1)

console.log(areIdenticalTreesRecursive(tree1, tree2)); // true
console.log(areIdenticalTreesRecursive(tree1, tree3)); // false
