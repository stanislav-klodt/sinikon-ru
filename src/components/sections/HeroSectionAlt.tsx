import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Shield, Award, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Наша продукция застрахована",
    subtitle: "РОСГОССТРАХ",
  },
  {
    icon: Award,
    title: "Гарантия производителя",
    subtitle: "20 лет",
  },
  {
    icon: CheckCircle,
    title: "Сертификация",
    subtitle: "ISO 9001",
  },
];

export function HeroSectionAlt() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      <div className="container-main relative z-20 py-24 md:py-32">
        <div>
          <h1 className="heading-xl text-background mb-6 animate-fade-up">
            SINIKON — производитель труб
            <br className="hidden md:block" /> и&nbsp;фитингов для систем канализации
          </h1>
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-xl animate-fade-up delay-100">
            Внутренняя и наружная канализация, водостоки
            <br className="hidden md:block" /> и инженерные системы.
          </p>
          
          <Link
            to="/catalog/"
            className="btn-primary inline-flex animate-fade-up delay-200"
          >
            Каталог продукции
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-4 mt-12 md:mt-16 animate-fade-up delay-300">
            <button className="w-12 h-12 rounded-full border border-background/40 flex items-center justify-center text-background/60 hover:border-background hover:text-background transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-background/40 flex items-center justify-center text-background/60 hover:border-background hover:text-background transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Benefits */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-10 animate-fade-up delay-400">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg px-4 py-3"
              >
                <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-background" />
                </div>
                <div>
                  <p className="text-xs text-background/70">{benefit.title}</p>
                  <p className="text-sm font-semibold text-background">{benefit.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
