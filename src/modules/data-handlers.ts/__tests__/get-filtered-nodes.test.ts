import { getFilteredNodes } from "../get-filtered-nodes";

const MOCK_NODES = [
  {
    id: "1",
    color: "rgb(0,0,0)",
    radius: 10,
    x: 20,
    y: 20,
    info: "info 1",
    subNodes: [
      {
        id: "1.1",
        width: 2,
        x: 22,
        y: 22,
        color: "rgb(0,0,0)",
      },
    ],
  },
  {
    id: "2",
    color: "rgb(3,3,3)",
    radius: 15,
    x: 10,
    y: 30,
    info: "info 2",
    subNodes: [
      {
        id: "2.1",
        width: 3,
        x: 12,
        y: 32,
        color: "rgb(0,0,0)",
      },
    ],
  },
];

const ACTIVE_NODE = MOCK_NODES[0];

describe("getFilteredNodes", () => {
  it(`returns one single node given a node with id`, () => {
    const filteredNodes = getFilteredNodes(MOCK_NODES, ACTIVE_NODE, null);

    expect(filteredNodes[0].id).toEqual(MOCK_NODES[0].id);
  });
  it(`returns the same input nodes if activeNode is null`, () => {
    const filteredNodes = getFilteredNodes(MOCK_NODES, null, null);

    expect(filteredNodes).toEqual(MOCK_NODES);
  });
  it(`returns one single node given a node with id, with different radius and coordinates`, () => {
    const filteredNodes = getFilteredNodes(MOCK_NODES, ACTIVE_NODE, null);

    expect(filteredNodes[0].x).not.toEqual(MOCK_NODES[0].x);
  });
});
