// Inorder Tree Traversal –  Recursive
//  Construct the following tree
//                1
//              /   \
//             /     \
//            2       3
//           /      /   \
//          /      /     \
//         4      5       6
//               / \
//              /   \
//             7     8

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function inorderTravesal(node, result=[]){
    if(node){
        inorderTravesal(node.left, result)
        result.push(node.value)
        inorderTravesal(node.right,result)
    }
    return result
}


function postorderTravesal(node, result=[]){
    if(node){
        postorderTravesal(node.left, result);
        postorderTravesal(node.right,result);
        result.push(node.value)
    }
    return result
}


function preorderTravesal(node, result=[]){
    if(node){
        result.push(node.value)
        preorderTravesal(node.left, result)
        preorderTravesal(node.right, result)
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


const inorderResult = inorderTravesal(root);
console.log("Recursive Inorder Traversal:", inorderResult);

const postorderResult = postorderTravesal(root);
console.log("Recursive postorder Traversal:", postorderResult);

const preorderResult = preorderTravesal(root);
console.log("Recursive preorder Traversal:", preorderResult);