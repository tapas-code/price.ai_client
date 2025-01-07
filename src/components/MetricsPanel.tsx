import React from 'react';
import { PredictionMetrics } from '../types';

interface MetricsPanelProps {
  metrics: PredictionMetrics;
}

export function MetricsPanel({ metrics }: MetricsPanelProps) {
  return (
    <div className="bg-[#2A2A2A] rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-400">Volatility</div>
          <div className="text-lg font-semibold text-white">
            {(metrics.volatility * 100).toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Risk Score</div>
          <div className="text-lg font-semibold text-white">
            {(metrics.riskScore * 100).toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Sharpe Ratio</div>
          <div className="text-lg font-semibold text-white">
            {metrics.sharpeRatio.toFixed(2)}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Max Drawdown</div>
          <div className="text-lg font-semibold text-white">
            {(metrics.maxDrawdown * 100).toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
}