import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ReviewChart = ({ snapshots }) => {
  const labels = snapshots.map(s => {
    const date = new Date(s.date);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Review Count',
        data: snapshots.map(s => s.reviewCount),
        borderColor: '#f100a2',
        backgroundColor: 'rgba(241, 0, 162, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: '#f100a2',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
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
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(102, 126, 234, 0.5)',
        borderWidth: 1
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

  if (snapshots.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
        No review data available yet. Complete some reviews to see your activity!
      </div>
    );
  }

  return <Line data={data} options={options} />;
};

export default ReviewChart;
