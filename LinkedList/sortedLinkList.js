class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class sortedLinkList{
    constructor(){
        this.head = null;
    }

    // Insert a node into its correct sorted position
    insertBySortPosition(value) {
        const newNode = new Node(value);
    
        // If the list is empty or the new node's data is less than the head's data
        if (!this.head || value < this.head.value) {
          newNode.next = this.head;
          this.head = newNode;
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
        previous.next = newNode;
        newNode.next = current;
      }
    

    printList(){
        let current = this.head;
        let str = ""
        while(current){
            str += `${current.value} `;
            current=current.next
        }
        console.log(str)
    }

}

const LinkedList = new sortedLinkList();
LinkedList.insertBySortPosition(20);
LinkedList.printList();
LinkedList.insertBySortPosition(30);
LinkedList.printList();
LinkedList.insertBySortPosition(10);
LinkedList.printList();
LinkedList.insertBySortPosition(50);
LinkedList.printList();
LinkedList.insertBySortPosition(15);
LinkedList.printList();

