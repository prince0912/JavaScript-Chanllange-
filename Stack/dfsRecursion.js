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

    dfsRecursive(start, visited = new Set()){
        visited.add(start);
    
        for(const neighobr of this.adjList.get(start)){
            if(!visited.has(neighobr)){
                this.dfsRecursive(neighobr, visited);
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
