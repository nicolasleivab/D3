import { getFilteredNodes } from "../get-filtered-nodes";

const MOCK_NODES = [
  {
    id: "1",
    color: "rgb(0,0,0)",
    radius: 10,
    x: 20,
    y: 20,
    info: "info 1",
  },
  {
    id: "2",
    color: "rgb(3,3,3)",
    radius: 15,
    x: 10,
    y: 30,
    info: "info 2",
  },
];

const ACTIVE_NODE = {
  id: "1",
  color: "rgb(0,0,0)",
  radius: 10,
  x: 20,
  y: 20,
  info: "info 1",
};

describe("getFilteredNodes", () => {
  it(`returns one single node given a node with id`, () => {
    const filteredNodes = getFilteredNodes(MOCK_NODES, ACTIVE_NODE);

    expect(filteredNodes[0].id).toEqual(MOCK_NODES[0].id);
  });
  it(`returns the same input nodes if activeNode is null`, () => {
    const filteredNodes = getFilteredNodes(MOCK_NODES, null);

    expect(filteredNodes).toEqual(MOCK_NODES);
  });
  it(`returns one single node given a node with id, with different radius and coordinates`, () => {
    const filteredNodes = getFilteredNodes(MOCK_NODES, ACTIVE_NODE);

    expect(filteredNodes[0].x).not.toEqual(MOCK_NODES[0].x);
  });
});
