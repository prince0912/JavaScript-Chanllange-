// Define Node 

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

// Create  LinkList 
class  LinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // add(element) – It adds an element at the end of the list. 

    apend(element){
        // create a new Node 
        let node = new Node(element);

        let current ;
        // if list is empty 
        if(this.head === null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node 
        }

        this.size++
    }
    
//  insertAt(element, index) – It inserts an element at the given index in a list.

    insertAt(element, index){
        if(index < 0 || index > this.size ){
            return console.log("Please insert vaild index")
        }else{
            // create a new node 
            const node = new Node(element);
            let current , prev ;

            current = this.head
            // add the element of first index
            if(index === 0){
                node.next = this.head
                this.head = node
            }else{
                current = this.head;
                let it = 0
                while(it<index){
                    it++;
                    prev = current;
                    current = current.next;
                }
                
                node.next = current;
                prev.next = current
            }
        }
    }

    //  removeFrom(index) – It removes and returns an element from the list from the specified index 

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("Please enter  a vaild index")
        }else{
            let current, prev, it
            current = this.head;
            prev = current;

            if(index === 0){
                this.head = current.next;
            }else{
                while(it < index ){
                    it++;
                    prev = current;
                    current =current.next;
                }
                prev.next = current.next;
            }
            this.size--;
            return current.element
        }


    }
    // removeElement(element) – This method removes element from the list. It returns the removed element, 
    //or if it’s not found it returns -1. 

    removeElement(element){
        let current = this.head;
        let prev = null;

        while( current != null){
            if(current.element === element){
                if(prev === null){
                    this.head = current.next
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.element
            }
            prev = current;
            current =current.next;
        }
        return -1;
    }

// indexOF 
    indexOf(element){
        let count = 0;
        let current = this.head;

        while(current != null){
            if(current.element === element){
                return count
            }
            count++;
            current = current.next
        }
        return -1
    }

    isEmpty(){
        return this.size === 0;
    }

    size_of_list(){
        console.log(this.size)
    }

    printList(){
        let current = this.head;
        let str = "";
        while(current){
            str += current.element + "";
            current = current.next;
        }
        console.log(str)
    }

}

const List  = new LinkList();
console.log(List.isEmpty());
List.apend(10);
List.printList();
console.log(List.size_of_list())
List.apend(20);
List.apend(30);
List.apend(40);
List.apend(50);
List.printList();
console.log(List.removeElement(50));
List.insertAt(60,2);



