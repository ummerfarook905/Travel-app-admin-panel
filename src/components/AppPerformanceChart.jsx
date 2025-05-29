import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AppPerformanceChart = () => {
  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ['#F97316', '#FACC15'], // red and yellow
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      colors: ['#F97316'],
      strokeColor: '#fff',
      strokeWidth: 2,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6, // marker at July
          fillColor: '#F97316',
          strokeColor: '#fff',
          size: 8
        }
      ]
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    legend: { show: false },
    grid: { show: false },

    // ✅ Responsive behavior
    responsive: [
      {
        breakpoint: 768, // screens smaller than 768px
        options: {
          chart: { height: 250 },
          stroke: { width: 2 },
          markers: { size: 3 }
        }
      },
      {
        breakpoint: 480, // phones
        options: {
          chart: { height: 200 },
          markers: { size: 2 },
          dataLabels: { enabled: false }
        }
      }
    ]
  };

  const series = [
    {
      name: 'Last Week',
      data: [25, 45, 50, 30, 10, 35, 60, 20, 40, 65, 80, 30]
    },
    {
      name: 'This Week',
      data: [0, 20, 70, 10, 0, 40, 50, 10, 30, 60, 70, 50]
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h2 className="text-xl font-bold text-green-900">App Performance</h2>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span>This Week</span>
            <strong className="ml-1 text-blue-900">1.245</strong>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Last Week</span>
            <strong className="ml-1 text-blue-900">1.356</strong>
          </div>
        </div>
      </div>
      <ReactApexChart options={options} series={series} type="area" height={320} width="100%" />
    </div>
  );
};

export default AppPerformanceChart;
