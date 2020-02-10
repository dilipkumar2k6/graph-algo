# DFS Code template iterative
```
void DFS(int s) {
    //visited, captured and parent initialized to 0, 0 and null
    captured[s] = 1; visited[s] = 1

     q = new Stack(); q.push(s);
     while not isEmpty(q): //capture the next vertex
	   v = q.pop()
	   captured[v] = 1
	   for w in Adjlist[v]:
		if visited[w] == 0 then 
	            visited[w] = 1; parent[w] = v;
		   q.push(w);﻿
``` 
# DFS Code template recursive
- visited and captured means same thing in recursive approach 

```
void DFS(int s) {
    // visit current node
    visisted[s] = 1;
    for w in adjList[s]:
        if(visisted[w] === 0) {
            DFS(w);
        }
}
``` 

# Disconnected graph
- How to find out if Graph is connected or not?
- How to find out number of disconnected graph?
## Using DFS
```
void DFS(int s, c) {
    // visit current node
    visisted[s] = c;
    for w in adjList[s]:
        if(visisted[w] === 0) {
            DFS(w, c);
        }
}

void findComponents () {
    component = 0;
    for int w in V:
        if(visisted[w] === 0) {
            component++;
            DFS(w, component);
        }
    return component;
}        
```
## Using DFS
```
void findComponents () {
    component = 0;
    for int w in V:
        if(visisted[w] === 0) {
            component++;
            BFS(w, component);
        }
    return component;
}        
```
# How do we figure out if all the edges belongs same component or not?
- If there are multiple connected components
- first connected component will have vertices marked as `1`
# Tree edge
# Back edge
- Going back to ancestor
- Never will go back to parent 
# How to detect cycle?
if parent's of node is not same as neighbor then there will be a cycle
# Traverse cycle
