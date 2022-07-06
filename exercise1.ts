const money = (amount: number, list: Array<number>): number => {
  let total: number = 0;

  while (amount > 0) {
    if (amount < list[list.length - 1]) return -1;
    total = list.reduce((previous, current) => {
      if (amount >= current) {
        amount -= current;
        return previous + 1;
      }
      return previous;
    }, 0);
  }

  return total;
};

export { money };
