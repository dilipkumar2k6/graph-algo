# BFS
- Explore the graph in increasing order of distance from `S`
- First capture the immediate neighbors of `S` (one hop away)
- Then capture their neighbors (two hop away)
- Continue
# BFS Approach
- use queue to store discovered vertex
- maintain visited list to avoid cycle
# BFS Code template
```
void BFS(int s) {
    //visited, captured and parent initialized to 0, 0 and null
    captured[s] = 1; visited[s] = 1

     q = new Queue(); q.push(s);
     while not isEmpty(q): //capture the next vertex
	   v = q.pop()
	   captured[v] = 1
	   for w in Adjlist[v]:
		if visited[w] == 0 then 
	            visited[w] = 1; parent[w] = v;
		   q.push(w);﻿
``` 
# Tree edge
- Tell us, what is the shortest path from source vertex to any vertex
- 
# Cross edges
- Either on same level
- Or vertex in adjacent layer
- It cannot skip a layer
- It indicates the presence of cycle in graph
- Every cross edge will be the path of the cycle
# How to check cycle?
If vertex is already visited then there are two possibilities
1. Either edge is tree edge i.e. going back to the node 
2. Or cross edge to vertex already been visited i.e. vertex was already visited through another path i.e. we found a path using new path which build cycle
```
parents[node] !== neighbor // This is condition for cycle
```
To construct cycle do following
- Take cross edge two nodes
- keep traversing through tree edge until reach to the root

