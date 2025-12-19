
export type Language = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'gu' | 'kn' | 'ml' | 'pa';
export type City = 'All India' | 'Kolkata' | 'Tripura' | 'Delhi' | 'Uttarakhand' | 'Uttar Pradesh' | 'Telangana' | 'Tamil Nadu';

export enum Screen {
  Splash = 'SPLASH',
  Home = 'HOME',
  Details = 'DETAILS',
  FirstAid = 'FIRST_AID',
  Settings = 'SETTINGS',
  Profile = 'PROFILE',
  CitySelection = 'CITY_SELECTION',
  LanguageSelection = 'LANGUAGE_SELECTION'
}

export interface ServiceItem {
  id: string;
  name: string;
  nameHi: string;
  nameLocal?: string; // Optional local language name
  icon: string;
  number?: string;
  category: 'EMERGENCY' | 'HEALTH' | 'PUBLIC';
  color: string;
}

export interface EmergencyCategory {
  id: string;
  title: string;
  titleHi: string;
  icon: any;
  services: ServiceItem[];
}
