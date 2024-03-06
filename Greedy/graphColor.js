class Graph{
    constructor(vertices){
        this.vertices = vertices;
        this.adjacencyList =  new Map();
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList.has(vertex1)){
            this.adjacencyList.set(vertex1, []);
        }
        if(!this.adjacencyList.has(vertex2)){
            this.adjacencyList.set(vertex2,[])
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    greedycoloring(){
        const result = new Map();
        const availableColors = new Set();

        this.adjacencyList.forEach((neighbors, vertex)=>{
            result.set(vertex, -1);
        });

        this.adjacencyList.forEach((neighbors, vertex) =>{
            neighbors.forEach(neighbor =>{
                if(result.get(neighbor) !== -1 ){
                    availableColors.add(result.get(neighbor));
                }
            })

            let color = 0;
            while(availableColors.has(color)){
                color++
            }

            result.set(vertex, color);
            availableColors.clear();
        })

        return result;
    }

    
}

const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);

const coloringResult = graph.greedycoloring();
console.log("Vertex Coloring:", coloringResult);