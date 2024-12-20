import axios from 'axios';

const BASE_URL = ' https://api.coingecko.com/api/v3';

export const getCryptoList = async () => {
  const response = await axios.get(`${BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 100,
    },
  });
  return response.data;
};

export const getCryptoDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/coins/${id}`);
  return response.data;
};

export const getCryptoHistory = async (id, days) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`, 
      {
        params: {
          vs_currency: 'usd', 
          days: days, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("ok :", error);
    throw error;
  }
};

