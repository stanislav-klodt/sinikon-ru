import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductLineHero } from "@/components/catalog/ProductLineHero";
import { KeyCharacteristics } from "@/components/catalog/KeyCharacteristics";
import { MaterialInfoSection } from "@/components/catalog/MaterialInfoSection";
import { SubcategoryGrid } from "@/components/catalog/SubcategoryGrid";
import { LineDocuments } from "@/components/catalog/LineDocuments";
import { RelatedProducts } from "@/components/catalog/RelatedProducts";
import { productSubcategoriesData } from "@/data/productSubcategories";

// Product line data
const productLinesData: Record<string, {
  name: string;
  purpose: string;
  description: string;
  facts: { label: string; value: string }[];
  characteristics: { label: string; value: string }[];
  charDescription: string;
  materialInfo?: {
    material: {
      title: string;
      description: string;
      characteristics: { name: string; unit: string; value: string; standard: string }[];
      color: string;
    };
    sealing: { title: string; description: string };
    connection: { title: string; description: string };
    marking?: { pipeDescription: string[]; fittingDescription: string[] };
  };
  nomenclature: any[];
  certificates: any[];
  passports: any[];
  instructions: any[];
  related: { name: string; purpose: string; link: string }[];
}> = {
  "sinikon-standart": {
    name: "SINIKON Standart",
    purpose: "Внутренняя канализация",
    description: "Система внутренней канализации. Подбор номенклатуры по типу, диаметру и артикулу.",
    facts: [
      { label: "Материал", value: "PP-H (гомополимер пропилена)" },
      { label: "Назначение", value: "Внутренняя канализация" },
      { label: "Стандарт", value: "ГОСТ 32414-2013 / EN 1451-1" },
    ],
    charDescription: "SINIKON Standart — система внутренней канализации из полипропилена для жилых, общественных и промышленных зданий. Трубы изготавливаются методом экструзии, а фитинги — методом литья под давлением из гомополимера пропилена (тип 1) PP-H. Раструбное соединение обеспечивает надёжность и простоту монтажа без специальных инструментов.",
    characteristics: [
      { label: "Диаметры", value: "DN 50, 110, 160" },
      { label: "Температурный режим", value: "до +95°C кратковременно" },
      { label: "Материал", value: "PP-H (гомополимер пропилена, тип 1)" },
      { label: "Соединение", value: "Раструбное с уплотнительным кольцом" },
      { label: "Цвет", value: "Серый металлик" },
      { label: "Стандарт", value: "ГОСТ 32414-2013 / EN 1451-1" },
    ],
    materialInfo: {
      material: {
        title: "Материал",
        description: "Полипропиленовые канализационные трубы СИНИКОН изготавливаются методом экструзии, а фитинги СИНИКОН — методом литья под давлением из гомополимера пропилена (тип 1) PP-H.",
        characteristics: [
          { name: "Плотность", unit: "г/см³", value: "0,9-0,95", standard: "ГОСТ 15139-69" },
          { name: "Коэффициент линейного расширения", unit: "мм/м °C", value: "0,15", standard: "ГОСТ 15173-70" },
          { name: "Температура плавления", unit: "°C", value: ">160", standard: "ГОСТ 21553-76" },
          { name: "Теплопроводность", unit: "Вт/м °C", value: "0,26", standard: "ГОСТ 23630-79" },
        ],
        color: "Серый металлик",
      },
      sealing: {
        title: "Уплотнение",
        description: "Двухлепестковое уплотнение из мягкой стирол бутадиеновой резины (SBR 40±5 IRDH) с пластмассовым (полипропилен PP-H) распорным кольцом. Разработано для пластмассовых труб и фитингов из PP и PVC по нормам EN 1451-1 и EN 14-1-1, соответствует требованиям EN 681-1 WC/WCL и DIN 4060.",
      },
      connection: {
        title: "Способ соединения",
        description: "Раструбное соединение. Монтаж без применения специальных инструментов и приспособлений.",
      },
      marking: {
        pipeDescription: [
          "Название серии и наименование изготовителя",
          "Номинальный наружный диаметр и минимальная толщина стенки трубы в мм",
          "Материал трубы (полипропилен гомополимер тип 1)",
          "Номер ГОСТ 32414-2013 и европейского норматива EN 1451-1",
          "Класс трубы согласно EN 1451",
        ],
        fittingDescription: [
          "Наименование изготовителя и типоразмер фитинга",
          "Материал фитинга (PP-H)",
          "Номер ГОСТ 32414-2013 и европейского норматива EN 1451",
          "Класс фитинга согласно EN 1451",
        ],
      },
    },
    nomenclature: [
      { id: "1", name: "Труба канализационная", type: "pipe", dn: "110", length: "500", article: "500.110.50", packaging: 20 },
      { id: "2", name: "Труба канализационная", type: "pipe", dn: "110", length: "1000", article: "500.110.10", packaging: 10 },
      { id: "3", name: "Труба канализационная", type: "pipe", dn: "110", length: "2000", article: "500.110.20", packaging: 5 },
      { id: "4", name: "Труба канализационная", type: "pipe", dn: "50", length: "500", article: "500.050.50", packaging: 40 },
      { id: "5", name: "Отвод 45°", type: "elbow", dn: "110", angle: "45", article: "115.110.45", packaging: 30 },
      { id: "6", name: "Отвод 87°", type: "elbow", dn: "110", angle: "87", article: "115.110.87", packaging: 25 },
      { id: "7", name: "Отвод 45°", type: "elbow", dn: "50", angle: "45", article: "115.050.45", packaging: 50 },
      { id: "8", name: "Тройник 45°", type: "tee", dn: "110", angle: "45", article: "130.110.45", packaging: 15 },
      { id: "9", name: "Тройник 87°", type: "tee", dn: "110", angle: "87", article: "130.110.87", packaging: 15 },
      { id: "10", name: "Крестовина одноплоскостная", type: "cross", dn: "110", angle: "87", article: "140.110.87", packaging: 10 },
      { id: "11", name: "Ревизия", type: "revision", dn: "110", article: "160.110.00", packaging: 20 },
      { id: "12", name: "Переход эксцентрический 110/50", type: "reducer", dn: "110", article: "170.110.50", packaging: 30 },
    ],
    certificates: [
      { name: "Сертификат соответствия ГОСТ 32414-2013", type: "PDF" },
      { name: "Декларация о соответствии ТР ЕАЭС", type: "PDF" },
      { name: "Пожарный сертификат", type: "PDF" },
    ],
    passports: [
      { name: "Технический паспорт SINIKON Standart", type: "PDF" },
      { name: "Паспорт качества", type: "PDF" },
    ],
    instructions: [
      { name: "Инструкция по монтажу", type: "PDF" },
      { name: "Каталог продукции Standart", type: "PDF" },
    ],
    related: [
      { name: "SINIKON Comfort Plus", purpose: "Малошумная канализация", link: "/catalog/sinikon-comfort-plus/" },
      { name: "SINIKON Universal", purpose: "Наружная канализация", link: "/catalog/sinikon-universal/" },
      { name: "Трапы", purpose: "Трапы и дренаж", link: "/catalog/trapy/" },
    ],
  },
  "sinikon-comfort-plus": {
    name: "SINIKON Comfort Plus",
    purpose: "Малошумная канализация",
    description: "Трёхслойная система малошумной канализации для премиальных объектов.",
    facts: [
      { label: "Материал", value: "PP (трёхслойный)" },
      { label: "Назначение", value: "Малошумная канализация" },
      { label: "Особенность", value: "Снижение шума до 14 дБ" },
    ],
    charDescription: "SINIKON Comfort Plus — система малошумной канализации с трёхслойной структурой стенки. Минеральный наполнитель в среднем слое обеспечивает эффективное звукопоглощение. Идеальное решение для гостиниц, бизнес-центров и премиального жилья.",
    characteristics: [
      { label: "Диаметры", value: "DN 50, 110, 160" },
      { label: "Температурный режим", value: "до +95°C" },
      { label: "Соединение", value: "Раструбное" },
      { label: "Цвет", value: "Белый" },
      { label: "Снижение шума", value: "до 14 дБ" },
    ],
    nomenclature: [
      { id: "1", name: "Труба малошумная", type: "pipe", dn: "110", length: "1000", article: "CP.110.10", packaging: 10 },
      { id: "2", name: "Отвод 45°", type: "elbow", dn: "110", angle: "45", article: "CP.115.45", packaging: 20 },
    ],
    certificates: [{ name: "Сертификат соответствия Comfort Plus", type: "PDF" }],
    passports: [{ name: "Технический паспорт Comfort Plus", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу Comfort Plus", type: "PDF" }],
    related: [
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "Трапы", purpose: "Трапы и дренаж", link: "/catalog/trapy/" },
      { name: "Rain Flow", purpose: "Внутренние водостоки", link: "/catalog/rain-flow/" },
    ],
  },
  "rain-flow": {
    name: "Rain Flow",
    purpose: "Внутренние водостоки",
    description: "Система сифонно-вакуумного водоотведения для плоских кровель.",
    facts: [
      { label: "Материал", value: "НПВХ" },
      { label: "Назначение", value: "Внутренние водостоки" },
      { label: "Применение", value: "Плоские кровли, промышленные объекты" },
    ],
    charDescription: "Rain Flow — система сифонно-вакуумного водоотведения с кровли. Обеспечивает эффективный отвод дождевой воды с плоских кровель промышленных и коммерческих зданий.",
    characteristics: [
      { label: "Диаметры", value: "DN 56, 75, 110" },
      { label: "Тип системы", value: "Сифонно-вакуумная" },
      { label: "Соединение", value: "Клеевое / сварное" },
      { label: "Цвет", value: "Серый" },
    ],
    nomenclature: [
      { id: "1", name: "Воронка водосточная", type: "other", dn: "75", article: "RF.075.00", packaging: 5 },
      { id: "2", name: "Труба водосточная", type: "pipe", dn: "75", length: "3000", article: "RF.075.30", packaging: 10 },
    ],
    certificates: [{ name: "Сертификат Rain Flow", type: "PDF" }],
    passports: [{ name: "Технический паспорт Rain Flow", type: "PDF" }],
    instructions: [{ name: "Руководство по проектированию Rain Flow", type: "PDF" }],
    related: [
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "SINIKON Universal", purpose: "Наружная канализация", link: "/catalog/sinikon-universal/" },
      { name: "Инструменты и монтаж", purpose: "Монтажное оборудование", link: "/catalog/montazh/" },
    ],
  },
  "sinikon-universal": {
    name: "SINIKON Universal",
    purpose: "Наружная канализация",
    description: "Система наружной канализации для подземной прокладки.",
    facts: [
      { label: "Материал", value: "PP" },
      { label: "Назначение", value: "Наружная канализация" },
      { label: "Жёсткость", value: "SN4" },
    ],
    charDescription: "SINIKON Universal — система наружной канализации из полипропилена с кольцевой жёсткостью SN4. Предназначена для подземной прокладки в коттеджном и малоэтажном строительстве.",
    characteristics: [
      { label: "Диаметры", value: "DN 110, 160, 200" },
      { label: "Кольцевая жёсткость", value: "SN4" },
      { label: "Соединение", value: "Раструбное" },
      { label: "Цвет", value: "Оранжевый" },
    ],
    nomenclature: [
      { id: "1", name: "Труба наружная", type: "pipe", dn: "110", length: "1000", article: "UN.110.10", packaging: 10 },
      { id: "2", name: "Отвод 45°", type: "elbow", dn: "110", angle: "45", article: "UN.115.45", packaging: 20 },
    ],
    certificates: [{ name: "Сертификат Universal", type: "PDF" }],
    passports: [{ name: "Технический паспорт Universal", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу Universal", type: "PDF" }],
    related: [
      { name: "SINIKON НПВХ", purpose: "Наружная канализация НПВХ", link: "/catalog/sinikon-npvh/" },
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "Инструменты и монтаж", purpose: "Монтажное оборудование", link: "/catalog/montazh/" },
    ],
  },
  "sinikon-npvh": {
    name: "SINIKON НПВХ",
    purpose: "Наружная канализация НПВХ",
    description: "Система наружной канализации из НПВХ для промышленных объектов.",
    facts: [
      { label: "Материал", value: "НПВХ" },
      { label: "Назначение", value: "Наружная канализация" },
      { label: "Особенность", value: "Высокая химстойкость" },
    ],
    charDescription: "SINIKON НПВХ — система наружной канализации из непластифицированного поливинилхлорида. Обладает высокой химической стойкостью, подходит для промышленных стоков.",
    characteristics: [
      { label: "Диаметры", value: "DN 110, 160, 200, 250" },
      { label: "Кольцевая жёсткость", value: "SN4 / SN8" },
      { label: "Соединение", value: "Раструбное" },
      { label: "Цвет", value: "Оранжевый" },
    ],
    nomenclature: [
      { id: "1", name: "Труба НПВХ", type: "pipe", dn: "110", length: "3000", article: "NP.110.30", packaging: 10 },
    ],
    certificates: [{ name: "Сертификат НПВХ", type: "PDF" }],
    passports: [{ name: "Технический паспорт НПВХ", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу НПВХ", type: "PDF" }],
    related: [
      { name: "SINIKON Universal", purpose: "Наружная канализация", link: "/catalog/sinikon-universal/" },
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "Инструменты и монтаж", purpose: "Монтажное оборудование", link: "/catalog/montazh/" },
    ],
  },
  "trapy": {
    name: "Трапы",
    purpose: "Трапы и дренаж",
    description: "Напольные трапы для санузлов и душевых.",
    facts: [
      { label: "Тип", value: "Напольные трапы" },
      { label: "Назначение", value: "Санузлы, душевые" },
      { label: "Особенность", value: "Гидрозатвор" },
    ],
    charDescription: "Напольные трапы SINIKON обеспечивают эффективный отвод воды из душевых кабин, санузлов и помещений с мокрыми процессами. Встроенный гидрозатвор предотвращает проникновение запахов.",
    characteristics: [
      { label: "Размеры выпуска", value: "DN 50" },
      { label: "Пропускная способность", value: "до 0.8 л/с" },
      { label: "Гидрозатвор", value: "Да" },
      { label: "Материал решётки", value: "Нержавеющая сталь / пластик" },
    ],
    nomenclature: [
      { id: "1", name: "Трап с вертикальным выпуском", type: "other", dn: "50", article: "TR.050.V", packaging: 10 },
      { id: "2", name: "Трап с горизонтальным выпуском", type: "other", dn: "50", article: "TR.050.H", packaging: 10 },
    ],
    certificates: [{ name: "Сертификат на трапы", type: "PDF" }],
    passports: [{ name: "Технический паспорт трапов", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу трапов", type: "PDF" }],
    related: [
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "SINIKON Comfort Plus", purpose: "Малошумная канализация", link: "/catalog/sinikon-comfort-plus/" },
      { name: "Инструменты и монтаж", purpose: "Монтажное оборудование", link: "/catalog/montazh/" },
    ],
  },
  "montazh": {
    name: "Инструменты и монтаж",
    purpose: "Монтажное оборудование",
    description: "Инструменты и расходные материалы для монтажа систем SINIKON.",
    facts: [
      { label: "Категория", value: "Инструменты" },
      { label: "Назначение", value: "Монтаж труб и фитингов" },
      { label: "Ассортимент", value: "Труборезы, калибраторы, смазки" },
    ],
    charDescription: "Профессиональные инструменты для качественного монтажа канализационных систем SINIKON. В ассортименте труборезы, калибраторы, смазки и другие расходные материалы.",
    characteristics: [
      { label: "Труборезы", value: "для DN 50–160" },
      { label: "Калибраторы", value: "DN 50, 110, 160" },
      { label: "Смазка", value: "Силиконовая" },
    ],
    nomenclature: [
      { id: "1", name: "Труборез DN 110", type: "other", dn: "110", article: "MT.TR.110", packaging: 1 },
      { id: "2", name: "Смазка силиконовая 250г", type: "other", dn: "-", article: "MT.SM.250", packaging: 12 },
    ],
    certificates: [],
    passports: [],
    instructions: [{ name: "Руководство по монтажу", type: "PDF" }],
    related: [
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "SINIKON Universal", purpose: "Наружная канализация", link: "/catalog/sinikon-universal/" },
      { name: "Трапы", purpose: "Трапы и дренаж", link: "/catalog/trapy/" },
    ],
  },
  "otoplenie-vodosnabzhenie": {
    name: "Отопление и водоснабжение",
    purpose: "Инженерные системы",
    description: "Трубы и фитинги для систем отопления и водоснабжения.",
    facts: [
      { label: "Категория", value: "Отопление и водоснабжение" },
      { label: "Назначение", value: "Инженерные системы зданий" },
      { label: "Применение", value: "Радиаторное отопление, водопровод" },
    ],
    charDescription: "Комплексные решения для систем отопления и водоснабжения. Трубы и фитинги для радиаторного отопления, тёплых полов и холодного/горячего водоснабжения.",
    characteristics: [
      { label: "Диаметры", value: "DN 16–32" },
      { label: "Рабочее давление", value: "до 10 бар" },
      { label: "Температура", value: "до +95°C" },
    ],
    nomenclature: [
      { id: "1", name: "Труба металлопластиковая", type: "pipe", dn: "16", length: "100000", article: "OT.MP.16", packaging: 1 },
    ],
    certificates: [{ name: "Сертификат на трубы ОВ", type: "PDF" }],
    passports: [{ name: "Технический паспорт ОВ", type: "PDF" }],
    instructions: [{ name: "Инструкция по монтажу ОВ", type: "PDF" }],
    related: [
      { name: "SINIKON Standart", purpose: "Внутренняя канализация", link: "/catalog/sinikon-standart/" },
      { name: "Инструменты и монтаж", purpose: "Монтажное оборудование", link: "/catalog/montazh/" },
      { name: "Трапы", purpose: "Трапы и дренаж", link: "/catalog/trapy/" },
    ],
  },
};

export default function ProductLine() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? productLinesData[slug] : null;
  const subcategories = slug ? productSubcategoriesData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16">
          <div className="container-main text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Линейка не найдена
            </h1>
            <Link to="/catalog/" className="text-primary hover:underline">
              Вернуться в каталог
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductLineHero
          name={data.name}
          slug={slug || "sinikon-standart"}
          purpose={data.purpose}
          description={data.description}
          facts={data.facts}
        />
        <KeyCharacteristics
          description={data.charDescription}
          characteristics={data.characteristics}
        />
        {data.materialInfo && (
          <MaterialInfoSection
            material={data.materialInfo.material}
            sealing={data.materialInfo.sealing}
            connection={data.materialInfo.connection}
            marking={data.materialInfo.marking}
          />
        )}
        {subcategories && (
          <SubcategoryGrid 
            subcategories={subcategories.subcategories} 
            lineSlug={slug || ""} 
          />
        )}
        <LineDocuments
          lineName={data.name}
          certificates={data.certificates}
          passports={data.passports}
          instructions={data.instructions}
        />
        <RelatedProducts products={data.related} />
      </main>
      <Footer />
    </div>
  );
}
