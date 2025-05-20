// toggling Theme
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1 rounded border border-gray-400 dark:border-white transition-colors duration-300"
    >
      {theme === 'dark' ? (
        <>
          <SunIcon className="w-5 h-5" />
          <span>{t('light_mode')}</span>
        </>
      ) : (
        <>
          <MoonIcon className="w-5 h-5" />
          <span>{t('dark_mode')}</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
