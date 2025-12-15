export interface Distributor {
  id: string;
  companyName: string;
  city: string;
  region: string;
  federalDistrict: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  type: 'wholesale' | 'retail' | 'warehouse';
  pickup: boolean;
  coords: { lat: number; lng: number };
  workingHours?: string;
}

export const distributors: Distributor[] = [
  {
    id: '1',
    companyName: 'СантехОпт Москва',
    city: 'Москва',
    region: 'Московская область',
    federalDistrict: 'Центральный',
    address: 'ул. Промышленная, 25, стр. 1',
    phone: '+7 (495) 123-45-67',
    email: 'info@santehopt-msk.ru',
    website: 'https://santehopt-msk.ru',
    type: 'wholesale',
    pickup: true,
    coords: { lat: 55.7558, lng: 37.6173 },
    workingHours: 'Пн-Пт: 9:00-18:00'
  },
  {
    id: '2',
    companyName: 'ТрубоСнаб СПб',
    city: 'Санкт-Петербург',
    region: 'Ленинградская область',
    federalDistrict: 'Северо-Западный',
    address: 'пр. Невский, 100',
    phone: '+7 (812) 234-56-78',
    email: 'sales@trubosnab-spb.ru',
    website: 'https://trubosnab-spb.ru',
    type: 'wholesale',
    pickup: true,
    coords: { lat: 59.9343, lng: 30.3351 },
    workingHours: 'Пн-Пт: 8:00-17:00'
  },
  {
    id: '3',
    companyName: 'УралПолимер',
    city: 'Екатеринбург',
    region: 'Свердловская область',
    federalDistrict: 'Уральский',
    address: 'ул. Металлургов, 45',
    phone: '+7 (343) 345-67-89',
    email: 'ural@polymer-ekb.ru',
    website: 'https://uralpolymer.ru',
    type: 'wholesale',
    pickup: true,
    coords: { lat: 56.8389, lng: 60.6057 }
  },
  {
    id: '4',
    companyName: 'СибТрубСервис',
    city: 'Новосибирск',
    region: 'Новосибирская область',
    federalDistrict: 'Сибирский',
    address: 'ул. Сибирская, 12',
    phone: '+7 (383) 456-78-90',
    email: 'nsk@sibtrub.ru',
    website: 'https://sibtrubservis.ru',
    type: 'wholesale',
    pickup: false,
    coords: { lat: 55.0084, lng: 82.9357 },
    workingHours: 'Пн-Пт: 9:00-18:00, Сб: 10:00-15:00'
  },
  {
    id: '5',
    companyName: 'КубаньСнаб',
    city: 'Краснодар',
    region: 'Краснодарский край',
    federalDistrict: 'Южный',
    address: 'ул. Красная, 78',
    phone: '+7 (861) 567-89-01',
    email: 'krd@kubansnab.ru',
    website: 'https://kubansnab.ru',
    type: 'retail',
    pickup: true,
    coords: { lat: 45.0355, lng: 38.9753 }
  },
  {
    id: '6',
    companyName: 'ВолгаТрейд',
    city: 'Казань',
    region: 'Республика Татарстан',
    federalDistrict: 'Приволжский',
    address: 'ул. Баумана, 55',
    phone: '+7 (843) 678-90-12',
    email: 'kazan@volgatrade.ru',
    website: 'https://volgatrade.ru',
    type: 'wholesale',
    pickup: true,
    coords: { lat: 55.7887, lng: 49.1221 },
    workingHours: 'Пн-Пт: 8:30-17:30'
  },
  {
    id: '7',
    companyName: 'ДальТруба',
    city: 'Владивосток',
    region: 'Приморский край',
    federalDistrict: 'Дальневосточный',
    address: 'ул. Светланская, 30',
    phone: '+7 (423) 789-01-23',
    email: 'vl@daltruba.ru',
    website: 'https://daltruba.ru',
    type: 'warehouse',
    pickup: true,
    coords: { lat: 43.1155, lng: 131.8855 }
  },
  {
    id: '8',
    companyName: 'СтройМаркет Ростов',
    city: 'Ростов-на-Дону',
    region: 'Ростовская область',
    federalDistrict: 'Южный',
    address: 'пр. Ворошиловский, 88',
    phone: '+7 (863) 890-12-34',
    email: 'rostov@stroymarket.ru',
    website: 'https://stroymarket-rostov.ru',
    type: 'retail',
    pickup: true,
    coords: { lat: 47.2357, lng: 39.7015 },
    workingHours: 'Пн-Сб: 9:00-19:00'
  }
];

export const federalDistricts = [
  'Центральный',
  'Северо-Западный',
  'Южный',
  'Приволжский',
  'Уральский',
  'Сибирский',
  'Дальневосточный'
];

export const popularCities = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Новосибирск', 'Краснодар', 'Казань'];
