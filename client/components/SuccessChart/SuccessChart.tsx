'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



const SuccessChart = () => {
  const data = {
    labels: ['Completed', 'In Progress'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#45A049', '#FF5722'],
        borderWidth: 2,
        borderColor: '#fff',
        cutout: '50%', // فضای داخلی نمودار
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        bodyColor: '#fff',
      },
    },
    rotation: -90, // زاویه شروع به درجه (نیم‌دایره از بالا شروع می‌شود)
    circumference: 180, // تنظیم زاویه نمودار به نیم‌دایره
    maintainAspectRatio: false,
  };

  return (
    <div className="relative w-full h-[100px]">
      <Doughnut data={data}  />
    </div>
  );
};

export default SuccessChart;
