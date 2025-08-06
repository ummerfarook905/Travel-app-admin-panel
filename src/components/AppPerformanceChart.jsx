
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { fetchPerformance } from '../redux/performanceSlice';

const AppPerformanceChart = () => {
  const dispatch = useDispatch();
  const { thisWeek, lastWeek, loading } = useSelector((state) => state.performance);

  useEffect(() => {
    dispatch(fetchPerformance());
  }, [dispatch]);

  const options = {
    
    chart: { type: 'area', toolbar: { show: false }, zoom: { enabled: false } },
    colors: ['#F97316', '#FACC15'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1, stops: [0, 90, 100] }
    },
    markers: {
      size: 5,
      colors: ['#F97316'],
      strokeColor: '#fff',
      strokeWidth: 2,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: { show: false },
    grid: { show: false },
    responsive: [
      { breakpoint: 768, options: { chart: { height: 250 }, stroke: { width: 2 }, markers: { size: 3 } } },
      { breakpoint: 480, options: { chart: { height: 200 }, markers: { size: 2 }, dataLabels: { enabled: false } } }
    ]
  };

  const series = [
    { name: 'Last Week', data: lastWeek },
    { name: 'This Week', data: thisWeek }
  ];

  if (loading) return <div className="text-center text-gray-500">Loading chart...</div>;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full">
      {}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h2 className="text-xl font-bold text-green-900">App Performance</h2>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span>This Week</span>
            <strong className="ml-1 text-blue-900">{thisWeek.reduce((a, b) => a + b, 0)}</strong>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>Last Week</span>
            <strong className="ml-1 text-blue-900">{lastWeek.reduce((a, b) => a + b, 0)}</strong>
          </div>
        </div>
      </div>

      {}
      <ReactApexChart options={options} series={series} type="area" height={320} width="100%" />
    </div>
  );
};

export default AppPerformanceChart;
