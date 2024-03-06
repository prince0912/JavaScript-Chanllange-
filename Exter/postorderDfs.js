class Node{
  constructor(value)
  {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function dfs(root)
{
  let out =[];
  postorder(root, out);
  return out;
}


function postorder(root, out)
{
  if(root === null) return;
 
  root.left && postorder(root.left, out);
  root.right && postorder(root.right, out);
  out.push(root.value);
  
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left= new Node(40);
root.left.right= new Node(50);
root.right.left= new Node(60);
root.right.right= new Node(70);
console.log(dfs(root))
