import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((point) => point.date),
    datasets: [
      {
        label: 'Price',
        data: data.map((point) => point.price),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Chart;

