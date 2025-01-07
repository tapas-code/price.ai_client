import React, { useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { cryptocurrencies } from '../mockData';

const intervals = ['1H', '4H', '1D', '1W'];

export function PredictionSection() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0].id);
  const [selectedInterval, setSelectedInterval] = useState('1D');

  const crypto = cryptocurrencies.find(c => c.id === selectedCrypto)!;
  const prediction = crypto.prediction;
  const isUp = prediction.direction === 'up';

  return (
    <div className="bg-[#2A2A2A] rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Price Prediction</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Select Cryptocurrency</label>
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
          <label className="block text-sm text-gray-400 mb-2">Time Interval</label>
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

      <div className="bg-[#1A1A1A] rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-400">Predicted Price</div>
            <div className="text-2xl font-bold text-white">
              ${prediction.price.toLocaleString()}
            </div>
          </div>
          <div className={`flex items-center gap-2 ${isUp ? 'text-[#00FFB2]' : 'text-[#FF3366]'}`}>
            {isUp ? <ArrowUpCircle size={24} /> : <ArrowDownCircle size={24} />}
            <div>
              <div className="text-sm">Direction</div>
              <div className="font-semibold">{isUp ? 'Upward' : 'Downward'}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-400">Confidence</div>
            <div className="text-lg font-semibold text-white">
              {(prediction.confidence * 100).toFixed(1)}%
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Probability</div>
            <div className="text-lg font-semibold text-white">
              {(prediction.probability * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}