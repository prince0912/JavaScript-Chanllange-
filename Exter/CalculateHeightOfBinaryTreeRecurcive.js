class TreeNode{
  constructor(val, left=null, right=null)
  {
    this.val = val;
    this.left = left;
    this.right = right;
  } 
}

function CalculateHeightOfBinaryTreeItrative(root)
{
  if(!root)
  {
    return 0;
  }
  
 const queue =[root]
 let height = 0;
 
 while(queue.length > 0)
 {
   const levelSize =queue.length;
   
   for(let i =0; i<levelSize; i++)
   {
     const node = queue.shift();
     
     if(node.left)
     {
       queue.push(node.left)
     }
     if(node.right)
     {
       queue.push(node.right)
     }
     
   }
   height++
 }
 return height
  
}


const root =  new TreeNode(1);
 root.left = new TreeNode(2);
 root.right = new TreeNode(3);
root.left.left  = new TreeNode(4);
 root.left.right = new TreeNode(5);
 root.right.left= new TreeNode(6);
 root.right.right= new TreeNode(7);
 root.left.left.left  = new TreeNode(4);

console.log(CalculateHeightOfBinaryTreeItrative(root))