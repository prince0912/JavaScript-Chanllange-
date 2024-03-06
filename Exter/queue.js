
class Queue {
  constructor(){
    this.items =[]
  }
  // enqueue method is add element from last end 
  enqueue(element){
    this.items.push(element)
  }
  
  //dequeue method is remove element from front end
  // shift method is use to remove item from front
  dequeue(){
    return this.items.shift()
  }
  
  //  this method is used to check queue is empty or not
  isEmpty(){
     return this.items.length === 0
  }
  
  // this method return the fornt element of the queue
  peek(){
    if(!this.isEmpty())
    {
      return this.items[0]
    }
    return null
  }
  
  size(){
      return this.items.length;
  }
  
  print(){
    console.log(this.items.toString())
  }
  
}


const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(40)
queue.enqueue(30)

console.log(queue.size())
console.log(queue.print())
console.log(queue.peek())
queue.dequeue()
console.log(queue.print())




