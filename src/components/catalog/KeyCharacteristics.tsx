import { Button } from "@/components/ui/button";

interface Characteristic {
  label: string;
  value: string;
}

interface KeyCharacteristicsProps {
  description: string;
  characteristics: Characteristic[];
}

export function KeyCharacteristics({ description, characteristics }: KeyCharacteristicsProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Ключевые характеристики
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {characteristics.map((char, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-border last:border-0"
              >
                <span className="text-muted-foreground">{char.label}</span>
                <span className="font-medium text-foreground">{char.value}</span>
              </div>
            ))}
            
            <Button variant="outline" asChild className="mt-4">
              <a href="#buy">Где купить</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
