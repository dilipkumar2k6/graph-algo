# Topological sort on directed acyclic graph
- Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. 
- Topological Sorting for a graph is not possible if the graph is not a DAG.
# Topological sort using DFS
- Run regular dfs on directed acyclic graph
- If found cycle then topological sort doesn't exist
- keep adding traversed node into result
https://leetcode.com/problems/course-schedule
https://leetcode.com/problems/course-schedule-ii/

# Topological sort using BFS
1. A DAG G has at least one vertex with in-degree 0 and one vertex with out-degree 0
2. Compute in-degree (number of incoming edges) for each of the vertex present in the DAG and initialize topologicalSorted array as [].
3. Pick all the vertices with in-degree as 0 and add them into a queue
4. Remove a vertex from the queue and then
    - Add node into topologicalSorted
    - Decrease in-degree by 1 for all its neighboring nodes
    - If in-degree of a neighboring nodes is reduced to zero, then add it to the queue
5. Repeat Step `4` until the queue is empty
6. If count of topologicalSorted nodes is not equal to the number of nodes in the graph then the topological sort is not possible for the given graph. I.e. it has cycle

https://leetcode.com/problems/parallel-courses/
