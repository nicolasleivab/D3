import gen from "random-seed";
import type { TNode } from "./types";

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
    const radius = rand.intBetween(10, 20);

    const numberOfSubNodes = rand.intBetween(3, 5);

    return {
      id,
      color: `rgb(${r},${g},${b})`,
      radius,
      x,
      y,
      info: `Hi, I am node number ${id}. I'm located at coordinates ${x}, ${y}.`,
      subNodes: [...Array(numberOfSubNodes)].map((_subNode) => {
        const subR = rand.intBetween(0, 255);
        const subG = rand.intBetween(0, 255);
        const subB = rand.intBetween(0, 255);

        const subId = `${subR}${subG}${subB}`;

        const subX = rand.intBetween(x, radius);
        const subY = rand.intBetween(y, radius);

        return {
          id: subId,
          width: rand.intBetween(7, 10),
          x: subX,
          y: subY,
          color: `rgb(${subR},${subG},${subB})`,
        };
      }),
    };
  });

  return nodes;
};
