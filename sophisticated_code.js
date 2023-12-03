/* sophisticated_code.js */

// Author: John Doe
// Description: This code implements a complex algorithm to find the minimum spanning tree of a weighted graph using Prim's algorithm.

class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.weights = [];
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
    }

    addEdge(vertex1, vertex2, weight) {
        this.edges.push([vertex1, vertex2]);
        this.weights.push(weight);
    }

    findMinimumSpanningTree() {
        const numVertices = this.vertices.length;
        const mst = new Array(numVertices);
        const visited = new Array(numVertices);
        const keys = new Array(numVertices).fill(Infinity);
        const parent = new Array(numVertices).fill(-1);

        keys[0] = 0;

        for (let i = 0; i < numVertices - 1; i++) {
            const minKeyIndex = this.getMinKeyIndex(keys, visited);
            visited[minKeyIndex] = true;

            for (let j = 0; j < numVertices; j++) {
                if (this.weights[minKeyIndex][j] !== 0 && !visited[j] && this.weights[minKeyIndex][j] < keys[j]) {
                    parent[j] = minKeyIndex;
                    keys[j] = this.weights[minKeyIndex][j];
                }
            }
        }

        for (let i = 1; i < numVertices; i++) {
            mst[i] = [this.vertices[i], this.vertices[parent[i]], this.weights[i][parent[i]]];
        }

        return mst;
    }

    getMinKeyIndex(keys, visited) {
        let minValue = Infinity;
        let minIndex = -1;

        for (let i = 0; i < keys.length; i++) {
            if (!visited[i] && keys[i] < minValue) {
                minValue = keys[i];
                minIndex = i;
            }
        }

        return minIndex;
    }
}

// Usage:

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 5);
graph.addEdge("D", "C", 8);

const minimumSpanningTree = graph.findMinimumSpanningTree();

console.log("Minimum Spanning Tree:");
for (const edge of minimumSpanningTree) {
    console.log(`${edge[0]} - ${edge[1]}, Weight: ${edge[2]}`);
}