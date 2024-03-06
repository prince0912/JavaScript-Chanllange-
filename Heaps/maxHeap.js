class maxHeap{
    constructor(){
        // this is where the array that represents our heap will be stored
        this.heap = [];
    }

    // index of the parent node

    parent(index){
        return Math.floor((index-1)/2)
    }

    // index of left child
    leftChild(index){
        return (index * 2)+1;
    }
    
    //index of right child 
    rightChild(index){
        return (index * 2)+2;
    }

    isLeaf(index){
        return(
            index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1
        );
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }



    add(element){
        // add element to the end of the heap
        console.log()
        this.heap.push(element);
        // move element up until it's in the correct position
        this.heapifyUp(this.heap.length - 1);
    }


    heapifyUp(index){
        let currentIndex = index, 
        parentIndex  = this.parent(currentIndex);

        // while we haven't reached the root node and the current element is greater than its parent node
        while(currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]){
            //swap
            this.swap(currentIndex, parentIndex);
             // move up the binary heap
              currentIndex = parentIndex;
              parentIndex = this.parent(parentIndex)
        }
    }

     // removes and returns max elemen

     extractMax(){
        if(this.heap.length < 1){
            return 'heap is empty'
        }
        // get max and last element
        const max = this.heap[0];
        const  end = this.heap.pop(); 

        // reassign first element to the last element
        this.heap[0] = end;

        //  // heapify down until element is back in its correct position
        this.heapifyDown(0);

        // return the max
        return max;
     }


     heapifyDown(index){
        // if the node at index has children
        if(!this.isLeaf(index)){
            //get indices of children
            let leftChildIndex = this.leftChild(index),
                rightChildIndex = this.rightChild(index)

            // start out largest index at parent index
            largestIndex = index;

            // if the left child > parent 
            if(this.heap[leftChildIndex] > this.heap[largestIndex]){
                // reassign largest index to left child index
                largestIndex = leftChildIndex;
            }

        }

        // if the right child > element at largest index(either parent or left child)
        if(this.heap[rightChildIndex] >= this.heap[largestIndex]){
            // reassign largest index to right child index
            largestIndex = rightChildIndex;
        }


        //if the larget index is not the parent index
        if(largestIndex !== index){
            // swap
            this.swap(index, largestIndex);
            // recursively move down the heap
            this.heapifyDown(largestIndex);
        }
     }

     buildHeap(array){
        this.heap = array;
        // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
        for(let i = Math.floor(this.heap.length/2); i >= 0; i--){
            this.heapifyDown(i);
        }
     }

     peek(){
        return this.heap[0];
     }

     print(){
        let i = 0;
        while(!this.isLeaf(i)){
            console.log("PARENT:", this.heap[i]);
            console.log("LEFT CHILD:", this.heap[this.leftChild(i)]);
            console.log("RIGHT CHILD",this.heap[this.rightChild(i)]);
            i++;
        }
     }
}


const minHeap = new  maxHeap();
minHeap.add(4);
minHeap.add(2);
minHeap.add(7);
minHeap.add(1);
minHeap.add(9)

console.log(minHeap.heap)
console.log(minHeap.print())
