import cloneGraph, { Node } from './index';

describe('133. Clone Graph', () => {
  describe('given input adjList = [[2,4],[1,3],[2,4],[1,3]]', () => {
    it('should return [[2,4],[1,3],[2,4],[1,3]]', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);
      const node3 = new Node(3);
      const node4 = new Node(4);

      node1.neighbors = [node2, node4];
      node2.neighbors = [node1, node3];
      node3.neighbors = [node2, node4];
      node4.neighbors = [node1, node3];

      const clonedGraph = cloneGraph(node1)!;

      expect(clonedGraph.val === node1.val).toBeTruthy();
      expect(clonedGraph === node1).not.toBeTruthy();
    });
  });

  describe('given input adjList = [[2],[1]]', () => {
    it('should return[[2],[1]]', () => {
      const node1 = new Node(1);
      const node2 = new Node(2);

      node1.neighbors = [node2];
      node2.neighbors = [node1];

      const clonedGraph = cloneGraph(node1)!;

      expect(clonedGraph.val === node1.val).toBeTruthy();
      expect(clonedGraph === node1).not.toBeTruthy();
    });
  });
});
