class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findAncetorUsingInterative(root, target){
   
 if(!root ){
    return []
 }

 const stack = []
 const ancestors = new Map();

 stack.push(root);

 while(stack.length > 0){
    const currentNode = stack.pop();

    if(currentNode.right){
        stack.push(currentNode.right)
        ancestors.set(currentNode.right, currentNode)
    }

    if(currentNode.left){
        stack.push(currentNode.left);
        ancestors.set(currentNode.left, currentNode);
    }
 }

 const result = [];
 let current = target;

 while(ancestors.has(current)){
    current = ancestors.get(current);
    result.push(current.value)
 }
 return result;
}





// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right= new TreeNode(8)


const targetNode = 5;
console.log(findAncetorUsingInterative(root, targetNode))