// Login Page

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';


const Login: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { setUsername } = useAppContext();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setUsername(name);
      navigate('/dashboard');
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className='flex flex-row bg-white shadow-md w-4xl rounded-lg'>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md p-18 rounded-l-lg  w-xl max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          {t('login_title')}
        </h2>
        <input
          type="text"
          placeholder={t('enter_name')!}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white mt-32 py-2 rounded hover:bg-indigo-700 transition"
        >
          {t('Login')}
        </button>
      </form>
      <div className='w-xl relative bg-slate-400 rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none'>
            <img className="absolute top-5 right-5 drop-shadow-2xl" src="/src/assets/2.svg" alt="" />
            <img className="absolute top-24 right-55 drop-shadow-2xl" src="/src/assets/1.svg" alt="" />
            <img className="absolute bottom-0 right-5 drop-shadow-2xl" src="/src/assets/3.svg" alt="" />
        </div>
        </div>
    </div>
  );
};

export default Login;
