
import React, { useState, useEffect, useRef } from 'react';
import { Screen, Language, ServiceItem, City } from './types';
import { 
  TRANSLATIONS, 
  CONSULTATION_SERVICES,
  EMERGENCY_SERVICES,
  GOV_PORTALS,
  getIcon,
  LANGUAGE_LIST
} from './constants';
import { BottomNav } from './components/Layout';
import { getAIResponse } from './services/geminiService';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Splash);
  const [lang, setLang] = useState<Language>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // AI State
  const [aiHistory, setAiHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [selectedConsult, setSelectedConsult] = useState<ServiceItem | null>(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(Screen.Home);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiHistory]);

  const handleConsultClick = async (service: ServiceItem) => {
    setSelectedConsult(service);
    setCurrentScreen(Screen.Consult);
    setAiHistory([]);
    setIsAiLoading(true);
    
    let promptType: 'HEALTH' | 'CAREER' | 'GENERAL' = 'GENERAL';
    if (['Doctor', 'Mental Health', 'Dietician', 'Ayurveda', 'Yoga'].includes(service.name)) promptType = 'HEALTH';
    if (['Career Advice'].includes(service.name)) promptType = 'CAREER';

    const initialPrompt = `Explain the "${service.name}" service in the context of Indian government services or professional consultation. Provide 3 key bullet points on how to use it.`;
    const response = await getAIResponse(initialPrompt, promptType);
    setAiHistory([{ role: 'ai', text: response || 'No data found.' }]);
    setIsAiLoading(false);
  };

  const sendMessage = async () => {
    if (!userInput.trim() || isAiLoading) return;
    const q = userInput;
    setUserInput('');
    setAiHistory(prev => [...prev, { role: 'user', text: q }]);
    setIsAiLoading(true);
    
    const response = await getAIResponse(`Context: ${selectedConsult?.name}. User asked: ${q}`, 'GENERAL');
    setAiHistory(prev => [...prev, { role: 'ai', text: response || 'I am sorry, I could not process that.' }]);
    setIsAiLoading(false);
  };

  const handlePortalVisit = (url: string) => {
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(fullUrl, '_blank');
  };

  const searchableList = [...CONSULTATION_SERVICES, ...GOV_PORTALS];
  const filteredList = searchableList.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.nameHi.includes(searchQuery)
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Splash:
        return (
          <div className="flex h-screen w-full flex-col items-center justify-center bg-[#1A237E]">
            <div className="relative mb-6">
              <div className="absolute inset-0 animate-pulse rounded-full bg-orange-500/20 blur-2xl"></div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" className="w-28 h-auto relative drop-shadow-2xl" alt="Emblem" />
            </div>
            <h1 className="text-white text-3xl font-black uppercase tracking-[0.15em] text-center leading-tight">
              {t.app_name}
            </h1>
            <p className="text-orange-400 text-sm font-bold mt-3 uppercase tracking-[0.4em]">Satyameva Jayate</p>
            <div className="mt-16 flex items-center gap-2">
               <div className="h-1 w-24 bg-gradient-to-r from-transparent to-white/20"></div>
               <div className="w-2 h-2 rounded-full bg-white/40"></div>
               <div className="h-1 w-24 bg-gradient-to-l from-transparent to-white/20"></div>
            </div>
          </div>
        );

      case Screen.Home:
        return (
          <div className="min-h-screen bg-[#F0F4F8] pb-32 overflow-x-hidden">
            {/* Header - Gradient & Flag */}
            <div className="bg-gradient-to-r from-[#FF8F00] via-[#E65100] to-[#BF360C] px-4 pt-6 pb-16 rounded-b-[48px] shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-6 bg-white rounded-md overflow-hidden flex flex-col shadow-inner border border-black/10">
                      <div className="h-1/3 bg-[#FF9933]"></div>
                      <div className="h-1/3 bg-white flex items-center justify-center relative">
                         <div className="w-2 h-2 rounded-full border border-[#000080] flex items-center justify-center">
                           <div className="w-0.5 h-0.5 bg-[#000080] rounded-full"></div>
                         </div>
                      </div>
                      <div className="h-1/3 bg-[#128807]"></div>
                   </div>
                   <h1 className="text-white text-2xl font-black tracking-tight drop-shadow-md">{t.app_name}</h1>
                </div>
                <button className="bg-[#B71C1C] text-white px-4 py-1.5 rounded-full text-[11px] font-black flex items-center gap-1.5 shadow-xl active:scale-95 transition-transform border border-white/20">
                  <div className="animate-pulse">{getIcon('Bell', 14)}</div> {t.alerts}
                </button>
              </div>
              <p className="text-yellow-100 text-xs font-bold tracking-wider opacity-90 uppercase ml-1">{t.subtitle}</p>
            </div>

            {/* Dashboard Overlapping Header */}
            <div className="px-4 -mt-10 relative z-20">
              <div className="bg-[#1A237E] rounded-[32px] p-5 shadow-2xl grid grid-cols-4 gap-3 ring-4 ring-white/10">
                {/* 112 Call Out */}
                <div 
                  onClick={() => window.location.href = 'tel:112'}
                  className="col-span-1 bg-white rounded-3xl p-3 flex flex-col items-center justify-center text-center cursor-pointer active:scale-95 transition-all hover:bg-red-50"
                >
                  <span className="text-[10px] font-black text-[#1A237E] leading-none mb-1">National Emergency</span>
                  <span className="text-3xl font-black text-red-600 leading-none">112</span>
                </div>
                
                {/* Secondary Emergency */}
                <div onClick={() => window.location.href = 'tel:100'} className="bg-white/95 rounded-2xl p-2 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all">
                  <div className="text-[#1A237E] mb-1">{getIcon('ShieldAlert', 28)}</div>
                  <span className="text-[10px] font-black text-[#1A237E]">Police</span>
                </div>
                <div onClick={() => window.location.href = 'tel:101'} className="bg-white/95 rounded-2xl p-2 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all">
                  <div className="text-red-600 mb-1">{getIcon('Flame', 28)}</div>
                  <span className="text-[10px] font-black text-[#1A237E]">Fire</span>
                </div>
                <div onClick={() => window.location.href = 'tel:102'} className="bg-white/95 rounded-2xl p-2 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all">
                  <span className="text-[10px] font-black text-red-600 leading-none mb-1">Medical</span>
                  <span className="text-sm font-black text-red-600">102</span>
                  <div className="text-red-500 mt-1">{getIcon('Ambulance', 22)}</div>
                </div>
                
                {/* Row 2 */}
                <div onClick={() => window.location.href = 'tel:108'} className="col-span-1 bg-white rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all">
                  <span className="text-[9px] font-black text-[#1A237E] uppercase leading-tight mb-1">Disaster</span>
                  <div className="flex items-center gap-1.5">
                    {getIcon('AlertTriangle', 18, 'text-red-600')}
                    <span className="text-2xl font-black text-red-600">108</span>
                  </div>
                </div>
                <div onClick={() => window.location.href = 'tel:1091'} className="col-span-2 bg-white rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all">
                   <span className="text-[10px] font-black text-[#1A237E] mb-1.5 uppercase tracking-wide">Women Helpline</span>
                   <div className="flex items-center gap-3">
                      <div className="text-pink-600">{getIcon('UserRound', 26)}</div>
                      <span className="text-xl font-black text-red-600">1091 / 181</span>
                   </div>
                </div>
                <div className="col-span-1 flex items-center justify-center overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop" 
                    className="w-16 h-16 rounded-3xl border-2 border-white/50 object-cover shadow-lg" 
                    alt="Assistant" 
                   />
                </div>
              </div>
            </div>

            {/* Search Bar - Professional & Floating */}
            <div className="px-4 mt-8">
              <div className="relative flex items-center group">
                <div className="absolute left-5 text-blue-900 z-10 group-focus-within:text-orange-600 transition-colors">{getIcon('Search', 24)}</div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.search_placeholder}
                  className="w-full bg-white rounded-[24px] py-5 pl-14 pr-6 shadow-xl border-none focus:ring-4 focus:ring-orange-500/20 outline-none text-base font-bold text-slate-700 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Dynamic Grid */}
            <div className="px-4 mt-8">
              {filteredList.length > 0 ? (
                <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                  {(searchQuery ? filteredList : searchableList).map((service) => (
                    <button 
                      key={service.id}
                      onClick={() => handleConsultClick(service)}
                      className="flex flex-col items-center gap-2.5 group"
                    >
                      <div className={`w-16 h-16 ${service.bgColor} rounded-[20px] shadow-sm flex items-center justify-center text-${service.color}-600 group-active:scale-90 transition-all border border-black/5 hover:shadow-md`}>
                         {getIcon(service.icon, 34)}
                      </div>
                      <span className="text-[11px] font-black text-slate-800 text-center leading-[1.1] w-full px-1">
                        {lang === 'hi' ? service.nameHi : service.name}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center py-12 gap-4">
                   <div className="bg-slate-200 p-6 rounded-full text-slate-400">
                      {getIcon('XCircle', 48)}
                   </div>
                   <p className="font-bold text-slate-500">{t.no_results}</p>
                </div>
              )}
            </div>

            {/* Floating Red COVID Banner */}
            <div className="px-4 mt-12 mb-8">
               <button 
                onClick={() => window.location.href = 'tel:1075'}
                className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white rounded-3xl py-4 px-8 shadow-2xl flex items-center justify-center gap-4 active:scale-[0.98] transition-all border-b-4 border-red-900"
               >
                 <div className="animate-pulse">{getIcon('Phone', 22)}</div>
                 <span className="text-sm font-black tracking-widest uppercase shadow-sm">{t.covid_helpline}</span>
               </button>
            </div>

            <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      case Screen.Consult:
        return (
          <div className="min-h-screen bg-slate-50 pb-32 flex flex-col overflow-hidden">
             {/* Dynamic Chat Header */}
             <div className="bg-[#1A237E] px-5 py-6 text-white flex items-center justify-between rounded-b-[40px] shadow-2xl shrink-0">
                <div className="flex items-center gap-4">
                  <button onClick={() => setCurrentScreen(Screen.Home)} className="p-2.5 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
                    {getIcon('ChevronRight', 24, "rotate-180")}
                  </button>
                  <div className="flex flex-col">
                    <h2 className="text-xl font-black truncate max-w-[180px]">{lang === 'hi' ? selectedConsult?.nameHi : selectedConsult?.name}</h2>
                    <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">{t.ai_assistant}</span>
                  </div>
                </div>
                <div className={`p-4 rounded-[22px] ${selectedConsult?.bgColor} text-${selectedConsult?.color}-600 shadow-xl border-2 border-white/10`}>
                   {getIcon(selectedConsult?.icon || 'Info', 30)}
                </div>
             </div>
             
             {/* Chat Area */}
             <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {aiHistory.map((chat, idx) => (
                  <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-[28px] shadow-sm font-medium leading-relaxed ${
                      chat.role === 'user' 
                        ? 'bg-[#1A237E] text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-200'
                    }`}>
                      {chat.text}
                    </div>
                  </div>
                ))}
                
                {isAiLoading && (
                   <div className="flex justify-start">
                      <div className="bg-white p-5 rounded-[28px] rounded-tl-none border border-slate-200 flex items-center gap-3">
                        <div className="flex gap-1">
                           <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                           <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Assistant is thinking...</span>
                      </div>
                   </div>
                )}

                {/* Portal Link Section if Public */}
                {!isAiLoading && selectedConsult?.category === 'PUBLIC' && selectedConsult?.number && (
                  <div className="flex justify-center mt-8">
                    <div className="bg-blue-600 text-white p-6 rounded-[32px] w-full max-w-sm shadow-2xl flex flex-col items-center text-center">
                       <h3 className="text-xs font-black uppercase mb-4 tracking-widest opacity-80">{t.open_portal}</h3>
                       <button 
                        onClick={() => handlePortalVisit(selectedConsult.number!)}
                        className="w-full bg-white text-blue-700 rounded-2xl py-4 font-black flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all mb-3"
                       >
                          {getIcon('Globe', 22)}
                          VISIT OFFICIAL SITE
                       </button>
                       <p className="text-[9px] font-bold opacity-60 px-4 leading-tight uppercase">{t.portal_warning}</p>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
             </div>

             {/* Bottom Input Area */}
             <div className="fixed bottom-24 left-0 right-0 px-5 bg-gradient-to-t from-slate-50 to-transparent pt-6">
                <div className="flex gap-2 max-w-2xl mx-auto items-center">
                   <div className="relative flex-1">
                      <input 
                        type="text" 
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder={t.chat_placeholder}
                        className="w-full bg-white border-2 border-slate-100 rounded-[28px] py-5 px-7 shadow-2xl text-base font-bold focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                      />
                   </div>
                   <button 
                    onClick={sendMessage}
                    className="bg-[#1A237E] text-white p-5 rounded-full shadow-2xl active:scale-90 transition-all hover:bg-blue-800 flex items-center justify-center"
                   >
                      {getIcon('Navigation', 26)}
                   </button>
                </div>
             </div>
             <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      case Screen.Call:
         return (
           <div className="min-h-screen bg-[#F0F4F8] pb-32">
              <div className="bg-gradient-to-b from-[#1A237E] to-[#0D1442] p-10 text-white rounded-b-[56px] flex flex-col items-center shadow-2xl">
                 <div className="p-5 bg-white/10 rounded-full mb-4 border border-white/20">
                    {getIcon('Phone', 40)}
                 </div>
                 <h2 className="text-3xl font-black mb-1 uppercase tracking-[0.2em] drop-shadow-lg">Help Desk</h2>
                 <p className="text-xs font-bold opacity-60 tracking-widest uppercase">Dispatch Directory</p>
              </div>
              
              <div className="p-6 space-y-4 -mt-8">
                 {EMERGENCY_SERVICES.map(s => (
                   <button 
                    key={s.id}
                    onClick={() => window.location.href = `tel:${s.number}`}
                    className="bg-white p-6 rounded-[32px] shadow-xl flex items-center justify-between group active:scale-95 transition-all border border-slate-100"
                   >
                     <div className="flex items-center gap-5">
                        <div className={`w-16 h-16 ${s.bgColor} text-${s.color}-600 rounded-[24px] flex items-center justify-center shadow-sm ring-1 ring-black/5`}>
                           {getIcon(s.icon, 32)}
                        </div>
                        <div className="flex flex-col items-start">
                           <span className="font-black text-lg text-slate-800 leading-tight">{lang === 'hi' ? s.nameHi : s.name}</span>
                           <div className="flex items-center gap-1.5 mt-1">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <span className="text-base text-red-600 font-black tracking-widest">{s.number}</span>
                           </div>
                        </div>
                     </div>
                     <div className="bg-slate-50 p-3 rounded-full text-slate-300 group-hover:text-orange-600 group-hover:bg-orange-50 transition-all">
                        {getIcon('ChevronRight', 28)}
                     </div>
                   </button>
                 ))}
              </div>
              <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
           </div>
         );

      case Screen.More:
        return (
          <div className="min-h-screen bg-[#F0F4F8] pb-32">
            <div className="bg-[#1A237E] px-6 py-10 text-white rounded-b-[40px] shadow-lg">
               <h1 className="text-3xl font-black uppercase tracking-widest">Settings</h1>
               <p className="text-xs opacity-60 font-bold mt-1 uppercase">Personalize your experience</p>
            </div>
            
            <div className="p-6 space-y-6">
               <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-100">
                  <div className="p-4 bg-slate-50/50 border-b border-slate-100">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">General</span>
                  </div>
                  
                  <div className="divide-y divide-slate-100">
                    <button onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} className="flex w-full items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">{getIcon('Languages', 24)}</div>
                        <div className="flex flex-col items-start">
                           <span className="font-black text-slate-800">Language</span>
                           <span className="text-xs text-slate-400 font-bold">भाषा चुनें</span>
                        </div>
                      </div>
                      <span className="text-sm text-orange-600 font-black px-4 py-1.5 bg-orange-50 rounded-full border border-orange-100">
                        {LANGUAGE_LIST.find(l => l.id === lang)?.nativeName}
                      </span>
                    </button>

                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex w-full items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">{getIcon('Moon', 24)}</div>
                        <span className="font-black text-slate-800">Dark Appearance</span>
                      </div>
                      <div className={`h-8 w-14 rounded-full p-1.5 transition-all ${isDarkMode ? 'bg-orange-600' : 'bg-slate-200 shadow-inner'}`}>
                        <div className={`h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : ''}`}></div>
                      </div>
                    </button>
                  </div>
               </div>

               <div className="bg-[#1A237E] p-8 rounded-[40px] text-center shadow-2xl">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" className="w-16 mx-auto mb-4 opacity-40 brightness-0 invert" alt="Logo" />
                  <p className="text-white font-black text-sm tracking-widest uppercase">Bharat Helpline v1.0</p>
                  <p className="text-white/40 text-[10px] font-bold mt-2 uppercase tracking-[0.2em]">Designed for National Security & Service</p>
               </div>
            </div>
            <BottomNav lang={lang} currentScreen={currentScreen} setScreen={setCurrentScreen} isDarkMode={isDarkMode} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen select-none ${isDarkMode ? 'dark' : ''} bg-[#F0F4F8]`}>
      {renderScreen()}
    </div>
  );
};

export default App;
