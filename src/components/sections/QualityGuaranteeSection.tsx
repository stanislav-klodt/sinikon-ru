import { Shield, Award, CheckCircle, Clock } from "lucide-react";

const guaranteeItems = [
  {
    icon: Shield,
    title: "Наша продукция застрахована",
    subtitle: "РОСГОССТРАХ",
    highlight: true,
  },
  {
    icon: Award,
    title: "«СИНИКОН»",
    subtitle: "член Подольской Торгово-Промышленной Палаты",
  },
  {
    icon: CheckCircle,
    title: "ГОСТ Р ИСО",
    subtitle: "9001-2015",
  },
  {
    icon: Clock,
    title: "Гарантия производителя",
    subtitle: "20 лет",
    highlight: true,
  },
];

export function QualityGuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8 uppercase tracking-wide">
          SINIKON — гарантия качества и надёжности
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {guaranteeItems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-5 md:p-6 flex flex-col items-center text-center border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4 ${
                item.highlight 
                  ? "bg-primary/10 text-primary" 
                  : "bg-muted text-muted-foreground"
              }`}>
                <item.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {item.title}
              </p>
              <p className={`font-bold text-base md:text-lg ${
                item.highlight ? "text-primary" : "text-foreground"
              }`}>
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
