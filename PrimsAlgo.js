class PriorityQueue {
    constructor(compare){
        this.data = [];
        this.compare = compare || this.compare
    }
    compare(a,b) {
        return a - b;
    }
    swap(i,j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    add(a){
        this.data.push(a);
        this.heapifyUp(this.data.length-1);
    }
    removeTop(){
        this.swap(0, this.data.length - 1);
        const a = this.data.pop();
        this.heapifyDown(0);
        return a;
    }
    left(i) {
        return i*2 + 1;
    }
    right(i) {
        return i*2 + 2;
    }
    parent(i) {
       return Math.floor((i-1)/2); 
    }
    heapifyUp(i) {
       if(i===0) {
           return;
       } 
        const p = this.parent(i);
        if(this.compare(this.data[i], this.data[p]) < 0) {
            this.swap(p, i);
            this.heapifyUp(p);
        }
    }
    heapifyDown(i) {
        let j = i;
        const left = this.left(i);
        const right = this.right(i);
        const n = this.data.length;
        if(left < n && this.compare(this.data[left], this.data[j]) < 0) {
            j = left;
        }
        if(right < n && this.compare(this.data[right], this.data[j]) < 0) {
            j = right;
        }
        if(j !== i) {
            this.swap(i, j);
            this.heapifyDown(j);
        }
    }
    getSize(){
        return this.data.length;
    }
}
const buildGraph = (N, connections) => {
    const graph = new Array(N).fill(0).map(a => []);
    for (const [u,v,w] of connections) {
        graph[u-1].push([v-1,w]);
        graph[v-1].push([u-1,w]);
    }
    return graph;
}
const usingPrimsMinimumSpanningTree = (N, connections) => {
    const captured = new Array(N).fill(false);
    let totalCost = 0;
    const graph = buildGraph(N, connections);
    const compare = (a, b) => {
        return a[1] - b[1];
    }
    // Initialize priority queue
    const queue = new PriorityQueue(compare);
    // add all neighbor of start node 0 in the priority queue
    for (const [v,w] of graph[0]) {
        queue.add([v,w]);
    }
    captured[0] = true;
    
    while(queue.getSize() > 0) {
        const [node, weight] = queue.removeTop();
        // if node is already captured then skip it
        if(captured[node]) {
            continue;
        }
        
        // capture the node
        captured[node] = true;
        totalCost += weight;
        for (const [neighbor,w ] of graph[node]) {
            // not using visited, only captured to not to apply decrease operation on priority queue
            if(!captured[neighbor]) {
                queue.add([neighbor,w]); // keep pushing multiple copies
            }
        }
        
    }
    const totalNodes = captured.filter(a => a).length;
    
    return totalNodes === N ? totalCost: -1;
}
/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
    return usingPrimsMinimumSpanningTree(N, connections);
};