// Two Weeks Forecast
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

type ForecastDay = {
  date: string;
  temp: number;
  icon: string;
};

const ForecastCards: React.FC = () => {
  const { city } = useAppContext();
  const { t, i18n } = useTranslation();
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //Unique API KEY (Openweather)
  const API_KEY = 'e5f260e86fd5c31f00e7355aac253bf4';

  useEffect(() => {
    const fetchForecast = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${i18n.language}`
        );
        // console.log(response)

        // Everyday Data Fetching
        const dailyData: ForecastDay[] = [];
        const filtered = response.data.list.filter((item: any) =>
          item.dt_txt.includes('12:00:00')
        );

        for (let i = 0; i < 14 && i < filtered.length; i++) {
          const day = filtered[i];
          dailyData.push({
            date: new Date(day.dt * 1000).toLocaleDateString(i18n.language, {
              weekday: 'long',
             
            }),
            temp: day.main.temp,
            icon: day.weather[0].icon,
          });
        }

        setForecast(dailyData);
      } catch (err) {
        setError(t('error_loading_weather'));
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  if (loading) return <p>{t('loading')}</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-slate-200 dark:bg-gray-700 p-4 rounded-4xl shadow-md mx-7">
      <h2 className="text-xl font-semibold mb-4">{t('forecast_2_weeks')}</h2>
      <div className="flex gap-8 sm:flex-cols-3 md:flex-cols-4 lg:grid-cols-7">
        {forecast.map((day, idx) => (
          <div
            key={idx}
            className="w-30 h-55 bg-slate-300 dark:bg-slate-600 text-center p-3 rounded-4xl shadow"
          >
            <p className="font-semibold mt-3 pb-3">{day.date}</p>
            <div className="border border-slate-300 shadow-xl drop-shadow-xl/50"></div>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="icon"
              className="mx-auto"
            />
            <p>{day.temp.toFixed(1)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCards;
