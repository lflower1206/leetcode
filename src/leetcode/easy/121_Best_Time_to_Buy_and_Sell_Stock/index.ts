const maxProfit = (prices: number[]): number => {
  let result = 0;
  let head = 0;
  let tail = 1;

  while (tail < prices.length) {
    const profit = prices[tail] - prices[head];
    result = Math.max(result, profit);

    if (profit < 0) {
      head++;
      tail = head + 1;
    } else {
      tail++;
    }
  }

  return result;
};

export default maxProfit;
