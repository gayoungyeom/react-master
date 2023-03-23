const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  const response = await fetch(`${BASE_URL}/coins`);
  return await response.json();
};

export const fetchCoinInfo = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/coins/${coinId}`);
  return await response.json();
};

export const fetchCoinPrice = async (coinId: string) => {
  const response = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await response.json();
};

export const fetchCoinHistory = async (coinId: string) => {
  //2 weeks of data
  //   const endDate = Math.floor(Date.now() / 1000);
  //   const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  const response = await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  return await response.json();
};
