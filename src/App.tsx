import React from 'react';
import { Coins } from 'lucide-react';
import { PriceCard } from './components/PriceCard';
import { MetricsPanel } from './components/MetricsPanel';
import { PriceChart } from './components/PriceChart';
import { PredictionSection } from './components/PredictionSection';
import { BacktestingSection } from './components/BacktestingSection';
import { CandlestickChart } from './components/CandlestickChart';
import { cryptocurrencies, metrics, bitcoinPriceData, candlestickData } from './mockData';
import ChartPage from './components/ChartPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white p-6">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-2">
          <Coins className="text-[#00FFB2]" size={32} />
          <h1 className="text-2xl font-bold">Price.ai - Crypto Price Prediction System</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cryptocurrencies.map(crypto => (
            <PriceCard key={crypto.id} crypto={crypto} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <PredictionSection />
          <BacktestingSection />
          <PriceChart data={bitcoinPriceData} timeframe="24H" />
          {/* <CandlestickChart 
            data={candlestickData} 
            symbol="BTC/USDT" 
            interval="1H" 
          /> */}
          <ChartPage/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MetricsPanel metrics={metrics} />
        </div>
      </main>
    </div>
  );
}