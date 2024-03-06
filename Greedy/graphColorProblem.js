// Graph Coloring Problem
// Graph coloring (also called vertex coloring) is a way of coloring a graph’s vertices 
// such that no two adjacent vertices share the same color. This post will discuss a greedy algorithm
//  for graph coloring and minimize the total number of colors used.

class Graph {
    constructor(vertices){
        this.vertices = vertices;
        this.adjacencyMatrix = Array.from({length:vertices}, ()=>Array(vertices).fill(0));
    }

    addEdge(v1, v2){
        this.adjacencyMatrix[v1][v2]=1;
        this.adjacencyMatrix[v2][v1]=1;
    }

    graphColoring(){
        const result = Array(this.vertices).fill(-1);
        result[0] = 0;

        for(let vertex = 1; vertex < this.vertices; vertex++){
            result[vertex] = this.findAvailableColor(vertex, result);
        }

        return result;
    }

    findAvailableColor(vertex, result){
        const coloredVertices =new Set();

        for(let i =0; i<this.vertices; i++){
            if(this.adjacencyMatrix[vertex][i] && result[i] !== -1){
                coloredVertices.add(result[i])
            }
        }

        for(let color = 0; color < this.vertices; color++){
            if(!coloredVertices.has(color)){
                return color;
            }
        }

        return 0;


    }
}



const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);

const coloringResult = graph.graphColoring();
console.log("Vertex Colors:", coloringResult);