import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoCurrency } from '../types';

interface PriceCardProps {
  crypto: CryptoCurrency;
}

export function PriceCard({ crypto }: PriceCardProps) {
  const isPositive = crypto.prediction.direction === 'up';

  return (
    <div className="bg-[#2A2A2A] rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">{crypto.name}</h3>
        <span className="text-sm text-gray-400">{crypto.symbol}</span>
      </div>
      
      <div className="mb-4">
        <div className="text-2xl font-bold text-white">
          ${crypto.currentPrice.toLocaleString()}
        </div>
        <div className={`flex items-center mt-1 ${
          crypto.change24h >= 0 ? 'text-[#00FFB2]' : 'text-[#FF3366]'
        }`}>
          {crypto.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{Math.abs(crypto.change24h)}%</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-sm text-gray-400 mb-2">Prediction (24h)</h4>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-semibold text-white">
              ${crypto.prediction.price.toLocaleString()}
            </div>
            <div className={`text-sm ${isPositive ? 'text-[#00FFB2]' : 'text-[#FF3366]'}`}>
              {isPositive ? '▲' : '▼'} {(crypto.prediction.probability * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Confidence</div>
            <div className="text-white font-medium">
              {(crypto.prediction.confidence * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}