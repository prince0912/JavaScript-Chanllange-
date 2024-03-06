// Inorder Tree Traversal –  Iterative 

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function inorderIterative(root){
    const result = [];
    const stack = [];

    let current = root;

    while(current !== null || stack.length > 0){
        while( current !== null){
            stack.push(current);
            current = current.left;
        }
         current  = stack.pop();
         result.push(current.value);
         current = current.right;
    }
    return result;
}


function postorderIterative(root){
    const result = [];
     // Create two stacks 
    const stack1 = [];
    const stack2 = [];

     // Push root to first stack 
     stack1.push(root);

     // Run while first stack is not empty 
     while(stack1.length > 0){
        // Pop an item from s1 and Push it to s2 
        let current = stack1.pop();
        stack2.push(current)

         // Push left and right children of  stack1
        if(current.left){
            stack1.push(current.left)
        }

        if(current.right){
            stack1.push(current.right)
        }

     }

     while(stack2.length > 0){
        result.push(stack2.pop().value);
     }

     return result

}



function preorderIterative(root){
    const result = [];
    const stack = [root];

    while(stack.length > 0){
        const current = stack.pop();

        if(current){
            result.push(current.value)

            if(current.right){
                stack.push(current.right)
            }


            if(current.left){
                stack.push(current.left)
            }
        }
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


const inorderResult = inorderIterative(root);
console.log("Iterative Inorder Traversal:", inorderResult);

const postorderResult = postorderIterative(root);
console.log("Iterative post Traversal:", postorderResult);

const preorderResult = preorderIterative(root);
console.log("Iterative preorder Traversal:", preorderResult);



