//Monthly Average Chart
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const MonthlyAverageChart: React.FC = () => {
  const { city } = useAppContext();
  const { t } = useTranslation();
  const [monthlyData, setMonthlyData] = useState<number[]>([]);

  // Data simulation for chart, because we have no data for last months
  useEffect(() => {
    const randomData = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 30)
    );
    setMonthlyData(randomData);
  }, [city]);

  const data = {
    labels: [
      t('jan'), t('feb'), t('mar'), t('apr'), t('may'), t('jun'),
      t('jul'), t('aug'), t('sep'), t('oct'), t('nov'), t('dec'),
    ],
    datasets: [
      {
        label: t('monthly_avg_temp'),
        data: monthlyData,
        borderWidth: 2,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0,
        fill: true,
      
      },
    ],
    
  };
  const options = {
    responsive: true,
          aspectRatio: 1,
          maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    
  },

};

  return (
    <div className=" w-3xl h-65 pb-15 bg-slate-200 dark:bg-gray-700 p-4 rounded-4xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">{t('monthly_avg_temp')}</h2>
      <Line data={data} options={options}/>
    </div>
  );
};

export default MonthlyAverageChart;
