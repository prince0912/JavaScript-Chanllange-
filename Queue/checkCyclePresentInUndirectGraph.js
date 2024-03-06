// Check if an undirected graph contains a cycle or not

class Graph {
    constructor(vertices){
        this.vertices = vertices;
        this.adjList = new Map();

        for(const vertex of vertices){
            this.adjList.set(vertex, [])
        }
    }

    addEdge(vertex1, vertex2){
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    }

    isCyclicWithGivenCycle(cycle){
        const visited = new Map();
        for(const vertex of this.vertices){
            visited.set(vertex, false);
        }
        // Start DFS from the first node of the given cycle
        if(this.isCyclicUtil(cycle[0], visited, null, cycle)){
            return true
        }
        return false;
    }

    isCyclicUtil(vertex, visited, parent, cycle){
        visited.set(vertex, true);

        for(const neighbor of this.adjList.get(vertex)){
            if(!visited.get(neighbor)){
                if(this.isCyclicUtil(neighbor, visited, vertex, cycle)){
                    return true;
                }
            } else if(neighbor !== parent && cycle.includes(neighbor)){
                return true;
            }
        }
        return false
    }
}

const vertices = [0, 1, 2, 3];
const graph = new Graph(vertices);


graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);

const givenCycle = [1, 2, 0];

console.log('Given cycle is present in the graph:', graph.isCyclicWithGivenCycle(givenCycle)); // Output: true