import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getCryptoHistory } from '../services/cryptoAPI';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, TimeScale);

const ChartComponent = ({ cryptoId, period }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      try {
        const data = await getCryptoHistory(cryptoId, period);
        const formattedData = {
          labels: data.prices.map(([timestamp]) => new Date(timestamp).toLocaleDateString()),
          datasets: [
            {
              label: `Prix (${period === '1' ? '1 Jour' : period === '7' ? '1 Semaine' : period === '30' ? '1 Mois' : period === '365' ? '1 An' : 'Tout'})`,
              data: data.prices.map(([_, price]) => price),
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.4,
            },
          ],
        };

        setChartData(formattedData);
      } catch (error) {
        console.error('oke :', error);
      }
      setLoading(false);
    };

    fetchChartData();
  }, [cryptoId, period]);

  if (loading) return <div>Chargement du graphique...</div>;

  return (
    <div style={{ height: '400px' }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: true } },
          scales: {
            x: { type: 'category', title: { display: true, text: 'Date' } },
            y: { beginAtZero: true, title: { display: true, text: 'Prix (USD)' } },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
