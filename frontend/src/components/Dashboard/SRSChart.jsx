import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SRSChart = ({ srs }) => {
  if (!srs) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Loading SRS data...</div>;
  }

  const data = {
    labels: ['Apprentice', 'Guru', 'Master', 'Enlightened', 'Burned'],
    datasets: [
      {
        label: 'Items',
        data: [
          srs.apprentice,
          srs.guru,
          srs.master,
          srs.enlightened,
          srs.burned
        ],
        backgroundColor: [
          '#dd0093',
          '#882d9e',
          '#294ddb',
          '#0093dd',
          '#434343'
        ],
        borderColor: [
          '#dd0093',
          '#882d9e',
          '#294ddb',
          '#0093dd',
          '#434343'
        ],
        borderWidth: 0,
        borderRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          precision: 0
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default SRSChart;
