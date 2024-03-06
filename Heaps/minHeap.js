class minHeap{
    constructor(){
        this.heap = [];
    }

    leftChildIndex(parentIndex){
        return 2 * parentIndex + 1;
    }

    rightChildIndex(parentIndex){
         return 2 * parentIndex +2;
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index){
        return this.leftChildIndex(index) < this.heap.length;
    }
    
    hasRightChild(index){
        return this.rightChildIndex(index) < this.heap.length;
    } 

    hasParent(index){
        return  this.getParentIndex(index) >= 0;
    }

    leftChild(index){
        return this.heap[this.leftChildIndex(index)];
    }

    rightChild(index){
        return this.heap[this.rightChildIndex(index)];   
    }

    parent(index){
        return this.heap[this.getParentIndex(index)]
    }

 
    swap(index1, index2){
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    peek(){
        if(this.heap.length === 0){
            return null;
        }
        return this.heap[0]
    }

    remove(){
        if(this.heap.length === 0){
            return null;
        }

        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item){
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length -1;
        while(this.hasParent(index) && this.parent(index) >this.heap[index]){
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.leftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                smallerChildIndex = this.rightChildIndex(index);
            }
            if(this.heap[index] < this.heap[smallerChildIndex]){
                break;
            }
            else{
                this.swap(index, smallerChildIndex)
            }
            index = smallerChildIndex;
        }
    }

    printHeap(){
        var heap = ` ${ this.heap[0] } `
        for(var i = 1; i<this.heap.length; i++){
            heap += `${this.heap[i]} `;
        }
        console.log(heap);
    }
}

var heap = new minHeap()
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);

heap.printHeap();

console.log(heap.peek());
console.log(heap.remove());

heap.printHeap();
