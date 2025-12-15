export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  dateISO: string;
  category: 'product' | 'events' | 'documents' | 'production';
  excerpt: string;
  coverImage?: string;
  content?: NewsContentBlock[];
}

export interface NewsContentBlock {
  type: 'text' | 'heading' | 'list' | 'image' | 'cta';
  content?: string;
  items?: string[];
  heading?: string;
  imageUrl?: string;
  caption?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const newsCategories = [
  { value: 'all', label: 'Все' },
  { value: 'product', label: 'Продукция' },
  { value: 'events', label: 'События' },
  { value: 'documents', label: 'Документы' },
  { value: 'production', label: 'Производство' },
];

export const newsYears = [
  { value: 'all', label: 'Все годы' },
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
];

export const getCategoryLabel = (category: string): string => {
  const found = newsCategories.find(c => c.value === category);
  return found ? found.label : category;
};

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    product: 'bg-blue-100 text-blue-800',
    events: 'bg-green-100 text-green-800',
    documents: 'bg-amber-100 text-amber-800',
    production: 'bg-purple-100 text-purple-800',
  };
  return colors[category] || 'bg-muted text-muted-foreground';
};

export const formatDate = (dateISO: string): string => {
  const date = new Date(dateISO);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export const calculateReadTime = (content?: NewsContentBlock[]): number => {
  if (!content) return 2;
  let wordCount = 0;
  content.forEach(block => {
    if (block.content) wordCount += block.content.split(' ').length;
    if (block.items) block.items.forEach(item => wordCount += item.split(' ').length);
  });
  return Math.max(2, Math.ceil(wordCount / 200));
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Новые радиусные компрессионные фитинги собственного производства',
    slug: 'novye-radiusnye-kompressionnye-fittingi',
    dateISO: '2024-12-10',
    category: 'product',
    excerpt: 'Расширяем линейку: новые радиусные компрессионные фитинги для удобного монтажа и аккуратной трассировки.',
    content: [
      {
        type: 'heading',
        heading: 'Что изменилось',
      },
      {
        type: 'text',
        content: 'Мы расширили ассортимент компрессионных фитингов новыми радиусными элементами. Теперь доступны отводы с плавным радиусом для более аккуратной прокладки трубопроводов. Новые изделия производятся на собственных мощностях в Троицке и полностью совместимы с существующими линейками продукции SINIKON.',
      },
      {
        type: 'heading',
        heading: 'Преимущества',
      },
      {
        type: 'list',
        items: [
          'Удобнее формировать повороты и обходы',
          'Аккуратная трассировка без лишних соединений',
          'Понятная совместимость внутри линейки',
          'Документация доступна по линейке',
        ],
      },
      {
        type: 'heading',
        heading: 'Где посмотреть и скачать',
      },
      {
        type: 'text',
        content: 'Технические характеристики, декларации соответствия и каталоги доступны в разделе документов. Для включения в проект используйте BIM-библиотеку SINIKON.',
      },
      {
        type: 'heading',
        heading: 'Как купить',
      },
      {
        type: 'text',
        content: 'Поставки осуществляются через сеть дистрибьюторов. Для подбора ближайшего партнёра используйте раздел «Где купить».',
      },
    ],
  },
  {
    id: '2',
    title: 'Обновление BIM-библиотеки: добавлены новые типоразмеры',
    slug: 'obnovlenie-bim-biblioteki-2024',
    dateISO: '2024-11-28',
    category: 'documents',
    excerpt: 'В BIM-библиотеку SINIKON добавлены новые семейства и типоразмеры для Revit 2024.',
  },
  {
    id: '3',
    title: 'Участие в выставке MosBuild 2024',
    slug: 'mosbuild-2024',
    dateISO: '2024-11-15',
    category: 'events',
    excerpt: 'SINIKON принял участие в крупнейшей строительной выставке России. Итоги и фотоотчёт.',
  },
  {
    id: '4',
    title: 'Расширение производственных мощностей',
    slug: 'rasshirenie-proizvodstva-2024',
    dateISO: '2024-10-20',
    category: 'production',
    excerpt: 'Запущена новая линия экструзии для увеличения объёмов выпуска труб большого диаметра.',
  },
  {
    id: '5',
    title: 'Новые сертификаты соответствия на линейку Rain Flow',
    slug: 'sertifikaty-rain-flow-2024',
    dateISO: '2024-09-05',
    category: 'documents',
    excerpt: 'Получены обновлённые декларации соответствия на водосточную систему Rain Flow.',
  },
  {
    id: '6',
    title: 'Семинар для проектировщиков в Екатеринбурге',
    slug: 'seminar-ekaterinburg-2024',
    dateISO: '2024-08-12',
    category: 'events',
    excerpt: 'Провели обучающий семинар по проектированию систем внутренней канализации для специалистов региона.',
  },
];

export const getNewsItem = (slug: string): NewsItem | undefined => {
  return newsItems.find(item => item.slug === slug);
};

export const getRelatedNews = (currentId: string, limit: number = 3): NewsItem[] => {
  return newsItems.filter(item => item.id !== currentId).slice(0, limit);
};
