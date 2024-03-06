class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function areTreesIdenticalIterative(root1, root2){
    const stack1 = [root1];
    const stack2 = [root2];

    while(stack1.length > 0 && stack2.length > 0 ){
        const node1 = stack1.pop();
        const node2 = stack2.pop();

        if(!node1 && !node2 ){
            continue;
        }

        if(!node1 || !node2 || node1.value  !== node2.value){
            return false;
        }

        stack1.push(node1.right, node1.left);
        stack2.push(node2.right, node2.left);
    }
    return true;

}

// Example usage:
const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);
tree3.right = new TreeNode(3);

const tree4 = new TreeNode(1);
tree4.left = new TreeNode(2);
tree4.right = new TreeNode(3);

console.log(areTreesIdenticalIterative(tree3, tree4)); 