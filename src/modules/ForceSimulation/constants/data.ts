export const data: any = {
  nodes: [
    { name: "Planet0", group: 0, r: 27, g: 0 },
    { name: "Moon01", group: 0, r: 10, g: 0 },
    { name: "Moon02", group: 0, r: 7, g: 0 },
    { name: "Moon02", group: 0, r: 9, g: 0 },
    { name: "Planet1", group: 1, r: 35, g: 1 },
    { name: "Moon11", group: 1, r: 11, g: 1 },
    { name: "Moon12", group: 1, r: 12, g: 1 },
    { name: "Moon13", group: 1, r: 9, g: 1 },
    { name: "Moon14", group: 1, r: 10, g: 1 },
    { name: "Planet2", group: 2, r: 30, g: 2 },
    { name: "Moon21", group: 2, r: 8, g: 2 },
    { name: "Moon22", group: 2, r: 10, g: 1 },
  ],
  links: [
    { source: 4, target: 0, value: 1 },
    { source: 4, target: 9, value: 8 },
    { source: 9, target: 0, value: 1 },
    { source: 9, target: 4, value: 8 },
    { source: 0, target: 1, value: 1 },
    { source: 0, target: 2, value: 8 },
    { source: 0, target: 3, value: 10 },
    { source: 4, target: 5, value: 6 },
    { source: 4, target: 6, value: 1 },
    { source: 4, target: 7, value: 1 },
    { source: 4, target: 8, value: 1 },
    { source: 9, target: 10, value: 1 },
    { source: 9, target: 11, value: 2 },
  ],
};

export type TForceItem = { label: string; value: number };
export const forceSets: TForceItem[] = [
  { label: "1", value: -2000 },
  { label: "2", value: -1000 },
  { label: "3", value: 0 },
];
