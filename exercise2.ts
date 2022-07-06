const decToBin = (dec: number): string => {
  if (dec === 0) return '0';

  let bin: string = '';
  let remainder: number = dec;

  while (remainder > 0) {
    bin = (remainder % 2) + bin;
    remainder = Math.floor(remainder / 2);
  }

  return bin;
};

const counter = (dec: number): number => {
  const bin = decToBin(dec);
  let count: number = 0;

  const max = bin.split('').reduce((previous, current) => {
    count = current === '0' ? count + 1 : 0;
    return count > previous ? count : previous;
  }, 0);

  return max;
};

export { decToBin, counter };

counter(0);
