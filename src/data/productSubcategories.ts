// Subcategory data for product lines

export interface SubcategoryItem {
  id: string;
  diameter: string;
  article: string;
  length?: string;
  angle?: string;
  packaging: number;
}

export interface Subcategory {
  name: string;
  slug: string;
  image: string;
  drawing: string;
  description?: string;
  columns: { key: keyof SubcategoryItem | string; label: string }[];
  items: SubcategoryItem[];
}

export interface ProductLineSubcategories {
  lineSlug: string;
  lineName: string;
  subcategories: Subcategory[];
}

export const productSubcategoriesData: Record<string, ProductLineSubcategories> = {
  "sinikon-standart": {
    lineSlug: "sinikon-standart",
    lineName: "SINIKON Standart",
    subcategories: [
      {
        name: "Трубы канализационные",
        slug: "truby-kanalizatsionnye",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Канализационные трубы из полипропилена PP-H для систем внутренней канализации",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "length", label: "L (мм)" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "32", article: "500003", length: "250", packaging: 50 },
          { id: "2", diameter: "32", article: "500005", length: "500", packaging: 60 },
          { id: "3", diameter: "32", article: "500009", length: "1000", packaging: 60 },
          { id: "4", diameter: "32", article: "500013", length: "2000", packaging: 60 },
          { id: "5", diameter: "40", article: "500023", length: "250", packaging: 30 },
          { id: "6", diameter: "40", article: "500025", length: "500", packaging: 40 },
          { id: "7", diameter: "40", article: "500029", length: "1000", packaging: 50 },
          { id: "8", diameter: "40", article: "500033", length: "2000", packaging: 50 },
          { id: "9", diameter: "50", article: "500041", length: "150", packaging: 75 },
          { id: "10", diameter: "50", article: "500043", length: "250", packaging: 50 },
          { id: "11", diameter: "50", article: "500045", length: "500", packaging: 30 },
          { id: "12", diameter: "50", article: "500047", length: "750", packaging: 50 },
          { id: "13", diameter: "50", article: "500049", length: "1000", packaging: 50 },
          { id: "14", diameter: "50", article: "500051", length: "1500", packaging: 50 },
          { id: "15", diameter: "50", article: "500053", length: "2000", packaging: 50 },
          { id: "16", diameter: "50", article: "500055", length: "3000", packaging: 50 },
          { id: "17", diameter: "75", article: "500061", length: "150", packaging: 36 },
          { id: "18", diameter: "75", article: "500063", length: "250", packaging: 21 },
          { id: "19", diameter: "75", article: "500065", length: "500", packaging: 12 },
          { id: "20", diameter: "75", article: "500069", length: "1000", packaging: 40 },
          { id: "21", diameter: "75", article: "500071", length: "1500", packaging: 40 },
          { id: "22", diameter: "75", article: "500073", length: "2000", packaging: 40 },
          { id: "23", diameter: "75", article: "500075", length: "3000", packaging: 40 },
          { id: "24", diameter: "110", article: "500081", length: "150", packaging: 90 },
          { id: "25", diameter: "110", article: "500083", length: "250", packaging: 30 },
          { id: "26", diameter: "110", article: "500085", length: "500", packaging: 30 },
          { id: "27", diameter: "110", article: "500087", length: "750", packaging: 30 },
          { id: "28", diameter: "110", article: "500089", length: "1000", packaging: 30 },
          { id: "29", diameter: "110", article: "500091", length: "1500", packaging: 30 },
          { id: "30", diameter: "110", article: "500093", length: "2000", packaging: 20 },
          { id: "31", diameter: "110", article: "500095", length: "3000", packaging: 10 },
        ],
      },
      {
        name: "Отвод 15°",
        slug: "otvod-15",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Отводы 15° для изменения направления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50", article: "115.050.15", packaging: 100 },
          { id: "2", diameter: "110", article: "115.110.15", packaging: 50 },
        ],
      },
      {
        name: "Отвод 30°",
        slug: "otvod-30",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Отводы 30° для изменения направления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50", article: "115.050.30", packaging: 100 },
          { id: "2", diameter: "110", article: "115.110.30", packaging: 50 },
        ],
      },
      {
        name: "Отвод 45°",
        slug: "otvod-45",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Отводы 45° для изменения направления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "32", article: "115.032.45", packaging: 150 },
          { id: "2", diameter: "40", article: "115.040.45", packaging: 120 },
          { id: "3", diameter: "50", article: "115.050.45", packaging: 100 },
          { id: "4", diameter: "75", article: "115.075.45", packaging: 60 },
          { id: "5", diameter: "110", article: "115.110.45", packaging: 40 },
        ],
      },
      {
        name: "Отвод 67°30'",
        slug: "otvod-67-30",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Отводы 67°30' для изменения направления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50", article: "115.050.67", packaging: 80 },
          { id: "2", diameter: "110", article: "115.110.67", packaging: 35 },
        ],
      },
      {
        name: "Отвод 87°30'",
        slug: "otvod-87-30",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Отводы 87°30' для изменения направления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "32", article: "115.032.87", packaging: 150 },
          { id: "2", diameter: "40", article: "115.040.87", packaging: 120 },
          { id: "3", diameter: "50", article: "115.050.87", packaging: 100 },
          { id: "4", diameter: "75", article: "115.075.87", packaging: 50 },
          { id: "5", diameter: "110", article: "115.110.87", packaging: 30 },
        ],
      },
      {
        name: "Тройник 45°",
        slug: "troynik-45",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Тройники 45° для разветвления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50/50", article: "130.050.45", packaging: 50 },
          { id: "2", diameter: "110/50", article: "130.110.50.45", packaging: 30 },
          { id: "3", diameter: "110/110", article: "130.110.45", packaging: 20 },
        ],
      },
      {
        name: "Тройник 67°30'",
        slug: "troynik-67-30",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Тройники 67°30' для разветвления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50/50", article: "130.050.67", packaging: 45 },
          { id: "2", diameter: "110/50", article: "130.110.50.67", packaging: 25 },
          { id: "3", diameter: "110/110", article: "130.110.67", packaging: 18 },
        ],
      },
      {
        name: "Тройник 87°30'",
        slug: "troynik-87-30",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Тройники 87°30' для разветвления трубопровода",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50/50", article: "130.050.87", packaging: 40 },
          { id: "2", diameter: "110/50", article: "130.110.50.87", packaging: 22 },
          { id: "3", diameter: "110/110", article: "130.110.87", packaging: 15 },
        ],
      },
      {
        name: "Крестовина двухплоскостная",
        slug: "krestovina-dvukhploskostnaya",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Крестовины двухплоскостные для сложных разветвлений",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "110/110/50", article: "140.110.50.DP", packaging: 10 },
          { id: "2", diameter: "110/110/110", article: "140.110.DP", packaging: 8 },
        ],
      },
      {
        name: "Крестовина одноплоскостная",
        slug: "krestovina-odnoploskostnaya",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Крестовины одноплоскостные для разветвления в одной плоскости",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "110/50/50", article: "140.110.50.OP", packaging: 12 },
          { id: "2", diameter: "110/110/110", article: "140.110.OP", packaging: 10 },
        ],
      },
      {
        name: "Ревизия",
        slug: "reviziya",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Ревизии для прочистки и обслуживания канализации",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50", article: "160.050.00", packaging: 30 },
          { id: "2", diameter: "110", article: "160.110.00", packaging: 20 },
        ],
      },
      {
        name: "Переход эксцентрический",
        slug: "perekhod-ekstsentricheskiy",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Переходы для соединения труб разных диаметров",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50/32", article: "170.050.32", packaging: 50 },
          { id: "2", diameter: "50/40", article: "170.050.40", packaging: 50 },
          { id: "3", diameter: "110/50", article: "170.110.50", packaging: 30 },
          { id: "4", diameter: "110/75", article: "170.110.75", packaging: 30 },
        ],
      },
      {
        name: "Муфта",
        slug: "mufta",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Муфты для соединения труб",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50", article: "180.050.00", packaging: 60 },
          { id: "2", diameter: "110", article: "180.110.00", packaging: 30 },
        ],
      },
      {
        name: "Заглушка",
        slug: "zaglushka",
        image: "/placeholder.svg",
        drawing: "/placeholder.svg",
        description: "Заглушки для закрытия концов труб",
        columns: [
          { key: "diameter", label: "Ø" },
          { key: "article", label: "Артикул" },
          { key: "packaging", label: "Кол/уп" },
        ],
        items: [
          { id: "1", diameter: "50", article: "190.050.00", packaging: 100 },
          { id: "2", diameter: "110", article: "190.110.00", packaging: 50 },
        ],
      },
    ],
  },
};
