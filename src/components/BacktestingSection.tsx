import React, { useState } from 'react';
import { TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { cryptocurrencies } from '../mockData';

const intervals = ['1D', '1W', '1M', '3M'];

interface BacktestMetrics {
  accuracy: number;
  profitLoss: number;
  totalTrades: number;
  winRate: number;
  avgReturn: number;
}

const mockBacktestData: Record<string, BacktestMetrics> = {
  bitcoin: {
    accuracy: 0.78,
    profitLoss: 15.4,
    totalTrades: 124,
    winRate: 0.72,
    avgReturn: 2.1
  },
  ethereum: {
    accuracy: 0.75,
    profitLoss: 12.8,
    totalTrades: 98,
    winRate: 0.68,
    avgReturn: 1.8
  }
};

export function BacktestingSection() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0].id);
  const [selectedInterval, setSelectedInterval] = useState('1M');

  const metrics = mockBacktestData[selectedCrypto];

  return (
    <div className="bg-[#2A2A2A] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="text-[#00FFB2]" size={24} />
        <h3 className="text-xl font-semibold text-white">Backtesting Results</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Select Asset</label>
          <select 
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
            className="w-full bg-[#1A1A1A] text-white rounded-md px-3 py-2 border border-gray-700 focus:border-[#00FFB2] focus:ring-1 focus:ring-[#00FFB2] focus:outline-none"
          >
            {cryptocurrencies.map(crypto => (
              <option key={crypto.id} value={crypto.id}>
                {crypto.name} ({crypto.symbol})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Test Period</label>
          <div className="grid grid-cols-4 gap-2">
            {intervals.map(interval => (
              <button
                key={interval}
                onClick={() => setSelectedInterval(interval)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${selectedInterval === interval 
                    ? 'bg-[#00FFB2] text-black' 
                    : 'bg-[#1A1A1A] text-white hover:bg-gray-700'}`}
              >
                {interval}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[#1A1A1A] p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">Model Accuracy</div>
          <div className="text-2xl font-bold text-[#00FFB2]">
            {(metrics.accuracy * 100).toFixed(1)}%
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">Profit/Loss</div>
          <div className="text-2xl font-bold text-white">
            {metrics.profitLoss > 0 ? '+' : ''}{metrics.profitLoss}%
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">Win Rate</div>
          <div className="text-2xl font-bold text-white">
            {(metrics.winRate * 100).toFixed(1)}%
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">Total Trades</div>
          <div className="text-2xl font-bold text-white">
            {metrics.totalTrades}
          </div>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-lg">
          <div className="text-sm text-gray-400 mb-1">Avg. Return</div>
          <div className="text-2xl font-bold text-white">
            {metrics.avgReturn}%
          </div>
        </div>
      </div>
    </div>
  );
}