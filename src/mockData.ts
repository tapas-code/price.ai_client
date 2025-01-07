import { CryptoCurrency, PredictionMetrics } from './types';

// Generate mock price data for the last 24 hours
const generatePriceData = (basePrice: number, count: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < count; i++) {
    const time = new Date(now.getTime() - (count - i) * 3600000); // Every hour
    const value = basePrice + (Math.random() - 0.5) * 1000;
    data.push({
      time: Math.floor(time.getTime() / 1000),
      value: value
    });
  }
  return data;
};

export const bitcoinPriceData = generatePriceData(65000, 24);

export const candlestickData = [
  {
    "open_time": "2025-01-03T02:00:00",
    "open": 96985.47,
    "high": 97342.44,
    "low": 96856.98,
    "close": 96966.85,
    "volume": 388.64008,
    "close_time": "2025-01-03T02:59:59.999000"
  },
  {
    "open_time": "2025-01-03T03:00:00",
    "open": 96966.85,
    "high": 97090.91,
    "low": 96833.99,
    "close": 97062.3,
    "volume": 255.7492,
    "close_time": "2025-01-03T03:59:59.999000"
  }
];

export const cryptocurrencies: CryptoCurrency[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    currentPrice: 65432.10,
    prediction: {
      price: 67890.25,
      confidence: 0.82,
      direction: 'up',
      probability: 0.85
    },
    change24h: 2.34
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    currentPrice: 3456.78,
    prediction: {
      price: 3589.12,
      confidence: 0.75,
      direction: 'up',
      probability: 0.78
    },
    change24h: 1.56
  }
];

export const metrics: PredictionMetrics = {
  volatility: 0.45,
  riskScore: 0.65,
  sharpeRatio: 1.8,
  maxDrawdown: 0.25
};