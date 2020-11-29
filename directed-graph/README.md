# Directed Graph
- BFS is used to find length i.e. count hops
- BFS is used to find shortest path
- Most of the time DFS is used
- BFS and DFS tree are same on directed graph
- BFS will not help to find out cycle
- DFS is used to find out cycle in graph
# DFS
- Back edge (after visited, departure time will not be set)
- Cross edge (after visited, departure time will be set)
- Forward edge (after visited, departure time will be set)
# Detect cycle
```
void DFS(int s) {
    // visit current node
    visited[s] = 1;
    arrival[s] = timestamp++;
    for w in adjList[s] {
        if(visited[w] === 0) {
            if(DFS(w)){
                return true;
            }
        } else {
            // possibility of cycle
            // three type of edges are possible, back edge, forward cycle and cross edge
            if(departure time of neighbor is not set ) {
                return true;
            }
        }
    }
    departure[s] = timestamp++;
    return false;
}
```
https://www.youtube.com/watch?v=1CdgY5KTQQE&list=PL1w8k37X_6L9IfRTVvL-tKnrZ_F-8HJQt&index=9
# Topological sort
```
topological = [];
void DFS(int s) {
    // visit current node
    visited[s] = 1;
    arrival[s] = timestamp++;
    for w in adjList[s] {
        if(visited[w] === 0) {
            if(DFS(w)){
                return true;
            }
        } else {
            // possibility of cycle
            // three type of edges are possible, back edge, forward cycle and cross edge
            if(departure time of neighbor is not set ) {
                return true;
            }
        }
    }
    departure[s] = timestamp++;
    topological.unshift(s); // append
    return false;
}
```