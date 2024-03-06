class circularQueue{
    constructor(size){
        this.element = [];
        this.size = size;
        this.length = 0;
        this.front = 0;
        this.rear = -1;
    }

    isEmpty(){
        return(this.length == 0);
    }

    enqueue(element){
        if(this.length > this.size){
            throw(new Error("Maximum length exceeded"))
        }
        this.element[(this.rear+1)%(this.size)] = element;
        this.rear++
        this.length++
    }

    dequeue(){
        if(this.isEmpty()){
            throw(new Error("No element in the queue"))
        }
        const value = this.getFront()
        this.element[(this.front)%(this.size)] =null;
        this.front++
        this.length--
        return value;
    }

    getFront(){
        if(this.isEmpty()){
            throw(new Error("No element in the queue"))
        }
        return this.element[(this.front)%(this.size)]
    }
    clear(){
        this.element = new Array();
        this.length = 0;
        this.rear = 0;
        this.front = -1;
    }

    print(){
        for(let i = 0; i <= this.element.length; i++){
            console.log([this.element[i]])
        }
    }
}

const queue = new circularQueue(4);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.isEmpty());
console.log(queue.getFront());
queue.dequeue()
console.log(queue.isEmpty());
