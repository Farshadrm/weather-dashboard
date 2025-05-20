// Dashboard Page

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import CitySelector from '../components/CitySelector';
import CurrentWeather from '../components/CurrentWeather';
import MonthlyAverageChart from '../components/MonthlyAverageChart';
import ForecastCards from '../components/ForecastCards';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { setUsername, toggleTheme, toggleLanguage, theme, language, username } = useAppContext();
  const { t } = useTranslation();

  const handleLogout = () => {
    setUsername('');
    navigate('/');
  };
  const [isActive, setActive] = useState(false);


  const toggleClass = () => {
    setActive(!isActive);
    


  };
  


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="flex justify-between items-center mb-4 shadow-lg h-18">
        <div className="flex ml-4 ">
        <img src="/src/assets/logo.svg" alt="" />
        <h1 className="text-2xl font-bold ml-5 mt-2">{t('Weather_dashboard')}</h1>
        <h1 className=" ml-5 mt-3">{t('welcome')}, {username}!</h1>
        </div>
        <div className="flex flex-row space-x-2 rtl:space-x-reverse relative">
          <CitySelector />
          <button onClick={toggleClass}>
            <img src="/src/assets/settings.svg" alt="" 
            className="border-2 border-gray-400 rounded-lg p-2.5 mt-3 mr-3 hover:bg-blue-100 hover:border-blue-300" />
          </button>
          <div id='settingbtn' className={isActive ? 'rtl:left-5 rtl:right-auto rounded-lg shadow-xl p-4 absolute top-0 right-5 flex flex-col space-y-3 z-2 rtl:space-x-reverse bg-white mt-20 w-60 visible dark:bg-gray-500':'rounded-lg shadow-xl p-4 absolute top-0 right-5 flex flex-col space-y-3 z-2 rtl:space-x-reverse bg-white mt-20 w-60 invisible'}>
          <p>Mode</p>
          <button onClick={toggleTheme} className="px-4 py-2 text-black rounded-lg border border-gray-200 border-2 dark:text-white">
            {theme === 'dark' ? t('light_mode') : t('dark_mode')}
          </button>
          <div className="border-b-2 mt-1 border-gray-200"></div>
          <p>Language</p>
          <button onClick={toggleLanguage} className="px-4 py-2 text-black rounded-lg border border-gray-200 border-2 dark:text-white">
            {language === 'en' ? 'فارسی' : 'English'}
          </button>
          <div className="border-b-2 mt-1 border-gray-200"></div>
          <button onClick={handleLogout} className=" flex gap-4 w-30 px-4 py-2 text-black cursor-pointer dark:text-white">
            <img src="/src/assets/logout.svg" alt="" />
            {t('logout')}
            
          </button>
          </div>
        </div>
      </div>

      
      <div className="flex gap-10">
        <CurrentWeather />
        <MonthlyAverageChart />
      </div>
      <div className="mt-6">
        <ForecastCards />
      </div>
    </div>
  );
};

export default Dashboard;
