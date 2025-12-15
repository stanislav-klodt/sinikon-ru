import { MapPin, Phone, Package } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Выберите город/регион',
    description: 'Найдите ближайшего дистрибьютора'
  },
  {
    icon: Phone,
    title: 'Свяжитесь с дистрибьютором',
    description: 'Уточните наличие и условия'
  },
  {
    icon: Package,
    title: 'Оформите заказ',
    description: 'Получите продукцию напрямую'
  }
];

export function HowToBuy() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main">
        <h2 className="text-2xl font-bold mb-8">Как купить продукцию SINIKON</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Шаг {index + 1}</div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Сайт не является интернет-магазином. Цены и наличие уточняйте у дистрибьюторов.
        </p>
      </div>
    </section>
  );
}
