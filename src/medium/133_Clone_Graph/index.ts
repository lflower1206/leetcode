export class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val ?? 0;
    this.neighbors = neighbors ?? [];
  }
}

const dfs = (node: Node, map: Map<number, Node>): Node => {
  const clonedNode = new Node(node.val, []);

  map.set(clonedNode.val, clonedNode);

  node.neighbors.forEach((neighbor) => {
    if (map.has(neighbor.val)) {
      clonedNode.neighbors.push(map.get(neighbor.val)!);
    } else {
      clonedNode.neighbors.push(dfs(neighbor, map));
    }
  });

  return clonedNode;
};
const cloneGraph = (node: Node | null): Node | null => {
  if (node === null) {
    return null;
  }

  const map = new Map<number, Node>();

  return dfs(node, map);
};

export default cloneGraph;
