
import React from 'react';
import { 
  ShieldAlert, Flame, Ambulance, HeartPulse, ShieldCheck, 
  Baby, UserRound, Car, Settings, Phone, MapPin, 
  Stethoscope, Brain, Apple, Activity, Droplets, 
  Dog, ClipboardList, Info, LogOut, ChevronRight,
  GanttChartSquare, FileText, Landmark, Building2, Truck, Syringe,
  Globe, Navigation, Plane, Bus, Zap, Droplet, UserCheck, Shield, LifeBuoy, Pill, Languages,
  Lock, Wind, CloudRain, GraduationCap, Anchor, Waves, AlertTriangle, BookOpen
} from 'lucide-react';
import { ServiceItem, Language } from './types';

export const LANGUAGE_LIST: { id: Language; name: string; nativeName: string }[] = [
  { id: 'en', name: 'English', nativeName: 'English' },
  { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { id: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { id: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { id: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { id: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { id: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { id: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { id: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    app_name: 'Bharat Helpline',
    emergency_title: 'EMERGENCY 112',
    sos_btn: 'SOS',
    home: 'Home',
    change_city: 'Select Region',
    profile: 'Settings',
    select_lang: 'Language',
    categories: {
      emergency: 'Emergency Services',
      health: 'Health & Hospitals',
      public: 'Public Helplines',
      hospitals: 'Hospitals & Medical',
      civic: 'Civic & Utilities',
      covid: 'COVID-19',
      tourism: 'Tourism & Travel',
      women_child: 'Women & Child',
      police_stations: 'Police & Safety',
      blood_banks: 'Blood & Pharmacy',
      fire_stations: 'Fire Stations',
      cyber_safety: 'Cyber & Safety',
      disaster: 'Flood & Disaster',
      education: 'Education Support',
      coastal: 'Coastal Security'
    }
  },
  hi: {
    app_name: 'भारत हेल्पलाइन',
    emergency_title: 'आपातकालीन 112',
    sos_btn: 'एसओएस',
    home: 'होम',
    change_city: 'क्षेत्र चुनें',
    profile: 'सेटिंग्स',
    select_lang: 'भाषा',
    categories: {
      emergency: 'आपातकालीन सेवाएं',
      health: 'स्वास्थ्य और अस्पताल',
      public: 'सार्वजनिक हेल्पलाइन',
      hospitals: 'अस्पताल और चिकित्सा',
      civic: 'नागरिक और उपयोगिताएँ',
      covid: 'कोविड-19',
      tourism: 'पर्यटन और यात्रा',
      women_child: 'महिला एवं बाल सुरक्षा',
      police_stations: 'पुलिस और सुरक्षा',
      blood_banks: 'ब्लड बैंक और फार्मेसी',
      fire_stations: 'दमकल केंद्र',
      cyber_safety: 'साइबर और सुरक्षा',
      disaster: 'बाढ़ और आपदा',
      education: 'शिक्षा सहायता',
      coastal: 'तटीय सुरक्षा'
    }
  },
  ta: {
    app_name: 'பாரத் ஹெல்ப்லைன்',
    emergency_title: 'அவசரம் 112',
    sos_btn: 'SOS',
    home: 'முகப்பு',
    change_city: 'பகுதியைத் தேர்ந்தெடுக்கவும்',
    profile: 'அமைப்புகள்',
    select_lang: 'மொழி',
    categories: {
      emergency: 'அவசர சேவைகள்',
      health: 'சுகாதாரம் மற்றும் மருத்துவமனைகள்',
      public: 'பொது உதவி எண்கள்',
      hospitals: 'மருத்துவமனைகள் மற்றும் மருத்துவம்',
      civic: 'நகர சேவைகள்',
      covid: 'கோவிட்-19',
      tourism: 'சுற்றுலா மற்றும் பயணம்',
      women_child: 'பெண்கள் மற்றும் குழந்தைகள் பாதுகாப்பு',
      police_stations: 'காவல் மற்றும் பாதுகாப்பு',
      blood_banks: 'இரத்த வங்கி மற்றும் மருந்தகம்',
      fire_stations: 'தீயணைப்பு நிலையங்கள்',
      cyber_safety: 'சைபர் மற்றும் பாதுகாப்பு',
      disaster: 'வெள்ளம் மற்றும் பேரழிவு',
      education: 'கல்வி உதவி',
      coastal: 'கடலோர பாதுகாப்பு'
    }
  },
  te: {
    app_name: 'భారత్ హెల్ప్‌లైన్',
    emergency_title: 'అత్యవసరం 112',
    sos_btn: 'SOS',
    home: 'హోమ్',
    change_city: 'ప్రాంతాన్ని ఎంచుకోండి',
    profile: 'సెట్టింగ్స్',
    select_lang: 'భాష',
    categories: {
      emergency: 'అత్యవసర సేవలు',
      health: 'ఆరోగ్యం మరియు ఆసుపత్రులు',
      public: 'పబ్లిక్ హెల్ప్‌లైన్',
      hospitals: 'ఆసుపత్రులు మరియు వైద్యం',
      civic: 'పౌర సేవలు',
      covid: 'కోవిడ్-19',
      tourism: 'పర్యాటకం మరియు ప్రయాణం',
      women_child: 'మహిళా మరియు శిశు రక్షణ',
      police_stations: 'పోలీస్ స్టేషన్లు',
      blood_banks: 'బ్లడ్ బ్యాంక్ మరియు ఫార్మసీ',
      fire_stations: 'ఫైర్ స్టేషన్లు',
      cyber_safety: 'సైబర్ మరియు భద్రత',
      disaster: 'వరద మరియు విపత్తు',
      education: 'విద్య సహాయం',
      coastal: 'తీరప్రాంత భద్రత'
    }
  },
  bn: { app_name: 'ভারত হেল্পলাইন', emergency_title: 'জরুরি ১১২', sos_btn: 'এসওএস', home: 'হোম', change_city: 'অঞ্চল নির্বাচন', profile: 'সেটিংস', select_lang: 'ভাষা', categories: { emergency: 'জরুরি পরিষেবা', health: 'স্বাস্থ্য ও হাসপাতাল', public: 'পাবলিক হেল্পলাইন', hospitals: 'হাসপাতাল ও চিকিৎসা', civic: 'নাগরিক পরিষেবা', covid: 'কোভিড-১৯', tourism: 'পর্যটন ও ভ্রমণ', women_child: 'নারী ও শিশু সুরক্ষা', police_stations: 'থানা', blood_banks: 'ব্লাড ব্যাঙ্ক ও ফার্মেসি', fire_stations: 'দমকল কেন্দ্র', cyber_safety: 'সাইবার ও নিরাপত্তা', disaster: 'বন্যা ও দুর্যোগ', education: 'শিক্ষা সহায়তা', coastal: 'উপকূলীয় নিরাপত্তা' } },
  mr: { app_name: 'भारत हेल्पलाइन', emergency_title: 'आणीबाणी ११२', sos_btn: 'SOS', home: 'होम', change_city: 'क्षेत्र निवडा', profile: 'সেটিংস', select_lang: 'भाषा', categories: { emergency: 'आणीबाणी सेवा', health: 'आरोग्य आणि रुग्णालये', public: 'सार्वजनिक हेल्पलाइन', hospitals: 'रुग्णालये आणि वैद्यकीय', civic: 'नागरी सेवा', covid: 'कोविड-१९', tourism: 'पर्यटन आणि प्रवास', women_child: 'महिला आणि बाल सुरक्षा', police_stations: 'पोलीस ठाणे', blood_banks: 'ब्लड बँक आणि फार्मसी', fire_stations: 'अग्निशमन केंद्र', cyber_safety: 'सायबर आणि सुरक्षा', disaster: 'पूर आणि आपत्ती', education: 'शिक्षण मदत', coastal: 'किनारी सुरक्षा' } },
  gu: { app_name: 'ભારત હેલ્પલાઇન', emergency_title: 'ઇમરજન્સી 112', sos_btn: 'SOS', home: 'હોમ', change_city: 'પ્રદેશ પસંદ કરો', profile: 'સેટિંગ્સ', select_lang: 'ભાષા', categories: { emergency: 'ઇમરજન્સી સેવાઓ', health: 'આરોગ્ય અને હોસ્પિટલો', public: 'જાહેર હેલ્પલાઇન', hospitals: 'હોસ્પિટલો અને તબીબી', civic: 'નાગરિક સેવાઓ', covid: 'કોવિડ-19', tourism: 'પ્રવાસન અને મુસાફરી', women_child: 'મહિલા અને બાળ સુરક્ષા', police_stations: 'પોલીસ સ્ટેશન', blood_banks: 'બ્લડ બેંક અને ફાર્મસી', fire_stations: 'ફાયર સ્ટેશન', cyber_safety: 'સાયબર અને સુરક્ષા', disaster: 'પૂર અને આપત્તિ', education: 'શિક્ષણ સહાય', coastal: 'તટીય સુરક્ષા' } },
  kn: { app_name: 'ಭಾರತ್ ಹೆಲ್ಪಲೈನ್', emergency_title: 'ತುರ್ತು 112', sos_btn: 'SOS', home: 'ಮುಖಪುಟ', change_city: 'ಪ್ರದೇಶವನ್ನು ಆರಿಸಿ', profile: 'ಸೆಟ್ಟಿಂಗ್ಸ್', select_lang: 'ಭಾಷೆ', categories: { emergency: 'ತುರ್ತು ಸೇವೆಗಳು', health: 'ಆರೋಗ್ಯ ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳು', public: 'ಸಾರ್ವജനಿಕ ಸಹಾಯವಾಣಿ', hospitals: 'ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ', civic: 'ನಾಗರಿಕ ಸೇವೆಗಳು', covid: 'ಕೋವಿಡ್-19', tourism: 'ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ಪ್ರಯಾಣ', women_child: 'ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಸುರಕ್ಷತೆ', police_stations: 'ಪೊಲೀಸ್ ಠಾಣೆಗಳು', blood_banks: 'ಬ್ಲಡ್ ಬ್ಯಾಂಕ್ ಮತ್ತು ಫಾರ್ಮಸಿ', fire_stations: 'アಗ್ನಿಶಾಮಕ ಕೇಂದ್ರಗಳು', cyber_safety: 'ಸೈಬರ್ ಮತ್ತು ಭದ್ರತೆ', disaster: 'ಪ್ರವಾಹ ಮತ್ತು ವಿಪತ್ತು', education: 'ಶಿಕ್ಷಣ ಸಹಾಯ', coastal: 'ಕರಾವಳಿ ಭದ್ರತೆ' } },
  ml: { app_name: 'ഭാരത് ഹെൽപ്പ്‌ലൈൻ', emergency_title: 'അടിയന്തിരം 112', sos_btn: 'SOS', home: 'ഹോം', change_city: 'പ്രദേശം തിരഞ്ഞെടുക്കുക', profile: 'സെറ്റിംഗ്സ്', select_lang: 'ഭാഷ', categories: { emergency: 'അടിയന്തിര സേവനങ്ങൾ', health: 'ആരോഗ്യം, ആശുപത്രികൾ', public: 'പൊതു ഹെൽപ്പ്‌ലൈൻ', hospitals: 'ആശുപത്രികൾ, വൈദ്യസഹായം', civic: 'പൗര സേവനങ്ങൾ', covid: 'കോവിഡ്-19', tourism: 'ടൂറിസം, യാത്ര', women_child: 'സ്ത്രീ-ശിശു സുരക്ഷ', police_stations: 'പോലീസ് സ്റ്റേഷനുകൾ', blood_banks: 'ബ്ലഡ് ബാങ്ക്, ഫാർമസി', fire_stations: 'ഫയർ സ്റ്റേഷനുകൾ', cyber_safety: 'സൈബർ സുരക്ഷ', disaster: 'പ്രളയവും ദുരന്തവും', education: 'വിദ്യാഭ്യാസ സഹായം', coastal: 'തീരദേശ സുരക്ഷ' } },
  pa: { app_name: 'ਭਾਰਤ ਹੈਲਪਲਾਈਨ', emergency_title: 'ਐਮਰਜੈਂਸੀ 112', sos_btn: 'SOS', home: 'ਹੋਮ', change_city: 'ਖੇਤਰ ਚੁਣੋ', profile: 'ਸੈਟਿੰਗਜ਼', select_lang: 'ਭਾਸ਼ਾ', categories: { emergency: 'ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ', health: 'ਸਿਹত ਅਤੇ ਹਸਪਤਾਲ', public: 'ਜਨਤਕ ਹੈਲਪਲਾਈਨ', hospitals: 'ਹਸਪਤਾਲ ਅਤੇ ਮੈਡੀਕਲ', civic: 'ਨਾਗਰਿਕ ਸੇਵਾਵਾਂ', covid: 'ਕੋਵਿਡ-19', tourism: 'ਸੈਰ-ਸਪாਟਾ ਅਤੇ ਯਾਤરા', women_child: 'ਮਹਿਲਾ ਅਤੇ ਬਾਲ ਸੁਰੱਖਿਆ', police_stations: 'ਪੁਲਿਸ ਸਟੇਸ਼ਨ', blood_banks: 'ਬਲੱਡ ਬੈਂਕ ਅਤੇ ਫਾਰਮੇਸੀ', fire_stations: 'ਫਾਇਰ ਸਟੇਸ਼ਨ', cyber_safety: 'ਸਾਈਬਰ ਅਤੇ ਸੁਰੱਖਿਆ', disaster: 'ਹੜ੍ਹ ਅਤੇ ਆਫਤ', education: 'ਸਿੱਖਿਆ ਸਹਾਇਤਾ', coastal: 'ਤੱਟੀ ਸੁਰੱਖਿਆ' } }
};

export const EMERGENCY_SERVICES: ServiceItem[] = [
  { id: '1', name: 'Police', nameHi: 'पुलिस', icon: 'ShieldAlert', number: '112 / 100', category: 'EMERGENCY', color: 'blue' },
  { id: '2', name: 'Fire', nameHi: 'दमकल', icon: 'Flame', number: '101', category: 'EMERGENCY', color: 'red' },
  { id: '3', name: 'Ambulance', nameHi: 'एम्बुलेंस', icon: 'Ambulance', number: '108 / 102', category: 'EMERGENCY', color: 'green' },
  { id: '4', name: 'Disaster (NDRF)', nameHi: 'आपदा प्रबंधन', icon: 'ShieldCheck', number: '1078 / 112', category: 'EMERGENCY', color: 'orange' },
];

// NATIONAL DATA
export const NATIONAL_SAFETY: ServiceItem[] = [
  { id: 'ns1', name: 'Women Helpline', nameHi: 'महिला हेल्पलाइन', icon: 'UserRound', number: '1091 / 181', category: 'PUBLIC', color: 'purple' },
  { id: 'ns2', name: 'Child Helpline', nameHi: 'चाइल्ड हेल्पलाइन', icon: 'Baby', number: '1098', category: 'PUBLIC', color: 'pink' },
  { id: 'ns3', name: 'Senior Citizen', nameHi: 'वरिष्ठ नागरिक', icon: 'UserCheck', number: '14567', category: 'PUBLIC', color: 'blue' },
  { id: 'ns4', name: 'Cyber Crime', nameHi: 'साइबर अपराध', icon: 'Lock', number: '1930 / 155260', category: 'PUBLIC', color: 'slate' },
];

export const NATIONAL_CIVIC: ServiceItem[] = [
  { id: 'nc1', name: 'LPG Leakage', nameHi: 'एलपीजी रिसाव', icon: 'Flame', number: '1906', category: 'EMERGENCY', color: 'red' },
  { id: 'nc2', name: 'Railway Enquiry', nameHi: 'रेलवे पूछताछ', icon: 'Bus', number: '139', category: 'PUBLIC', color: 'blue' },
  { id: 'nc3', name: 'Electricity Help', nameHi: 'बिजली सहायता', icon: 'Zap', number: '1912', category: 'PUBLIC', color: 'yellow' },
  { id: 'nc4', name: 'Road Accident', nameHi: 'सड़क दुर्घटना', icon: 'Car', number: '1073', category: 'EMERGENCY', color: 'orange' },
];

export const NATIONAL_HEALTH: ServiceItem[] = [
  { id: 'nh1', name: 'National Health', nameHi: 'राष्ट्रीय स्वास्थ्य', icon: 'HeartPulse', number: '104', category: 'HEALTH', color: 'blue' },
  { id: 'nh2', name: 'AIDS Helpline', nameHi: 'एड्स हेल्पलाइन', icon: 'Activity', number: '1097', category: 'HEALTH', color: 'red' },
  { id: 'nh3', name: 'Mental Health', nameHi: 'मानसिक स्वास्थ्य', icon: 'Brain', number: '14416', category: 'HEALTH', color: 'purple' },
];

// TAMIL NADU DATA
export const TAMILNADU_SAFETY: ServiceItem[] = [
  { id: 'tn_s1', name: 'Coastal Security', nameHi: 'तटीय सुरक्षा', icon: 'Waves', number: '1093', category: 'PUBLIC', color: 'blue' },
  { id: 'tn_s2', name: 'Traffic Police', nameHi: 'ट्रैफिक पुलिस', icon: 'Car', number: '103', category: 'PUBLIC', color: 'orange' },
  { id: 'tn_s3', name: 'Women Helpline', nameHi: 'महिला हेल्पलाइन', icon: 'UserRound', number: '1091', category: 'PUBLIC', color: 'purple' },
  { id: 'tn_s4', name: 'Railway Police', nameHi: 'रेलवे पुलिस', icon: 'Shield', number: '9962500500 / 1512', category: 'PUBLIC', color: 'blue' },
  { id: 'tn_s5', name: 'Anti-Ragging', nameHi: 'एंटी-रैगिंग', icon: 'ShieldAlert', number: '18001805522', category: 'PUBLIC', color: 'red' },
  { id: 'tn_s6', name: 'Child Line', nameHi: 'चाइल्ड लाइन', icon: 'Baby', number: '1098', category: 'PUBLIC', color: 'pink' },
];

export const TAMILNADU_DISASTER: ServiceItem[] = [
  { id: 'tn_d1', name: 'Flood Helpline', nameHi: 'बाढ़ हेल्पलाइन', icon: 'CloudRain', number: '1070 / 9445869848', category: 'EMERGENCY', color: 'blue' },
  { id: 'tn_d2', name: 'NDRF Helpline', nameHi: 'एनडीआरएफ हेल्पलाइन', icon: 'ShieldCheck', number: '+91-9711077372', category: 'EMERGENCY', color: 'orange' },
  { id: 'tn_d3', name: 'Gas Leakage TN', nameHi: 'गैस रिसाव', icon: 'Flame', number: '1716', category: 'EMERGENCY', color: 'red' },
  { id: 'tn_d4', name: 'Chennai Corp Complain', nameHi: 'चेन्नई कॉर्पोरेशन', icon: 'Building2', number: '1913', category: 'PUBLIC', color: 'blue' },
];

export const TAMILNADU_HEALTH: ServiceItem[] = [
  { id: 'tn_h1', name: 'Suicide Prevention', nameHi: 'आत्महत्या रोकथाम', icon: 'Brain', number: '104 / 8526565656', category: 'HEALTH', color: 'purple' },
  { id: 'tn_h2', name: 'Blood Bank Service', nameHi: 'ब्लड बैंक सेवा', icon: 'Droplets', number: '1910', category: 'HEALTH', color: 'red' },
  { id: 'tn_h3', name: 'Ration Card Help', nameHi: 'राशन कार्ड सहायता', icon: 'ClipboardList', number: '1967', category: 'PUBLIC', color: 'green' },
  { id: 'tn_h4', name: 'Student Exam Help', nameHi: 'छात्र परीक्षा सहायता', icon: 'BookOpen', number: '14417', category: 'PUBLIC', color: 'blue' },
];

export const TAMILNADU_TRAVEL: ServiceItem[] = [
  { id: 'tn_t1', name: 'Tourist Enquiry', nameHi: 'पर्यटक पूछताछ', icon: 'Globe', number: '1913', category: 'PUBLIC', color: 'blue' },
  { id: 'tn_t2', name: 'TN Tourism Office', nameHi: 'पर्यटन कार्यालय', icon: 'Building2', number: '044-25368538', category: 'PUBLIC', color: 'teal' },
  { id: 'tn_t3', name: 'Railway Protection', nameHi: 'रेलवे सुरक्षा', icon: 'ShieldCheck', number: '1322', category: 'PUBLIC', color: 'blue' },
];

// TELANGANA DATA
export const TELANGANA_HOSPITALS: ServiceItem[] = [
  { id: 'tg_h1', name: 'Apollo Jubilee Hills', nameHi: 'अपोलो जुबली हिल्स', icon: 'Building2', number: '040-23608050 / 1066', category: 'HEALTH', color: 'blue' },
  { id: 'tg_h2', name: 'Gandhi Hospital', nameHi: 'गांधी अस्पताल', icon: 'Building2', number: '040-27505566', category: 'HEALTH', color: 'red' },
  { id: 'tg_h3', name: 'Care Hospitals', nameHi: 'केयर अस्पताल', icon: 'HeartPulse', number: '040-61656565', category: 'HEALTH', color: 'orange' },
];

export const TELANGANA_SAFETY: ServiceItem[] = [
  { id: 'tg_s1', name: 'State Control Room', nameHi: 'राज्य नियंत्रण कक्ष', icon: 'Phone', number: '040-23450624', category: 'PUBLIC', color: 'blue' },
  { id: 'tg_s2', name: 'Women Helpline', nameHi: 'महिला हेल्पलाइन', icon: 'UserRound', number: '181', category: 'PUBLIC', color: 'purple' },
];

export const TELANGANA_CIVIC: ServiceItem[] = [
  { id: 'tg_c1', name: 'Flood Helpline', nameHi: 'बाढ़ हेल्पलाइन', icon: 'CloudRain', number: '9030227324 / 040-2465119', category: 'EMERGENCY', color: 'blue' },
  { id: 'tg_c2', name: 'GHMC Disaster', nameHi: 'जीएचएमसी आपदा', icon: 'ShieldCheck', number: '9000113667', category: 'EMERGENCY', color: 'orange' },
];

export const TELANGANA_BLOOD_BANKS: ServiceItem[] = [
  { id: 'tg_b1', name: 'Red Cross Hyderabad', nameHi: 'रेड क्रॉस', icon: 'Droplets', number: '040-27633087', category: 'HEALTH', color: 'red' },
  { id: 'tg_b4', name: 'Apollo Pharmacy', nameHi: 'अपोलो फार्मेसी', icon: 'Pill', number: '040-23433632', category: 'HEALTH', color: 'green' },
];

export const TELANGANA_TRAVEL: ServiceItem[] = [
  { id: 'tg_t1', name: 'TSTDC Tourism', nameHi: 'तेलंगाना पर्यटन', icon: 'Globe', number: '040-23262152', category: 'PUBLIC', color: 'blue' },
  { id: 'tg_t3', name: 'Railway Help', nameHi: 'रेलवे सहायता', icon: 'Bus', number: '139', category: 'PUBLIC', color: 'blue' },
];

// TRIPURA DATA
export const TRIPURA_HOSPITALS: ServiceItem[] = [
  { id: 'th1', name: 'GB Hospital', nameHi: 'जीबी अस्पताल', icon: 'Building2', number: '0381-2356288', category: 'HEALTH', color: 'red' },
  { id: 'th2', name: 'IGM Hospital', nameHi: 'आईजीএম হাসপাতাল', icon: 'Building2', number: '0381-2325895', category: 'HEALTH', color: 'blue' },
  { id: 'th5', name: 'ILS Hospital', nameHi: 'आईएलएस अस्पताल', icon: 'HeartPulse', number: '0381-2415000', category: 'HEALTH', color: 'orange' },
];

export const TRIPURA_POLICE_STATIONS: ServiceItem[] = [
  { id: 'tp1', name: 'PHQ Agartala', nameHi: 'पीएचक्यू अगरतला', icon: 'Shield', number: '0381-2310177', category: 'PUBLIC', color: 'blue' },
];

export const TRIPURA_SAFETY: ServiceItem[] = [
  { id: 'ts1', name: 'C.M. Helpline', nameHi: 'मुख्यमंत्री हेल्पलाइन', icon: 'Phone', number: '1905', category: 'PUBLIC', color: 'orange' },
];

export const TRIPURA_TRAVEL: ServiceItem[] = [
  { id: 'tt1', name: 'MBB Airport', nameHi: 'एमबीबी हवाई अड्डा', icon: 'Plane', number: '0381-2342224', category: 'PUBLIC', color: 'blue' },
];

export const TRIPURA_CIVIC: ServiceItem[] = [
  { id: 'tc1', name: 'Water Supply', nameHi: 'जल आपूर्ति', icon: 'Droplet', number: '0381-2415058', category: 'PUBLIC', color: 'blue' },
];

// KOLKATA DATA
export const KOLKATA_HOSPITALS: ServiceItem[] = [
  { id: 'kh1', name: 'Medical College', nameHi: 'मेडिकल कॉलेज', icon: 'Syringe', number: '033-22551612', category: 'HEALTH', color: 'red' },
  { id: 'kh2', name: 'SSKM Hospital', nameHi: 'এসএসকেএম হাসপাতাল', icon: 'Building2', number: '033-22236026', category: 'HEALTH', color: 'red' },
];

export const KOLKATA_POLICE_STATIONS: ServiceItem[] = [
  { id: 'kp1', name: 'Lalbazar HQ', nameHi: 'लालबाज़ार एचक्यू', icon: 'Shield', number: '033-22143230', category: 'PUBLIC', color: 'blue' },
];

export const KOLKATA_SAFETY: ServiceItem[] = [
  { id: 'ks1', name: 'Women Helpline', nameHi: 'মহিলা হেল্পলাইন', icon: 'UserRound', number: '1091', category: 'PUBLIC', color: 'purple' },
];

export const KOLKATA_CIVIC: ServiceItem[] = [
  { id: 'cu1', name: 'KMC (Kolkata Corp)', nameHi: 'কেএমসি', icon: 'Landmark', number: '1600333375', category: 'PUBLIC', color: 'blue' },
];

export const DELHI_HOSPITALS: ServiceItem[] = [
  { id: 'dh1', name: 'AIIMS Delhi', nameHi: 'एम्स दिल्ली', icon: 'Building2', number: '011-26588500', category: 'HEALTH', color: 'red' },
];

export const UTTARAKHAND_HOSPITALS: ServiceItem[] = [
  { id: 'uh1', name: 'Civil Hospital (DDN)', nameHi: 'सिविल अस्पताल', icon: 'Building2', number: '0135-2627044', category: 'HEALTH', color: 'red' },
];

export const UP_HOSPITALS: ServiceItem[] = [
  { id: 'up1', name: 'Apollo Noida', nameHi: 'अपोलो नोएडा', icon: 'Building2', number: '0120-4012000', category: 'HEALTH', color: 'red' },
];

export const DELHI_CIVIC: ServiceItem[] = [
  { id: 'dc1', name: 'MCD Helpline', nameHi: 'एमसीडी हेल्पलाइन', icon: 'Landmark', number: '1266', category: 'PUBLIC', color: 'blue' },
];

export const UTTARAKHAND_CIVIC: ServiceItem[] = [
  { id: 'uc1', name: 'CM Helpline', nameHi: 'सीएम हेल्पलाइन', icon: 'Phone', number: '1905', category: 'PUBLIC', color: 'blue' },
];

export const UP_CIVIC: ServiceItem[] = [
  { id: 'upc1', name: 'CM Helpline (UP)', nameHi: 'सीएम हेल्पलाइन', icon: 'Phone', number: '1076', category: 'PUBLIC', color: 'red' },
];

export const UP_SAFETY: ServiceItem[] = [
  { id: 'ups1', name: 'Women Helpline', nameHi: 'महिला हेल्पलाइन', icon: 'UserRound', number: '1090', category: 'PUBLIC', color: 'purple' },
];

export const COVID_SERVICES: ServiceItem[] = [
  { id: 'co1', name: 'National COVID', nameHi: 'राष्ट्रीय कोविड', icon: 'Info', number: '1075', category: 'PUBLIC', color: 'red' },
];

export const getIcon = (name: string, size = 24, className = "") => {
  const icons: Record<string, any> = {
    ShieldAlert, Flame, Ambulance, HeartPulse, ShieldCheck, 
    Baby, UserRound, Car, Settings, Phone, MapPin, 
    Stethoscope, Brain, Apple, Activity, Droplets, 
    Dog, ClipboardList, Info, LogOut, ChevronRight,
    GanttChartSquare, FileText, Landmark, Building2, Truck, Syringe,
    Globe, Navigation, Plane, Bus, Zap, Droplet, UserCheck, Shield, LifeBuoy, Pill, Languages, Lock,
    Wind, CloudRain, GraduationCap, Anchor, Waves, AlertTriangle, BookOpen
  };
  const IconComp = icons[name] || Info;
  return <IconComp size={size} className={className} />;
};
