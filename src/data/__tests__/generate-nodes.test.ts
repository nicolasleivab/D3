import { generateNodes } from "../generate-nodes";

describe("generateNodes", () => {
  it(`returns the same random data only if the same seed is given`, () => {
    const randomNodes1 = generateNodes("1");
    const randomNodes2 = generateNodes("2");
    const randomNodes3 = generateNodes("1");

    expect(JSON.stringify(randomNodes1)).toEqual(JSON.stringify(randomNodes3));
    expect(JSON.stringify(randomNodes1)).not.toEqual(
      JSON.stringify(randomNodes2)
    );
  });
});
