import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

interface CandleData {
  open_time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  close_time: string;
}

interface CandlestickChartProps {
  data: CandleData[];
  symbol: string;
  interval: string;
}

export function CandlestickChart({ data, symbol, interval }: CandlestickChartProps) {
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
        height: 400,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#00FFB2',
        downColor: '#FF3366',
        borderVisible: false,
        wickUpColor: '#00FFB2',
        wickDownColor: '#FF3366',
      });

      const formattedData = data.map(candle => ({
        time: new Date(candle.open_time).getTime() / 1000,
        open: candle.open,
        high: candle.high,
        low: candle.low,
        close: candle.close,
      }));

      candlestickSeries.setData(formattedData);
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
        <h3 className="text-xl font-semibold text-white">{symbol} Candlestick Chart</h3>
        <span className="text-sm text-gray-400">{interval}</span>
      </div>
      <div ref={chartContainerRef} />
    </div>
  );
}