import { Building2, MapPin, Globe, Handshake } from "lucide-react";

const keyFacts = [
  { icon: Building2, label: "Год основания", value: "1996" },
  { icon: MapPin, label: "Производство", value: "Троицк (Новая Москва)" },
  { icon: Globe, label: "География поставок", value: "РФ, Беларусь, Казахстан" },
  { icon: Handshake, label: "Партнёрство", value: "VALSIR / FONDITAL" },
];

export function AboutCompany() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <h2 className="heading-lg mb-8 md:mb-12">О компании</h2>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Text content */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-body">
              SINIKON поставляет комплексные решения для систем канализации 
              и&nbsp;водоотведения — как собственного производства, так и&nbsp;совместно 
              с&nbsp;европейскими партнёрами. Продукция охватывает внутренние 
              и&nbsp;наружные сети, водостоки, а&nbsp;также системы отопления 
              и&nbsp;водоснабжения.
            </p>
            <p className="text-body">
              Производство расположено в&nbsp;Троицке (Новая Москва). Отгрузки 
              выполняются с&nbsp;центрального склада в&nbsp;Троицке, регионального 
              склада в&nbsp;Новосибирске и&nbsp;со&nbsp;складов дистрибьюторов 
              в&nbsp;России, Беларуси и&nbsp;Казахстане.
            </p>
            <p className="text-body">
              Соучредитель компании — итальянская VALSIR, входящая 
              в&nbsp;международный холдинг FONDITAL. Это партнёрство обеспечивает 
              доступ к&nbsp;передовым европейским технологиям и&nbsp;стандартам 
              качества производства.
            </p>
          </div>

          {/* Right: Key facts */}
          <div className="lg:col-span-2">
            <div className="bg-muted/50 border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-5">Ключевые факты</h3>
              <div className="space-y-4">
                {keyFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{fact.label}</p>
                      <p className="font-medium">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
