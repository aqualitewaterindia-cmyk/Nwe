
import React from 'react';
import { TRANSLATIONS, getIcon } from '../constants';
import { Language, Screen } from '../types';

export const BottomNav: React.FC<{ 
  lang: Language; 
  currentScreen: Screen; 
  setScreen: (s: Screen) => void;
  isDarkMode: boolean;
}> = ({ lang, currentScreen, setScreen, isDarkMode }) => {
  const t = TRANSLATIONS[lang];
  const navItems = [
    { id: Screen.Home, label: t.home, icon: 'Phone' },
    { id: Screen.CitySelection, label: t.change_city, icon: 'MapPin' },
    { id: Screen.Settings, label: t.profile, icon: 'Settings' },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t px-2 pb-6 pt-3 safari-bottom-safe ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id)}
          className={`flex flex-col items-center gap-1 transition-all ${
            currentScreen === item.id 
              ? 'text-orange-600' 
              : isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {getIcon(item.icon, 20)}
          <span className="text-[10px] font-bold text-center leading-tight max-w-[64px] truncate">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export const SOSButton: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  return (
    <button 
      className="fixed bottom-24 right-4 z-40 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-red-600 text-white shadow-2xl ring-4 ring-red-200 active:scale-90 transition-transform"
      onClick={() => window.location.href = 'tel:112'}
    >
      <span className="text-sm font-bold">{t.sos_btn}</span>
    </button>
  );
};
