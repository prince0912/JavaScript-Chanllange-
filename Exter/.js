class Stack {
  constructor(){
    this.items =[]
  }
  
  // push method add a element in Stack
  
  push(element){
    this.items.push(element)
  }
  
  // pop method remove element from Stack
  pop(){
    return this.items.pop()
  }
  
  // peek method is return top element of Stack
  peek(){
    return this.items[this.items.length-1]
  }
  
  // isEmpty is check Stack is empth or
  isEmpty()
  {
    return this.items.length === 0
  }
  
  //size
  size(){
    return this.items.length
  }
  
  print(){
    console.log(this.items.toString())
  }
  
  
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(10)
stack.push(40)
stack.push(20)
stack.push(30)

console.log(stack.size())
stack.print()

console.log(stack.peek())
stack.pop()
console.log(stack.peek())
console.log(stack.size())
stack.print()




