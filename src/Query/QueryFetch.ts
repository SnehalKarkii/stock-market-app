import axios from 'axios';

// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&amp;symbol=IBM&amp;apikey=EGE9ODG4XG0ATFV8
// const apikey="EGE9ODG4XG0ATFV8"; this key is not working properly so I have tested this with demo key
const apiKey = "demo";
const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED';

const fetchStockData = async (symbol:any) => {
  try {
    const response = await axios.get(
      `${apiUrl}&symbol=${symbol}&apikey=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

export {fetchStockData};