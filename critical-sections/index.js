
/*
Complete the function findCriticalConnections
The function takes integers noOfServers, noOfConnections and 2D integer array as parameters.
Returns a 2D integer array.
*/
const buildGraph = (n, connections)=>{
    const graph = new Array(n).fill(0);
    for(let i=0; i < graph.length; i++) {
        graph[i] = [];
    }
    for(let i=0 ;i < connections.length; i++) {
        const [a, b] = connections[i];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}
const dfs = (graph, node, visited, parent, arrival, departure, oldestArrival, timestamp, result) => {
    // mark node as visisted
    visited[node] = 1;
    // arrival time
    arrival[node] = timestamp.ts++;
    oldestArrival[node] = arrival[node];
    // check each neighbors
    for(const neighbor of graph[node]) {
        // if not already visisted
        if(!visited[neighbor]) {
            parent[neighbor] = node;
            const val = dfs(graph, neighbor, visited, parent, arrival, departure, oldestArrival, timestamp, result);
            oldestArrival[node] = Math.min(oldestArrival[node], val);
        } else {
            // cycle for back edge or departure of parent node is not set
            if(parent[node] !== neighbor) {
                oldestArrival[node] = Math.min(oldestArrival[node], arrival[neighbor]);
            }
        }
    }
    // check if tree edge is critical or not
    if(oldestArrival[node] === arrival[node] && node !== 0) {
        result.push([node, parent[node]])
    }
    // updte departure time
    departure[node] = timestamp.ts++;
    return oldestArrival[node];
}
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    const graph = buildGraph(n, connections);
    const arrival = new Array(n).fill(-1);
    const departure = new Array(n).fill(-1);
    const timestamp = {ts: 0};
    const oldestArrival = new Array(n).fill(-1);
    const visited = new Array(n).fill(0);
    const parent = new Array(n).fill(null);
    const result = [];
    dfs(graph, 0, visited, parent, arrival, departure, oldestArrival, timestamp, result);
    return result;
};
function findCriticalConnections(noOfServers, noOfConnections, connections) {
    if(connections.length === 0) {
        return [[-1, -1]] ;
    }
    const result =  criticalConnections(noOfServers, connections);
    return result.length === 0 ? [[-1, -1]] : result;

}

