export interface TSubNode {
  id: string;
  width: number;
  x: number;
  y: number;
  color: string;
}

export interface TNode {
  id: string;
  color: string;
  radius: number;
  x: number;
  y: number;
  info: string;
  subNodes: TSubNode[];
}
