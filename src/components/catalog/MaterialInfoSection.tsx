import markingImage from "@/assets/catalog/sinikon-standart-marking.png";

interface MaterialCharacteristic {
  name: string;
  unit: string;
  value: string;
  standard: string;
}

interface MaterialInfoSectionProps {
  material: {
    title: string;
    description: string;
    characteristics: MaterialCharacteristic[];
    color: string;
  };
  sealing: {
    title: string;
    description: string;
  };
  connection: {
    title: string;
    description: string;
  };
  marking?: {
    pipeDescription: string[];
    fittingDescription: string[];
  };
}

export function MaterialInfoSection({
  material,
  sealing,
  connection,
  marking,
}: MaterialInfoSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Материалы и соединение
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Material & Table */}
          <div className="space-y-6">
            {/* Material */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {material.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {material.description}
              </p>

              {/* Material Characteristics Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">
                        Наименование
                      </th>
                      <th className="text-left py-2 text-muted-foreground font-medium">
                        Ед. измер.
                      </th>
                      <th className="text-left py-2 text-muted-foreground font-medium">
                        Величина
                      </th>
                      <th className="text-left py-2 text-muted-foreground font-medium">
                        Методика
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {material.characteristics.map((char, index) => (
                      <tr key={index} className="border-b border-border/50 last:border-0">
                        <td className="py-2 text-foreground">{char.name}</td>
                        <td className="py-2 text-muted-foreground">{char.unit}</td>
                        <td className="py-2 text-foreground font-medium">{char.value}</td>
                        <td className="py-2 text-muted-foreground text-xs">{char.standard}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                <span className="font-medium text-foreground">Цвет:</span> {material.color}
              </p>
            </div>

            {/* Sealing & Connection */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-xl p-5">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {sealing.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sealing.description}
                </p>
              </div>

              <div className="bg-background border border-border rounded-xl p-5">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {connection.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {connection.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Marking */}
          {marking && (
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Маркировка
              </h3>
              
              <div className="mb-6">
                <img
                  src={markingImage}
                  alt="Маркировка труб и фитингов SINIKON"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Маркировка труб
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {marking.pipeDescription.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Маркировка фитингов
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {marking.fittingDescription.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
