
import React from 'react';
import { 
  ShieldAlert, Flame, Ambulance, HeartPulse, ShieldCheck, 
  Baby, UserRound, Car, Settings, Phone, MapPin, 
  Stethoscope, Brain, Apple, Activity, Droplets, 
  Dog, ClipboardList, Info, LogOut, ChevronRight,
  GanttChartSquare, FileText, Landmark, Building2, Truck, Syringe,
  Globe, Navigation, Plane, Bus, Zap, Droplet, UserCheck, Shield, LifeBuoy, Pill, Languages,
  Lock, Wind, CloudRain, GraduationCap, Anchor, Waves, AlertTriangle, BookOpen, Search, Bell,
  UserPlus, Leaf, Moon, Heart, Briefcase, Pill as PillIcon, XCircle, CreditCard, Scale, User,
  FileSearch, HardHat, TrendingUp, HandCoins, GraduationCap as GradIcon, Wifi, Laptop
} from 'lucide-react';
import { ServiceItem, Language } from './types';

export const LANGUAGE_LIST: { id: Language; name: string; nativeName: string }[] = [
  { id: 'en', name: 'English', nativeName: 'English' },
  { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { id: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { id: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
];

export const TRANSLATIONS: Partial<Record<Language, any>> = {
  en: {
    app_name: 'Indian Helpline & Services',
    subtitle: 'All Emergency & Consultation Numbers',
    alerts: 'ALERTS',
    search_placeholder: 'Search 100+ Helpline & Services...',
    covid_helpline: 'COVID-19 Helpline: 011-23978046 / 1075',
    home: 'HOME',
    consult: 'CONSULT',
    call: 'CALL',
    more: 'MORE',
    open_portal: 'Open Official Portal',
    portal_warning: 'Redirecting to official government website.',
    ai_assistant: 'Official Information Assistant',
    chat_placeholder: 'Ask AI about this service...',
    no_results: 'No services found matching your search.'
  },
  hi: {
    app_name: 'भारतीय हेल्पलाइन एवं सेवाएं',
    subtitle: 'सभी आपातकालीन और परामर्श नंबर',
    alerts: 'अलर्ट',
    search_placeholder: '100+ हेल्पलाइन और सेवाएं खोजें...',
    covid_helpline: 'कोविड-19 हेल्पलाइन: 011-23978046 / 1075',
    home: 'होम',
    consult: 'परामर्श',
    call: 'कॉल',
    more: 'अधिक',
    open_portal: 'आधिकारिक पोर्टल खोलें',
    portal_warning: 'आधिकारिक सरकारी वेबसाइट पर पुनर्निर्देशित किया जा रहा है।',
    ai_assistant: 'आधिकारिक सूचना सहायक',
    chat_placeholder: 'इस सेवा के बारे में AI से पूछें...',
    no_results: 'आपकी खोज से मेल खाने वाली कोई सेवा नहीं मिली।'
  }
};

export const EMERGENCY_SERVICES: ServiceItem[] = [
  { id: 'e1', name: 'National Emergency', nameHi: 'राष्ट्रीय आपातकालीन', icon: 'Phone', number: '112', category: 'EMERGENCY', color: 'red', bgColor: 'bg-red-50' },
  { id: 'e2', name: 'Police', nameHi: 'पुलिस', icon: 'ShieldAlert', number: '100', category: 'EMERGENCY', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'e3', name: 'Fire', nameHi: 'दमकल', icon: 'Flame', number: '101', category: 'EMERGENCY', color: 'orange', bgColor: 'bg-orange-50' },
  { id: 'e4', name: 'Ambulance', nameHi: 'एम्बुलेंस', icon: 'Ambulance', number: '102', category: 'EMERGENCY', color: 'red', bgColor: 'bg-red-50' },
  { id: 'e5', name: 'Disaster Services', nameHi: 'आपदा प्रबंधन', icon: 'AlertTriangle', number: '108', category: 'EMERGENCY', color: 'red', bgColor: 'bg-red-50' },
  { id: 'e6', name: 'Women Helpline', nameHi: 'महिला हेल्पलाइन', icon: 'UserRound', number: '1091', category: 'EMERGENCY', color: 'pink', bgColor: 'bg-pink-50' },
  { id: 'e7', name: 'Cyber Crime', nameHi: 'साइबर अपराध', icon: 'Lock', number: '1930', category: 'EMERGENCY', color: 'slate', bgColor: 'bg-slate-50' },
];

export const GOV_PORTALS: ServiceItem[] = [
  // Identity & Documents
  { id: 'p1', name: 'Aadhaar (UIDAI)', nameHi: 'आधार कार्ड', icon: 'User', number: 'uidai.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'p2', name: 'PAN Card', nameHi: 'पैन कार्ड', icon: 'CreditCard', number: 'incometaxindia.gov.in', category: 'PUBLIC', color: 'indigo', bgColor: 'bg-indigo-50' },
  { id: 'p3', name: 'Voter ID', nameHi: 'मतदाता पहचान पत्र', icon: 'UserCheck', number: 'voters.eci.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-100' },
  { id: 'p4', name: 'Passport Seva', nameHi: 'पासपोर्ट सेवा', icon: 'Globe', number: 'passportindia.gov.in', category: 'PUBLIC', color: 'sky', bgColor: 'bg-sky-50' },
  { id: 'p5', name: 'DigiLocker', nameHi: 'डिजिलॉकर', icon: 'Lock', number: 'digilocker.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'p6', name: 'UMANG', nameHi: 'उमंग', icon: 'GanttChartSquare', number: 'web.umang.gov.in', category: 'PUBLIC', color: 'orange', bgColor: 'bg-orange-50' },
  { id: 'p6b', name: 'e-Aadhaar', nameHi: 'ई-आधार डाउनलोड', icon: 'FileSearch', number: 'myaadhaar.uidai.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  
  // Finance & Tax
  { id: 'p7', name: 'ITR Filing', nameHi: 'आयकर रिटर्न', icon: 'FileText', number: 'incometax.gov.in', category: 'PUBLIC', color: 'teal', bgColor: 'bg-teal-50' },
  { id: 'p8', name: 'GST Portal', nameHi: 'जीएसटी पोर्टल', icon: 'Landmark', number: 'gst.gov.in', category: 'PUBLIC', color: 'purple', bgColor: 'bg-purple-50' },
  { id: 'p9', name: 'EPFO (PF)', nameHi: 'ईपीएफओ (पीएफ)', icon: 'Activity', number: 'epfindia.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'p9b', name: 'Pension Portal', nameHi: 'पेंशन पोर्टल', icon: 'HandCoins', number: 'pensionersportal.gov.in', category: 'PUBLIC', color: 'amber', bgColor: 'bg-amber-50' },
  
  // Transport
  { id: 'p20', name: 'Driving Licence', nameHi: 'ड्राइविंग लाइसेंस', icon: 'Car', number: 'sarathi.parivahan.gov.in', category: 'PUBLIC', color: 'orange', bgColor: 'bg-orange-50' },
  { id: 'p21', name: 'Vehicle RC', nameHi: 'वाहन आरसी', icon: 'FileText', number: 'vahan.parivahan.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'p22', name: 'FASTag', nameHi: 'फास्टैग पोर्टल', icon: 'Zap', number: 'ihmcl.co.in', category: 'PUBLIC', color: 'teal', bgColor: 'bg-teal-50' },

  // Schemes & Health
  { id: 'p10', name: 'Ayushman Bharat', nameHi: 'आयुष्मान भारत', icon: 'HeartPulse', number: 'nha.gov.in', category: 'PUBLIC', color: 'red', bgColor: 'bg-red-50' },
  { id: 'p11', name: 'PM Kisan', nameHi: 'पीएम किसान', icon: 'Leaf', number: 'pmkisan.gov.in', category: 'PUBLIC', color: 'green', bgColor: 'bg-green-50' },
  { id: 'p12', name: 'PM Awas Yojana', nameHi: 'पीएम आवास योजना', icon: 'Building2', number: 'pmay-urban.gov.in', category: 'PUBLIC', color: 'amber', bgColor: 'bg-amber-50' },
  { id: 'p12b', name: 'PM Ujjwala Yojana', nameHi: 'उज्ज्वला योजना', icon: 'Flame', number: 'pmuy.gov.in', category: 'PUBLIC', color: 'orange', bgColor: 'bg-orange-50' },
  
  // Education & Scholarship
  { id: 'p30', name: 'Scholarship Portal', nameHi: 'छात्रवृत्ति पोर्टल', icon: 'GradIcon', number: 'scholarships.gov.in', category: 'PUBLIC', color: 'indigo', bgColor: 'bg-indigo-50' },
  { id: 'p31', name: 'UGC Portal', nameHi: 'यूजीसी पोर्टल', icon: 'Landmark', number: 'ugc.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'p32', name: 'CBSE Portal', nameHi: 'सीबीएसई पोर्टल', icon: 'BookOpen', number: 'cbse.gov.in', category: 'PUBLIC', color: 'sky', bgColor: 'bg-sky-50' },

  // Law & Legal
  { id: 'p13', name: 'eCourts', nameHi: 'ई-कोर्ट', icon: 'Scale', number: 'ecourts.gov.in', category: 'PUBLIC', color: 'slate', bgColor: 'bg-slate-100' },
  { id: 'p13b', name: 'Consumer Court', nameHi: 'उपभोक्ता न्यायालय', icon: 'Scale', number: 'edaakhil.nic.in', category: 'PUBLIC', color: 'red', bgColor: 'bg-red-50' },

  // Labor & Business
  { id: 'p40', name: 'e-Shram', nameHi: 'ई-श्रम पोर्टल', icon: 'HardHat', number: 'eshram.gov.in', category: 'PUBLIC', color: 'orange', bgColor: 'bg-orange-50' },
  { id: 'p41', name: 'MSME Registration', nameHi: 'एमएसएमई पंजीकरण', icon: 'TrendingUp', number: 'udyamregistration.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
  { id: 'p42', name: 'Startup India', nameHi: 'स्टार्टअप इंडिया', icon: 'Zap', number: 'startupindia.gov.in', category: 'PUBLIC', color: 'blue', bgColor: 'bg-blue-50' },
];

export const CONSULTATION_SERVICES: ServiceItem[] = [
  { id: 'c1', name: 'Doctor', nameHi: 'डॉक्टर', icon: 'Stethoscope', category: 'CONSULT', color: 'blue', bgColor: 'bg-blue-100' },
  { id: 'c2', name: 'Dietician', nameHi: 'आहार विशेषज्ञ', icon: 'Apple', category: 'CONSULT', color: 'red', bgColor: 'bg-red-100' },
  { id: 'c3', name: 'Psychologist', nameHi: 'मनोवैज्ञानिक', icon: 'Brain', category: 'CONSULT', color: 'purple', bgColor: 'bg-purple-100' },
  { id: 'c4', name: 'De-Addiction', nameHi: 'नशा मुक्ति', icon: 'XCircle', category: 'CONSULT', color: 'green', bgColor: 'bg-green-100' },
  { id: 'c5', name: 'Yoga', nameHi: 'योग', icon: 'UserPlus', category: 'CONSULT', color: 'emerald', bgColor: 'bg-emerald-100' },
  { id: 'c6', name: 'Ayurveda', nameHi: 'आयुर्वेद', icon: 'Leaf', category: 'CONSULT', color: 'amber', bgColor: 'bg-amber-100' },
  { id: 'c7', name: 'Mental Health', nameHi: 'मानसिक स्वास्थ्य', icon: 'Heart', category: 'CONSULT', color: 'rose', bgColor: 'bg-rose-100' },
  { id: 'c8', name: 'Blood Bank', nameHi: 'ब्लड बैंक', icon: 'Droplets', category: 'CONSULT', color: 'red', bgColor: 'bg-red-100' },
  { id: 'c9', name: 'Animal Helpline', nameHi: 'पशु हेल्पलाइन', icon: 'Dog', category: 'CONSULT', color: 'orange', bgColor: 'bg-orange-100' },
  { id: 'c10', name: 'Old Age Care', nameHi: 'वृद्धावस्था देखभाल', icon: 'UserCheck', category: 'CONSULT', color: 'indigo', bgColor: 'bg-indigo-100' },
  { id: 'c11', name: 'Cyber Crime', nameHi: 'साइबर अपराध', icon: 'Lock', category: 'CONSULT', color: 'slate', bgColor: 'bg-slate-100' },
  { id: 'c12', name: 'Career Advice', nameHi: 'करियर सलाह', icon: 'Briefcase', category: 'CONSULT', color: 'sky', bgColor: 'bg-sky-100' },
];

export const getIcon = (name: string, size = 24, className = "") => {
  const icons: Record<string, any> = {
    ShieldAlert, Flame, Ambulance, HeartPulse, ShieldCheck, 
    Baby, UserRound, Car, Settings, Phone, MapPin, 
    Stethoscope, Brain, Apple, Activity, Droplets, 
    Dog, ClipboardList, Info, LogOut, ChevronRight,
    GanttChartSquare, FileText, Landmark, Building2, Truck, Syringe,
    Globe, Navigation, Plane, Bus, Zap, Droplet, UserCheck, Shield, LifeBuoy, Pill, Languages, Lock,
    Wind, CloudRain, GraduationCap, Anchor, Waves, AlertTriangle, BookOpen, Search, Bell,
    UserPlus, Leaf, Moon, Heart, Briefcase, PillIcon, XCircle, CreditCard, Scale, User,
    FileSearch, HardHat, TrendingUp, HandCoins, GradIcon, Wifi, Laptop
  };
  const IconComp = icons[name] || Info;
  return <IconComp size={size} className={className} />;
};
