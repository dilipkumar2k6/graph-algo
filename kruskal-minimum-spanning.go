// https://leetcode.com/problems/connecting-cities-with-minimum-cost/
func unionFindCompress (parent []int, x int) int {
    // Base case
    if (parent[x] == x) {
        return x;
    }
    // As a manager, assign task to worker node to get root
    root := unionFindCompress(parent, parent[x]);
    // update root for current node to compressed it
    parent[x] = root;
    return root;
}
func kruskalMinimumSpanningTree (N int, connections [][]int) int {
   // Sort given connections
    sort.Slice(connections, func (i int, j int ) bool {
        return connections[i][2] < connections[j][2]
    });
    components := N;
    cost := 0;
    parent := make([] int, N);
    size := make([] int, N);
    for i, _ := range(parent) {
        parent[i] = i;
        size[i] = 1;
    }
    // Iterate each connection
    for _, connection := range(connections) {
        u := connection[0] - 1;
        v := connection[1] - 1;
        w := connection[2];
        // find parent for each group
        uRoot := unionFindCompress(parent, u);
        vRoot := unionFindCompress(parent, v);
        // if parent is same then ignore
        if (uRoot != vRoot) {
            // Add lower size into bigger set
            if(size[uRoot] < size[vRoot]) {
                parent[uRoot] = vRoot;
                size[vRoot] += size[uRoot];
            } else {
                parent[vRoot] = uRoot;
                size[uRoot] += size[vRoot]
            }
            // recude component
            components--;
            cost += w;
        }
    }
    if components == 1 {
        return cost;
    }
    return -1;
}