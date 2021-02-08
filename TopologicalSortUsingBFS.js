const buildGraph = (N, relations) => {
    const graph = new Array(N).fill(0).map(a => []);
    for (const [u, v] of relations) {
        graph[u-1].push(v-1);
    }
    return graph;
}
/**
 * @param {number} N
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function(N, relations) {
    /**
    - Approach1: 
        - Apply topological sort
        - Also find out the depth of each component while running toplogical sort
        - get the max value of depth as an answer
    - Which topological sort algorithm can be applied?
        - DFS approach?
            - DFS doesn't gives shortest depth therefore can't be used
        - BFS approach?
            - BFS gives shortest depth therefore we should use BFS for this problem
    */
    const graph = buildGraph(N, relations);
    const inDegree = new Array(N).fill(0);
    for (const [u, v] of relations) {
        inDegree[v-1]++;
    }
    
    // Initialize queue by nodes with in-degree 0
    const queue = [];
    for (let i=0; i < N; i++) {
        if(inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Edge case: no nodes with indegree 0 or all nodes has indegree 0
    if(queue.length === 0 || queue.length === N) {
        return -1;
    }
    
    const capture = [];

    let semesters = 0;
    while(queue.length > 0) {
        const size = queue.length;
        semesters++;
        for (let i=0; i < size; i++) {
            const node = queue.shift();
            capture.push(node);
            
            // process neighbors
            for (const neighbor of graph[node]) {
                // use indegree to track visited nodes
                inDegree[neighbor]--;
                if(inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    // if processed nodes is not same as total then cycle exists
    if(capture.length !== N) {
        return -1;
    }
    return semesters;
};