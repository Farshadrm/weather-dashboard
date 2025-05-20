// All Context of project
import /* react, */ { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import i18n from 'i18next';

type AppContextType = {
  city: string;
  setCity: (city: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: 'en' | 'fa';
  toggleLanguage: () => void;
  username: string;
  setUsername: (name: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState('Tehran');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'fa'>('en');
  const [username, setUsername] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fa' : 'en'));
  };

  return (
    <AppContext.Provider value={{ city, setCity, theme, toggleTheme, language, toggleLanguage, username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
