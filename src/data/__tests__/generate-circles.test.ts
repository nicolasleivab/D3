import { generateCircles } from '../generate-circles';

describe('generateCircles', () => {
  it(`returns the same random data only if the same seed is given`, () => {
    const randomCircles1 = generateCircles('1');
    const randomCircles2 = generateCircles('2');
    const randomCircles3 = generateCircles('1');

    expect(JSON.stringify(randomCircles1)).toEqual(JSON.stringify(randomCircles3))
    expect(JSON.stringify(randomCircles1)).not.toEqual(JSON.stringify(randomCircles2))
  });
});
