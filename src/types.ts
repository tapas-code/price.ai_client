export interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  prediction: {
    price: number;
    confidence: number;
    direction: 'up' | 'down';
    probability: number;
  };
  change24h: number;
}

export interface PredictionMetrics {
  volatility: number;
  riskScore: number;
  sharpeRatio: number;
  maxDrawdown: number;
}