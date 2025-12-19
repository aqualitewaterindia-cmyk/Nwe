
import React from 'react';
import { TRANSLATIONS, getIcon } from '../constants';
import { Language, Screen } from '../types';

export const BottomNav: React.FC<{ 
  lang: Language; 
  currentScreen: Screen; 
  setScreen: (s: Screen) => void;
  isDarkMode: boolean;
}> = ({ lang, currentScreen, setScreen, isDarkMode }) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const navItems = [
    { id: Screen.Home, label: t.home, icon: 'Navigation' },
    { id: Screen.Consult, label: t.consult, icon: 'UserRound' },
    { id: Screen.Call, label: t.call, icon: 'Phone' },
    { id: Screen.More, label: t.more, icon: 'GanttChartSquare' },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t px-2 pb-6 pt-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] ${isDarkMode ? 'bg-[#0D1B2A] border-slate-700' : 'bg-[#1A237E] border-slate-800'}`}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setScreen(item.id)}
          className={`flex flex-col items-center gap-1 transition-all ${
            currentScreen === item.id 
              ? 'text-white scale-110' 
              : 'text-white/60'
          }`}
        >
          {getIcon(item.icon, 24)}
          <span className="text-[10px] font-bold tracking-widest uppercase text-center leading-tight">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
