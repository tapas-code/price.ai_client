import React, { useState, useEffect } from 'react';
import { CandlestickChart } from './CandlestickChart'; // Import your component
import axios from 'axios';

const ChartPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const symbol = 'BTCUSDT';
  const interval = '1d';
  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/historical-data/${symbol}?interval=${interval}&limit=${limit}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol, interval, limit]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="">
      <CandlestickChart data={data.data} symbol={symbol} interval={interval} />
    </div>
  );
};

export default ChartPage;
