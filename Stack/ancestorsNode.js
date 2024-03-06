// Find ancestors of a given node in a binary tree

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function findAncestor(root, traget, ancestors=[]){
    if(!root){
        return []
    }

    if(root.value === traget){
        return ancestors
    }

    // check left subtree 

    const leftAncestor = findAncestor(root.left,  traget, [...ancestors, root.value])
        if(leftAncestor.length > 0){
            return leftAncestor
        }
    
    // right subtrr

    const rightAncestor = findAncestor(root.right, traget, [...ancestors, root.value])
    return rightAncestor    
    

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

const tragetNode = 7;
console.log(findAncestor(root, tragetNode))
