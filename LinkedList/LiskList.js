// Implement the Linked List 

class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  
  class LinkedList{
    constructor()
    {
      this.head = null;
      this.size = 0;
    }
    
    isEmpty()
    {
      return this.size === 0;
    }
    
    getSize(){
      return this.size
    }
    
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next = this.head;
        this.head = node;
      }
      this.size++
    }
    
    
    // insert node on give index
    
    insert(value, index){
      // if index is invlide
      if(index<0 && index>this.size){
        return 
      }
      // if index is zero
      if(index === 0){
        return this.prepend(value)
      }
      else{
        const node = new Node(value)
        let prev = this.head;
        for(let i =0; i< index-1; i++){
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++
      }
    }
    
    
    append(value){
      const node = new Node(value)
      //if list is empty
      if(this.isEmpty()){
        this.head = node
      }else{
         //List is not empty
         let prev = this.head;
         while(prev.next){
           prev = prev.next
         }
         prev.next = node
      }
        //size is increment 
      this.size++
      }
      
      
      removedFrom(index){
        if(index < 0 || index > this.size)
        {
          return null
        }
        let removedNode
        if(index=== 0){
          removedNode = this.head;
          this.head= this.head.next
        }else{
          let prev = this.head;
          for(let i = 0 ; i<index - 1; i++)
          {
            prev = prev .next;
          }
          removedNode = prev.next;
          prev.next = removedNode.next;
        }
        this.size--
        return removedNode.value
        
      }
    
    // remove node from value 
    
    removedValue(value){
      
      if(this.isEmpty()){
        return null;
      }
      if(this.head.value === value){
        this.head = this.head.next;
        this.size--
        return value
      }
      else{
        let prev = this.head
        while(prev.next && prev.next.value !== value)
        {
          prev= prev.next
        }
        if(prev.next){
          const removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--
          return value
        }
        return null
      }
      
    }
      
    print(){
      if(this.isEmpty()){
        console.log('List is empty')
      }else{
        let curr = this.head;
        let listValues = '';
        while(curr){
          listValues += `${curr.value} `
          curr = curr.next
        }
        console.log(listValues)    
      }
    }
    
    
    
  }
  
  const List = new LinkedList();
  console.log(`List is empty : ${List.isEmpty()}`);
  List.print()
  console.log(`List size is : ${List.getSize()}`);
  List.prepend(10);
  List.print()
  List.prepend(20);
  List.prepend(30);
  List.print()
  List.append(40)
  List.print()
  List.insert(50,0) 
  List.print()
  List.insert(60,2)
  List.print()
  List.insert(70,6)
  List.print()
  console.log(List.getSize())
  // remove from zero index
  console.log(List.removedFrom(0))
  List.print()
  
  //remove from 
  console.log(List.removedFrom(10))
  List.print()
  
  console.log(List.removedFrom(1))
  List.print()
  
  console.log(List.removedFrom(4))
  List.print()
  
  console.log(List.removedValue(10))
  List.print()
  
  console.log(List.removedValue(30))
  List.print()
  