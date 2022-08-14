import { TNode } from "../../data/generate-nodes";

export const getFilteredNodes = (nodes: TNode[], activeNode: TNode | null): TNode[] => {
  let filteredNode = nodes.find((node) => node.id === activeNode?.id)!;

  const newRadius = 200;
  filteredNode = {
    ...filteredNode,
    radius: newRadius,
    x: newRadius,
    y: newRadius
  }

  return activeNode ? [filteredNode] : nodes;
};
