
import React, { useState, useEffect } from 'react';
import { Screen, Language, ServiceItem, City } from './types';
import { 
  TRANSLATIONS, 
  EMERGENCY_SERVICES, 
  NATIONAL_SAFETY,
  NATIONAL_CIVIC,
  NATIONAL_HEALTH,
  KOLKATA_HOSPITALS, 
  KOLKATA_CIVIC,
  KOLKATA_SAFETY,
  KOLKATA_POLICE_STATIONS,
  TRIPURA_HOSPITALS,
  TRIPURA_CIVIC,
  TRIPURA_SAFETY,
  TRIPURA_POLICE_STATIONS,
  TRIPURA_TRAVEL,
  TELANGANA_HOSPITALS,
  TELANGANA_SAFETY,
  TELANGANA_CIVIC,
  TELANGANA_BLOOD_BANKS,
  TELANGANA_TRAVEL,
  TAMILNADU_SAFETY,
  TAMILNADU_DISASTER,
  TAMILNADU_HEALTH,
  TAMILNADU_TRAVEL,
  DELHI_HOSPITALS, 
  UTTARAKHAND_HOSPITALS,
  UP_HOSPITALS,
  DELHI_CIVIC, 
  UTTARAKHAND_CIVIC,
  UP_CIVIC,
  UP_SAFETY,
  COVID_SERVICES, 
  getIcon,
  LANGUAGE_LIST
} from './constants';
import { BottomNav, SOSButton } from './components/Layout';
import { BharatLogo } from './components/Logo';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Splash);
  const [lang, setLang] = useState<Language>('en');
  const [currentCity, setCurrentCity] = useState<City>('All India');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(Screen.Home);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => (
    <button 
      onClick={() => {
        if (service.number?.includes('http') || service.number?.includes('.in') || service.number?.includes('.co') || service.number?.includes('.org')) {
           window.open(service.number.startsWith('http') ? service.number : `https://${service.number}`, '_blank');
        } else {
           const firstNum = service.number?.split('/')[0].split(',')[0].trim();
           window.location.href = `tel:${firstNum}`;
        }
      }}
      className={`flex flex-col items-start gap-2 rounded-xl p-4 shadow-sm border transition-all active:scale-95 ${
        isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'
      }`}
    >
      <div className={`rounded-lg p-2 bg-${service.color}-50 text-${service.color}-600`}>
        {getIcon(service.icon, 24)}
      </div>
      <div className="flex flex-col items-start text-left w-full overflow-hidden">
        <span className="text-sm font-bold leading-tight truncate w-full">
          {lang === 'hi' ? service.nameHi : (service.nameLocal || service.name)}
        </span>
        <span className="text-[10px] font-medium text-slate-500 mt-1 truncate w-full">{service.number}</span>
      </div>
    </button>
  );

  const Header: React.FC = () => (
    <header className={`sticky top-0 z-50 flex items-center justify-between px-4 py-3 shadow-md ${isDarkMode ? 'bg-slate-900 border-b border-slate-800' : 'bg-white border-b border-slate-100'}`}>
      <div className="flex items-center gap-3 overflow-hidden">
        <BharatLogo size={36} className="shrink-0" />
        <div className="flex flex-col -space-y-0.5 overflow-hidden">
          <h1 className={`text-base font-black tracking-tight leading-tight truncate ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            {t.app_name}
          </h1>
          <button 
            onClick={() => setCurrentScreen(Screen.CitySelection)}
            className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase tracking-wider"
          >
            {getIcon('MapPin', 10)}
            <span className="truncate">{currentCity}</span>
            {getIcon('ChevronRight', 10, "rotate-90 ml-0.5")}
          </button>
        </div>
      </div>
      <button 
        onClick={() => setCurrentScreen(Screen.LanguageSelection)}
        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black border transition-colors ${isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-600'}`}
      >
        {getIcon('Languages', 14)}
        <span>{LANGUAGE_LIST.find(l => l.id === lang)?.nativeName}</span>
      </button>
    </header>
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Splash:
        return (
          <div className="flex h-screen w-full flex-col items-center justify-center bg-white p-6">
            <div className="relative mb-10">
              <div className="absolute inset-0 animate-ping rounded-full bg-orange-100 opacity-75"></div>
              <BharatLogo size={120} className="relative z-10" />
            </div>
            <h1 className="mb-2 text-2xl font-black text-slate-800 tracking-wider text-center uppercase">
              {t.app_name}
            </h1>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">Aapka Suraksha Kavach</p>
            <div className="mt-16 flex items-center gap-4 grayscale opacity-50">
               <div className="h-0.5 w-12 bg-slate-200"></div>
               <span className="text-[10px] font-bold text-slate-400">BHARAT HELPLINE</span>
               <div className="h-0.5 w-12 bg-slate-200"></div>
            </div>
          </div>
        );

      case Screen.Home:
        const localHospitals = currentCity === 'Kolkata' ? KOLKATA_HOSPITALS : (currentCity === 'Delhi' ? DELHI_HOSPITALS : (currentCity === 'Uttarakhand' ? UTTARAKHAND_HOSPITALS : (currentCity === 'Tripura' ? TRIPURA_HOSPITALS : (currentCity === 'Telangana' ? TELANGANA_HOSPITALS : (currentCity === 'Tamil Nadu' ? TAMILNADU_HEALTH : (currentCity === 'All India' ? NATIONAL_HEALTH : UP_HOSPITALS))))));
        const localCivic = currentCity === 'Kolkata' ? KOLKATA_CIVIC : (currentCity === 'Delhi' ? DELHI_CIVIC : (currentCity === 'Uttarakhand' ? UTTARAKHAND_CIVIC : (currentCity === 'Tripura' ? TRIPURA_CIVIC : (currentCity === 'Telangana' ? TELANGANA_CIVIC : (currentCity === 'Tamil Nadu' ? TAMILNADU_DISASTER : (currentCity === 'All India' ? NATIONAL_CIVIC : UP_CIVIC))))));
        const localSafety = currentCity === 'Kolkata' ? KOLKATA_SAFETY : (currentCity === 'Uttar Pradesh' ? UP_SAFETY : (currentCity === 'Tripura' ? TRIPURA_SAFETY : (currentCity === 'Telangana' ? TELANGANA_SAFETY : (currentCity === 'Tamil Nadu' ? TAMILNADU_SAFETY : (currentCity === 'All India' ? NATIONAL_SAFETY : [])))));

        return (
          <div className={`pb-24 transition-colors min-h-screen ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-gray-50'}`}>
            <Header />
            <div className="p-4">
              <button 
                onClick={() => window.location.href = 'tel:112'}
                className="relative mb-6 flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-red-600 p-6 text-white shadow-xl active:scale-95 transition-transform"
              >
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  <BharatLogo size={120} />
                </div>
                <span className="text-3xl font-black tracking-tighter">{t.emergency_title}</span>
                <p className="mt-1 text-xs font-bold uppercase opacity-80">Universal Helpline: Tap to call</p>
              </button>

              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-bold uppercase text-xs tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.categories.emergency}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {EMERGENCY_SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              {localSafety.length > 0 && (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-bold uppercase text-xs tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.categories.women_child}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {localSafety.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </>
              )}

              {currentCity === 'Tamil Nadu' && (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-bold uppercase text-xs tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.categories.tourism}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {TAMILNADU_TRAVEL.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </>
              )}

              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-bold uppercase text-xs tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.categories.hospitals}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {localHospitals.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-bold uppercase text-xs tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.categories.civic}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {localCivic.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
            <SOSButton lang={lang} />
            <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      case Screen.CitySelection:
        return (
          <div className={`flex min-h-screen flex-col transition-colors pb-24 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white'}`}>
             <Header />
             <div className="p-4 space-y-4 overflow-y-auto">
                <div className="flex flex-col gap-1 mb-2">
                  <h2 className="text-xl font-black uppercase tracking-tight">{t.change_city}</h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Select your region</p>
                </div>
                
                {(['All India', 'Tamil Nadu', 'Telangana', 'Tripura', 'Kolkata', 'Delhi', 'Uttarakhand', 'Uttar Pradesh'] as City[]).map((city) => (
                  <button 
                    key={city}
                    onClick={() => { setCurrentCity(city); setCurrentScreen(Screen.Home); }}
                    className={`flex w-full items-center justify-between p-4 rounded-2xl border-2 transition-all active:scale-[0.98] ${
                      currentCity === city 
                        ? 'border-orange-500 bg-orange-50' 
                        : isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${currentCity === city ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' : 'bg-slate-200 text-slate-600'}`}>
                        {getIcon(city === 'All India' ? 'Globe' : 'Building2', 24)}
                      </div>
                      <div className="flex flex-col items-start">
                        <span className={`font-black text-lg ${currentCity === city ? 'text-orange-700' : ''}`}>{city}</span>
                        <span className="text-[10px] font-bold uppercase text-slate-400">{city === 'All India' ? 'National Numbers' : 'Available Numbers'}</span>
                      </div>
                    </div>
                    {currentCity === city && <div className="h-3 w-3 rounded-full bg-orange-500 ring-4 ring-orange-100"></div>}
                  </button>
                ))}
             </div>
             <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      case Screen.LanguageSelection:
        return (
          <div className={`flex min-h-screen flex-col transition-colors pb-24 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white'}`}>
             <Header />
             <div className="p-4 space-y-4 overflow-y-auto">
                <div className="flex flex-col gap-1 mb-2">
                  <h2 className="text-xl font-black uppercase tracking-tight">{t.select_lang}</h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Choose your language</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {LANGUAGE_LIST.map((l) => (
                    <button 
                      key={l.id}
                      onClick={() => { setLang(l.id); setCurrentScreen(Screen.Home); }}
                      className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all active:scale-[0.98] ${
                        lang === l.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-gray-50'
                      }`}
                    >
                      <span className={`text-xl font-black mb-1 ${lang === l.id ? 'text-orange-600' : isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                        {l.nativeName}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-slate-400">{l.name}</span>
                    </button>
                  ))}
                </div>
             </div>
             <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      case Screen.Settings:
        return (
          <div className={`min-h-screen pb-24 transition-colors ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-gray-50'}`}>
            <Header />
            <div className="p-4">
              <div className={`rounded-2xl shadow-sm overflow-hidden border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                <button onClick={() => setCurrentScreen(Screen.LanguageSelection)} className="flex w-full items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">{getIcon('Languages', 20)}</div>
                    <span className="font-semibold">{t.select_lang}</span>
                  </div>
                  <span className="text-sm text-orange-600 font-black tracking-tight">{LANGUAGE_LIST.find(l => l.id === lang)?.nativeName}</span>
                </button>
                <button onClick={() => setCurrentScreen(Screen.CitySelection)} className="flex w-full items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">{getIcon('MapPin', 20)}</div>
                    <span className="font-semibold">{t.change_city}</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{currentCity}</span>
                </button>
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex w-full items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">{getIcon('Settings', 20)}</div>
                    <span className="font-semibold">Dark Mode</span>
                  </div>
                  <div className={`h-6 w-11 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-orange-600' : 'bg-slate-300'}`}>
                    <div className={`h-4 w-4 rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-5' : ''}`}></div>
                  </div>
                </button>
              </div>
            </div>
            <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      default:
        return <div className="p-10">Module coming soon...</div>;
    }
  };

  return (
    <div className={`min-h-screen select-none ${isDarkMode ? 'dark' : ''}`}>
      {renderScreen()}
    </div>
  );
};

export default App;
