import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: string;
}
interface ChartProps {
  coinId: string;
  isDark: boolean;
}

function Chart({ coinId, isDark }: ChartProps) {
  const { isLoading: chartLoading, data: chartData } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div>
      {chartLoading ? (
        'Loading Chart...'
      ) : (
        <ApexChart
          type="line"
          height="300"
          width="500"
          series={[
            {
              name: 'Price',
              data: chartData?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            stroke: {
              curve: 'smooth',
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: 'datetime',
              categories: chartData?.map((price) => price.time_close),
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
