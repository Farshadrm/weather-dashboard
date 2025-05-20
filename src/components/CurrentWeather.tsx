//Current weather

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

type WeatherData = {
  temp: number;
  description: string;
  icon: string;
  date: string;
  feels: number;
  high:number;
  low:number;
  datename: string;
};

const CurrentWeather: React.FC = () => {
  const { city } = useAppContext();
  const { t, i18n } = useTranslation();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  //Unique API KEY (Openweather)
  const API_KEY = 'e5f260e86fd5c31f00e7355aac253bf4';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${i18n.language}`
        );
        // console.log(response.data);
        const data = response.data;
        const weatherData: WeatherData = {
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          date: new Date().toLocaleString(i18n.language),
          datename: new Date(data.dt * 1000).toLocaleDateString(i18n.language, {
              weekday: 'long',
            }),
          feels: data.main.feels_like,
          high: data.main.temp_max,
          low: data.main.temp_min,
        };

        setWeather(weatherData);
      } catch (err) {
        setError(t('error_loading_weather'));
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>{t('loading')}</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-2xl h-65 bg-slate-200 dark:bg-gray-700 p-4 rounded-4xl shadow-md ml-7">
      <div className="flex w-max pr-5 gap-5 pl-4 rounded-4xl bg-slate-300">
      <img src="/src/assets/location.svg" alt="" />
      <h2 className="pt-1 text-base mb-2">{t(city)}</h2>
      </div>
      {weather && (
        <div className="flex justify-between gap-4">
          
          <div className="mt-4">
            <p className="text-3xl font-bold">{weather.datename}</p>
            <p className="mt-3">{weather.date}</p>
            <p className="mt-3 text-3xl font-bold">{weather.temp.toFixed(1)} °C</p>
            <p className="mt-3">{t('high')}: {weather.high.toFixed(1)} °C  {t('low')}: {weather.low.toFixed(1)} °C</p>
            
          </div>
          <div  className="flex flex-col mr-6">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
          />
          <p className="text-2xl font-bold">{weather.description}</p>
          <p className="text-lg">{t('Feels')} {weather.feels}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
