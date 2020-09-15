import (
    "math"
);
func min (x int, y int) int {
    if (x > y) {
        return y;
    }
    return x;
}
func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {
    table := make([][]int,n);
    // Initialize table
    for v:= 0; v < n ;v++ { // for each nodes
        for hops :=0; hops <= K + 1; hops++ { // for each hops
            table[v] = append(table[v], math.MaxInt32);
        }
    }
    // For cost to src to src with 0 hops will be 0
    table[src][0] = 0;
    // Now start filling remaining cell for each hops
    for hops :=1; hops <= K + 1; hops++ { // for each hops
        for v :=0; v < n; v++ { // for each nodes
            // first initialzie as prev column cell f(v,i) = f(v, i-1);
            table[v][hops] = table[v][hops-1];
        } 
        
        // Now get the minimum value for all edges
        for _, edge := range(flights) {
            u := edge[0];
            v := edge[1];
            w := edge[2];
          
            // populate cost
            table[v][hops] = min(table[v][hops], table[u][hops-1] + w);
        }           
    }
    if table[dst][K+1] == math.MaxInt32 {
        return -1;
    }
    return table[dst][K+1];
 }