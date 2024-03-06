class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function areTreesIdenticalRecursive(root1 , root2){
    if(!root1 && !root2){
        return true;
    }


    if(root1 && root2){
        return(
            root1.value === root2.value && areTreesIdenticalRecursive(root1.left, root2.left) 
            && areTreesIdenticalRecursive(root2.right, root2.right)
        )

    }

    return false

}


// Example usage:
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(areTreesIdenticalRecursive(tree1, tree2));