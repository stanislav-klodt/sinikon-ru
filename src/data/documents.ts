export interface Document {
  id: string;
  title: string;
  type: 'certificate' | 'declaration' | 'iso' | 'warranty' | 'brochure' | 'leaflet' | 'manual';
  category: 'certificates' | 'warranty' | 'promo';
  line?: 'standart' | 'comfort' | 'rainflow' | 'universal' | 'npvh' | 'traps' | 'tools' | 'heating' | 'general';
  year?: number;
  fileUrl?: string;
  previewImage?: string;
  fileSize?: string;
  tags: string[];
}

export const documents: Document[] = [
  // Certificates and declarations
  {
    id: 'decl-standart-pipes',
    title: 'Декларация о соответствии труб Standart ГОСТу',
    type: 'declaration',
    category: 'certificates',
    line: 'standart',
    year: 2023,
    fileSize: '1.2 MB',
    tags: ['декларация', 'трубы', 'standart', 'гост'],
  },
  {
    id: 'decl-standart-fittings',
    title: 'Декларация о соответствии фитингов Standart ГОСТу',
    type: 'declaration',
    category: 'certificates',
    line: 'standart',
    year: 2023,
    fileSize: '980 KB',
    tags: ['декларация', 'фитинги', 'standart', 'гост'],
  },
  {
    id: 'decl-comfort-pipes',
    title: 'Декларация о соответствии труб Comfort Plus ТУ',
    type: 'declaration',
    category: 'certificates',
    line: 'comfort',
    year: 2023,
    fileSize: '1.1 MB',
    tags: ['декларация', 'трубы', 'comfort plus', 'ту'],
  },
  {
    id: 'decl-comfort-fittings',
    title: 'Декларация о соответствии фитингов Comfort Plus ТУ',
    type: 'declaration',
    category: 'certificates',
    line: 'comfort',
    year: 2023,
    fileSize: '890 KB',
    tags: ['декларация', 'фитинги', 'comfort plus', 'ту'],
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 (Bureau Veritas)',
    type: 'iso',
    category: 'certificates',
    line: 'general',
    year: 2024,
    fileSize: '2.4 MB',
    tags: ['iso', '9001', 'bureau veritas', 'качество'],
  },
  {
    id: 'made-in-russia',
    title: 'Сертификат «Сделано в России»',
    type: 'certificate',
    category: 'certificates',
    line: 'general',
    year: 2024,
    fileSize: '1.5 MB',
    tags: ['сделано в россии', 'добровольная сертификация'],
  },
  {
    id: 'decl-rainflow',
    title: 'Декларация о соответствии Rain Flow',
    type: 'declaration',
    category: 'certificates',
    line: 'rainflow',
    year: 2023,
    fileSize: '1.0 MB',
    tags: ['декларация', 'rain flow', 'водосток'],
  },
  {
    id: 'decl-npvh',
    title: 'Декларация о соответствии НПВХ',
    type: 'declaration',
    category: 'certificates',
    line: 'npvh',
    year: 2023,
    fileSize: '1.3 MB',
    tags: ['декларация', 'нпвх', 'наружная канализация'],
  },
  // Promo materials - brochures
  {
    id: 'catalog-main',
    title: 'Каталог продукции SINIKON',
    type: 'brochure',
    category: 'promo',
    line: 'general',
    year: 2024,
    fileSize: '15.2 MB',
    tags: ['каталог', 'продукция', 'общий'],
  },
  {
    id: 'manual-projectors',
    title: 'Пособие для проектировщиков по системам внутренней канализации',
    type: 'manual',
    category: 'promo',
    line: 'general',
    year: 2022,
    fileSize: '8.5 MB',
    tags: ['пособие', 'проектировщики', 'канализация'],
  },
  {
    id: 'brochure-standart',
    title: 'Брошюра SINIKON Standart',
    type: 'brochure',
    category: 'promo',
    line: 'standart',
    year: 2024,
    fileSize: '4.2 MB',
    tags: ['брошюра', 'standart'],
  },
  {
    id: 'brochure-comfort',
    title: 'Брошюра SINIKON Comfort Plus',
    type: 'brochure',
    category: 'promo',
    line: 'comfort',
    year: 2024,
    fileSize: '3.8 MB',
    tags: ['брошюра', 'comfort plus'],
  },
  // Promo materials - leaflets
  {
    id: 'leaflet-rainflow',
    title: 'Листовка Rain Flow',
    type: 'leaflet',
    category: 'promo',
    line: 'rainflow',
    year: 2024,
    fileSize: '1.2 MB',
    tags: ['листовка', 'rain flow', 'водосток'],
  },
  {
    id: 'leaflet-traps',
    title: 'Листовка «Трапы SINIKON»',
    type: 'leaflet',
    category: 'promo',
    line: 'traps',
    year: 2024,
    fileSize: '980 KB',
    tags: ['листовка', 'трапы'],
  },
  {
    id: 'schemes-typical',
    title: 'Типовые схемы монтажа',
    type: 'brochure',
    category: 'promo',
    line: 'general',
    year: 2023,
    fileSize: '6.1 MB',
    tags: ['схемы', 'монтаж', 'типовые'],
  },
];

export const documentLines = [
  { value: 'all', label: 'Все линейки' },
  { value: 'standart', label: 'Standart' },
  { value: 'comfort', label: 'Comfort Plus' },
  { value: 'rainflow', label: 'Rain Flow' },
  { value: 'universal', label: 'Universal' },
  { value: 'npvh', label: 'НПВХ' },
  { value: 'traps', label: 'Трапы' },
  { value: 'heating', label: 'Отопление' },
  { value: 'general', label: 'Общие' },
];

export const documentTypes = [
  { value: 'all', label: 'Все типы' },
  { value: 'declaration', label: 'Декларации' },
  { value: 'certificate', label: 'Сертификаты' },
  { value: 'iso', label: 'ISO' },
];

export const promoTypes = [
  { value: 'all', label: 'Все' },
  { value: 'brochure', label: 'Брошюры' },
  { value: 'leaflet', label: 'Листовки' },
  { value: 'manual', label: 'Пособия' },
];

export const getLineLabel = (line?: string): string => {
  const found = documentLines.find(l => l.value === line);
  return found ? found.label : 'Общий';
};

export const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    certificate: 'Сертификат',
    declaration: 'Декларация',
    iso: 'ISO',
    warranty: 'Гарантия',
    brochure: 'Брошюра',
    leaflet: 'Листовка',
    manual: 'Пособие',
  };
  return labels[type] || type;
};
