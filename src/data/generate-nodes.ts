import gen from "random-seed";

export interface TNode {
  id: string;
  color: string;
  radius: number;
  x: number;
  y: number;
  info: string;
}

export const generateNodes = (seed: string): TNode[] => {
  const rand = gen.create(seed);

  const numberOfNodes = rand.intBetween(10, 30);

  const nodes = [...Array(numberOfNodes)].map((_node) => {
    const r = rand.intBetween(0, 255);
    const g = rand.intBetween(0, 255);
    const b = rand.intBetween(0, 255);

    const id = `${r}${g}${b}`;

    const x = rand.intBetween(10, 500);
    const y = rand.intBetween(10, 500);

    return {
      id,
      color: `rgb(${r},${g},${b})`,
      radius: rand.intBetween(10, 20),
      x,
      y,
      info: `Hi, I am node number ${id}. I'm located at coordinates ${x}, ${y}.`,
    };
  });

  return nodes;
};
