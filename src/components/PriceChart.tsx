import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

interface PriceChartProps {
  data: { time: string; value: number }[];
  timeframe: string;
}

export function PriceChart({ data, timeframe }: PriceChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: '#2A2A2A' },
          textColor: '#d1d4dc',
        },
        grid: {
          vertLines: { color: '#404040' },
          horzLines: { color: '#404040' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 300,
      });

      const lineSeries = chart.addLineSeries({
        color: '#00FFB2',
        lineWidth: 2,
      });
      lineSeries.setData(data);

      chart.timeScale().fitContent();
      chartRef.current = chart;

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [data]);

  return (
    <div className="bg-[#2A2A2A] rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Price Chart</h3>
        <span className="text-sm text-gray-400">{timeframe}</span>
      </div>
      <div ref={chartContainerRef} />
    </div>
  );
}