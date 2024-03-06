class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    merge(left, right) {
    const mergedList = new LinkedList();
    let current = mergedList.head;

    while (left && right) {
      if (left.value < right.value) {
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

    mergeSort(head){
        if(!head || !head.next){
            return head
        }

        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow  = slow.next;
            fast = fast.next.next;
        }

        const left = head ;
        const right =slow.next;
        
        slow.next = null;

        const sortedLeft = this.mergeSort(left);
        const sortedRight = this.mergeSort(right);

        return this.merge(sortedLeft, sortedRight);
    }

    sort(){
        this.head = this.mergeSort(this.head);
    }

    insertEnd(value){
        const node = new Node(value);

        if(!this.head){
            this.head = node;
            return
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }

    displayList(){
        let current = this.head
        let str ='';
        while(current){
            str += `${current.value} `;
            current= current.next;
        }
        console.log(str)
    }

}

const List = new  LinkedList();
List.insertEnd(10)
List.insertEnd(20)
List.insertEnd(30)
List.displayList();

List.sort();

List.displayList()


