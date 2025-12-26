import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Shield, CheckCircle, AlertTriangle, FileText, Phone, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import warrantySewageImg from "@/assets/warranty/warranty-sewage.jpg";

const warrantyDocuments = [
  {
    id: 1,
    title: "Гарантия на системы канализации",
    description: "Гарантийное письмо на системы канализации SINIKON с 20-летним сроком гарантии",
    image: warrantySewageImg,
    downloadUrl: warrantySewageImg,
  },
  {
    id: 2,
    title: "Гарантия на трубы PE-X, PE-RT",
    description: "Гарантийное письмо на трубы и фитинги PE-X, PE-RT с 10-летним сроком гарантии",
    image: warrantySewageImg, // placeholder, replace when second document is available
    downloadUrl: warrantySewageImg,
  },
];

const insuranceDocuments = [
  {
    id: 1,
    title: "Страховой полис РОСГОССТРАХ №1",
    image: warrantySewageImg, // placeholder
    downloadUrl: warrantySewageImg,
  },
  {
    id: 2,
    title: "Страховой полис РОСГОССТРАХ №2",
    image: warrantySewageImg, // placeholder
    downloadUrl: warrantySewageImg,
  },
];

const warrantyConditions = [
  "Продукция должна быть установлена в соответствии с национальными техническими нормами, правилами и рекомендациями производителя",
  "Условия эксплуатации (давление, температура, характеристики транспортируемой жидкости) должны соответствовать значениям, указанным в технической документации",
  "При отсутствии официальных нормативов необходимо следовать рекомендациям по установке из технической документации ООО «СИНИКОН»",
];

const warrantyExclusions = [
  "Дефекты, возникшие вследствие нарушения правил транспортировки, хранения или монтажа",
  "Использование изделий, имеющих видимые дефекты на момент установки или испытания системы",
  "Совместимость с изделиями других производителей, не обладающими требуемыми техническими характеристиками",
  "Герметичность системы в местах соединения с изделиями других производителей",
];

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container-main">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">Гарантия производителя</h1>
              <p className="text-lg text-muted-foreground">
                ООО «СИНИКОН» предоставляет расширенную гарантию на всю продукцию собственного производства. 
                Наша продукция застрахована в компании РОСГОССТРАХ.
              </p>
            </div>
          </div>
        </section>

        {/* Main warranty cards */}
        <section className="py-16 md:py-20">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Sewage systems */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Системы канализации
                </h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-primary">20</span>
                    <span className="text-lg text-muted-foreground">лет гарантии</span>
                  </div>
                  <p className="text-muted-foreground">
                    Гарантийный срок отсчитывается от даты производства, указанной на изделии. 
                    Если дату производства установить невозможно — <strong>15 лет</strong> с момента приобретения 
                    (должно быть подтверждено документально).
                  </p>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground mb-2">Страховое покрытие</p>
                    <p className="text-lg font-semibold text-foreground">
                      до 7 500 000 ₽
                    </p>
                    <p className="text-sm text-muted-foreground">РОСГОССТРАХ</p>
                  </div>
                </div>
              </div>

              {/* PE-X, PE-RT */}
              <div className="bg-muted/50 border border-border rounded-2xl p-6 md:p-8">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-foreground" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Трубы и фитинги PE-X, PE-RT
                </h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">10</span>
                    <span className="text-lg text-muted-foreground">лет гарантии</span>
                  </div>
                  <p className="text-muted-foreground">
                    Гарантийный срок отсчитывается от даты производства, указанной на изделии. 
                    Если дату производства установить невозможно — <strong>7 лет</strong> с момента приобретения 
                    (должно быть подтверждено документально).
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Страховое покрытие</p>
                    <p className="text-lg font-semibold text-foreground">
                      до 20 000 000 ₽
                    </p>
                    <p className="text-sm text-muted-foreground">РОСГОССТРАХ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Documents Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-main">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Гарантийные документы</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {warrantyDocuments.map((doc) => (
                <div key={doc.id} className="bg-background border border-border rounded-2xl overflow-hidden group">
                  <a 
                    href={doc.downloadUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img 
                        src={doc.image} 
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </a>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <a 
                      href={doc.downloadUrl} 
                      download
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Скачать документ
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance documents */}
            <h3 className="text-xl md:text-2xl font-bold mt-12 mb-6">Страховые полисы РОСГОССТРАХ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {insuranceDocuments.map((doc) => (
                <a 
                  key={doc.id}
                  href={doc.downloadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-background border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img 
                      src={doc.image} 
                      alt={doc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs text-muted-foreground">{doc.title}</p>
                    <ExternalLink className="w-3 h-3 mx-auto mt-1 text-primary" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-16 md:py-20">
          <div className="container-main">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Warranty conditions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">Условия гарантии</h2>
                </div>
                <ul className="space-y-4">
                  {warrantyConditions.map((condition, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">Гарантия не распространяется</h2>
                </div>
                <ul className="space-y-4">
                  {warrantyExclusions.map((exclusion, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        ✕
                      </span>
                      <span className="text-muted-foreground">{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation info */}
        <section className="py-16 md:py-20">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Возмещение ущерба</h2>
              <p className="text-muted-foreground mb-6">
                В течение гарантийного периода будет возмещён любой материальный ущерб, 
                нанесённый имуществу, возникший из-за заводского дефекта труб и/или фитингов. 
                Наличие дефекта должно быть подтверждено результатом технической экспертизы.
              </p>
              <p className="text-sm text-muted-foreground">
                Возмещение ущерба осуществляется по договору страхования гражданской ответственности 
                между ООО «СИНИКОН» и ОАО «РОСГОССТРАХ».
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Есть вопросы по гарантии?
              </h2>
              <p className="text-background/70 mb-8">
                Свяжитесь с нашим отделом технической поддержки для получения консультации
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacts/"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Связаться с нами
                </Link>
                <Link
                  to="/documents/"
                  className="inline-flex items-center justify-center gap-2 bg-background/10 hover:bg-background/20 text-background px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Все документы
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Warranty;
