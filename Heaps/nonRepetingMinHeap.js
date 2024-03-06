// Find first `k` non-repeating characters in a string in a single traversal in javaScript
class minHeap{
    constructor(){
        this.heap =[]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin(){
        if(this.heap.length === 0){
            return null;
        }
        const minValue = this.heap[0];
        const lastValue = this.heap.pop();

        if(this.heap.length > 0){
            this.heap[0] = lastValue;
            this.heapifyDown();
        }
        return minValue;
    }

    heapifyUp(){
        let index = this.heap.length -1 ;
        while(index > 0){
            const parentIndex = Math.floor((index - 1)/2);
            if(this.heap[index].count < this.heap[parentIndex].count){
                [this.heap[index], this.heap[parentIndex]]= [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            }else{
                break;
            }
        }
    }

    heapifyDown(){
        let index = 0;

        while(true){
            const leftChildIndex = 2 * index +1;
            const rightChildIndex = 2 * index +2;
            let smallestChildIndex = index;

            if(leftChildIndex < this.heap.length && this.heap[leftChildIndex].count < this.heap[smallestChildIndex].count){
                smallestChildIndex = leftChildIndex;
            }

            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex].count < this.heap[smallestChildIndex].count){
                smallestChildIndex = rightChildIndex;
            }

            if(index !== smallestChildIndex){
                [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]];
                index = smallestChildIndex;
            }else {
                break;
            }

        }
    }

}

function firstKNonRepeatingCharacters(str, k){
    const charCount = new Map();
    const heap = new minHeap();

    for(let i = 0; i < str.length; i++){
        const currentChar = str[i]
    
    charCount.set(currentChar, (charCount.get(currentChar) || 0) + 1);

    heap.insert({char: currentChar, count:charCount.get(currentChar)});

    while(heap.heap.length > 0  && charCount.get(heap.heap[0].char) !== heap.heap[0].count ){
    heap.extractMin();    
    }
}

    const result =[];
    for(let i = 0; i < k; i++){
        const minElement = heap.extractMin();
        if(!minElement){
            break;
        }
        result.push(minElement.char);
    }

    return result;
}

const inputString = "abacabad";
const k = 3;
const result = firstKNonRepeatingCharacters(inputString, k);
console.log(result); // Output: ['b', 'c', 'd']

