import gen from 'random-seed';

export interface TCircle {
   color: string;
    radius: number;
    x: number;
    y: number;
    info: string;
}

export const generateCircles = (seed: string): TCircle[] => {
    const rand = gen.create(seed);

    const numberOfCircles = rand.intBetween(10, 30);

    const circles = [...Array(numberOfCircles)].map((_circle) => {
        const r = rand.intBetween(0, 255);
        const g = rand.intBetween(0, 255);
        const b = rand.intBetween(0, 255);

        const x = rand.intBetween(10, 500);
        const y = rand.intBetween(10, 500);

        return {
            color: `rgb(${(r)},${g},${b})`,
            radius: rand.intBetween(10, 20), 
            x,
            y,
            info: `Hi, I am node number ${r}${g}${b}. I'm located at coordinates ${x}, ${y}.`
        }
    })

    return circles
}