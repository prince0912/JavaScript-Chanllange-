class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkList{
    constructor(){
        this.head= null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }


    getSize(){
        let count = 0;
        let node  = this.head;
        while(node){
            count++
            node = node.next
        }
        return count
    }

     // Insert at the beginning of the linked list
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

    //
    insertAt(value, index){

        if(index < 0 || index > this.size){
            return 
        }

        if(index === 0){
         return this.prepend(value)
        }else{
            const node = new Node(value);
            let current = this.head;

            for(let i =0; i< index-1; i++){
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }

    // Insert a node into its correct sorted position
    insertBySortPosition(value) {
        const node = new Node(value);
    
        // If the list is empty or the new node's data is less than the head's data
        if (!this.head || value < this.head.value) {
          node.next = this.head;
          this.head = node;
          return;
        }
    
        // Find the correct position to insert the new node
        let current = this.head;
        let previous = null;
    
        while (current && value >= current.value) {
          previous = current;
          current = current.next;
        }
    
        // Insert the new node
        previous.next = node;
        node.next = current;
      }




    append(value){
        const node = new Node(value);
        // list is empty
        if(this.isEmpty()){
            this.head = node
        }else{
            // list is not empty 
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node
        }
        this.size++
    }

     removedFromIndex(index){
        if(index < 0 || index > this.size){
            return null
        }
        let removedNode

        if(index === 0){
            removedNode =this.head;
            this.head = this.head.next;
        }else{
            let current = this.head;
            for(let i = 0; i<index-1; i++){
                current = current.next;
            }
            removedNode = current.next;
            current.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

     removedFromValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--
            return value
        }else{
            let current = this.head

            while(current.next && current.next.value !== value){
                current = current.next;
            }
            if(current.next){
                const removedNode = current.next;
                current.next = removedNode.next;
                this.size--
                return value
            }
            return null
        }

    }

    display(){
        if(this.isEmpty()){
            console.log('List is Empty')
        }else{
            let current = this.head;
            let listValues = '';
            while(current){
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues)
        }
    }


    // Rearrange linked list in increasing order (Sort linked list)
    merge(left, right) {
        const mergedList = new LinkList();
        let current = mergedList.head;
    
        while (left && right) {
          if (left.data < right.data) {
            current.next = left;
            left = left.next;
          } else {
            current.next = right;
            right = right.next;
          }
          current = current.next;
        }
    
        current.next = left || right;
    
        return mergedList.head.next;
      }
    

    // Merge Sort implementation for linked list
    mergeSort(head){
        if(!head || !head.next){
            return head 
        }
        
        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        const left = head;
        const right = slow.next;
        slow.next = null;

        const sortedLeft = this.mergeSort(left);
        const sortRight = this.mergeSort(right);

        return this.merge(sortedLeft, sortRight);

    }

    sort(){
        this.head = this.mergeSort(this.head);
    }




}

const List = new LinkList();

  console.log(`List is empty : ${List.isEmpty()}`);
  List.display()
  console.log(`List size is : ${List.getSize()}`);
  List.prepend(10);
  List.display()
  List.prepend(20);
  List.insertBySortPosition(25);
  List.display()
  List.prepend(30);
  List.display()
  List.append(40);
  List.display()
  List.insertAt(50,0) 
  List.display()
  List.insertAt(60,2)
  List.display()
  List.insertAt(70,6)
  List.display()

  List.sort();
  console.log('----sort link list -------');
  List.display();

  console.log(List.getSize())
  // remove from zero index
  console.log(List. removedFromIndex(0))
  List.display()
  
  //remove from 
  console.log(List. removedFromIndex(10))
  List.display()
  
  console.log(List. removedFromIndex(1))
  List.display()
  
  console.log(List. removedFromIndex(4))
  List.display()
  
  console.log(List.removedFromValue(10))
  List.display()
  
  console.log(List.removedFromValue(30))
  List.display()
  
  