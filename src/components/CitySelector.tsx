// Select a city from select box
import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

const cities = ['Tehran', 'London', 'New York', 'Berlin', 'Tokyo', 'Paris', 'Istanbul'];

const CitySelector: React.FC = () => {
  const { city, setCity } = useAppContext();
  const { t } = useTranslation();

  return (
    <div className="mb-4">
      <label className=" mt-2 block mb-1 text-xs font-medium text-gray-700 dark:text-gray-300">
        {t('select_city')}
      </label>
      <select
        className="w-2xs p-2 mr-5 border-2 border-gray-400 rounded-xl dark:bg-gray-800 dark:text-white"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
