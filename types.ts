
export type Language = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'gu' | 'kn' | 'ml' | 'pa';
export type City = 'All India' | 'Kolkata' | 'Tripura' | 'Delhi' | 'Uttarakhand' | 'Uttar Pradesh' | 'Telangana' | 'Tamil Nadu';

export enum Screen {
  Splash = 'SPLASH',
  Home = 'HOME',
  Consult = 'CONSULT',
  Call = 'CALL',
  More = 'MORE',
  Settings = 'SETTINGS',
  CitySelection = 'CITY_SELECTION',
  LanguageSelection = 'LANGUAGE_SELECTION'
}

export interface ServiceItem {
  id: string;
  name: string;
  nameHi: string;
  icon: string;
  number?: string;
  category: 'EMERGENCY' | 'CONSULT' | 'PUBLIC';
  color: string;
  bgColor: string;
}
