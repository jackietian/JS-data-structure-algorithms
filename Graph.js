class Vertex {
    constructor(label) {
        this.label = label;
    }
}

class Graph {
    constructor(vertexes) {
        this.vertexes = vertexes;
        this.edges = 0;
        this.adj = [];
        for (let i = 0; i < this.vertexes; i++) {
            this.adj[i] = [];
        }
        this.visited = [];
        for( let i = 0; i < this.vertexes; i++) {
            this.visited[i] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph() {
        for(let i = 0; i < this.vertexes; i++) {
            console.log(i + ' > ' + this.adj[i].join(' '));
        }
    }

    dfs(v) {
        this.visited[v] = true;
        console.log('visited vertex > ' + v);

        const adjNodes = this.adj[v];
        adjNodes.forEach(w => {
            if(!this.visited[w]) {
                this.dfs(w);
            }
        });
    }

    bfs(v) {
        this.visited[v] = true;
        let queue = new Array();
        queue.push(v);
        while(queue.length > 0) {
            let curr = queue.shift();
            console.log('visited vertex > ' + curr);
            let adjNodes = this.adj[curr];
            console.log(adjNodes);
            console.log(this.visited);
            adjNodes.forEach(w => {
                if(!this.visited[w]) {
                    this.visited[w] = true;
                    queue.push(w);
                }
            })
        }
    }
}

let g = new Graph(5);
g.addEdge(0, 1); 
g.addEdge(0, 2); 
g.addEdge(1, 3); 
g.addEdge(2, 4); 
g.showGraph();
console.log('======dfs');
// g.dfs(0);
console.log('======bfs');
g.bfs(0);