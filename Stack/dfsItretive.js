class Graph{
    constructor(){
        this. adjList = new Map();
    }


    addVertex(vertex){
        this.adjList.set(vertex, []);
    }

    addEdge(vertex, neighobr){
        this.adjList.get(vertex).push(neighobr);
        this.adjList.get(neighobr).push(vertex);
    }

    dfsIterative(start){
        const stack = [start];
        const visited = new Set();
    
        while(stack.length > 0){
            const current = stack.pop();
            if(!visited.has(current)){
                console.log(current);
                visited.add(current);


                for(const neighobr of this.adjList.get(current)){
                    stack.push(neighobr)
                }

            }
        }
        
    }

}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);


graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(2,4);
graph.addEdge(2,5);

console.log('Recursive dfs')
console.log(graph.dfsIterative(1));


