import { CheckCircle2 } from "lucide-react";

const timelineItems = [
  {
    year: "2015",
    title: "Внедрение СМК",
    description: "Внедрена система менеджмента качества ISO 9001",
  },
  {
    year: "2018",
    title: "ISO 9001:2015",
    description: "Переход на актуальную версию стандарта",
  },
  {
    year: "2019",
    title: "Bureau Veritas",
    description: "Ресертификация международным органом Bureau Veritas",
  },
  {
    year: "ГОСТ",
    title: "ГОСТ 32414-2013",
    description: "Сертификация труб и фитингов по российскому стандарту",
  },
  {
    year: "EU",
    title: "DIN EN 1451-1",
    description: "Европейская сертификация SKZ (Германия)",
  },
];

const badges = [
  { name: "ISO 9001", color: "bg-blue-500" },
  { name: "ГОСТ", color: "bg-red-500" },
  { name: "SKZ", color: "bg-green-600" },
  { name: "Bureau Veritas", color: "bg-orange-500" },
];

export function CertificationTimeline() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-main">
        <h2 className="heading-lg mb-8 md:mb-12">Стандарты и сертификация</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-[47px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6 md:space-y-0">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6 pb-6 md:pb-8"
              >
                {/* Year badge */}
                <div className="flex items-center gap-4 md:w-24 flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center z-10">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-primary md:hidden">
                    {item.year}
                  </span>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-background border border-border rounded-xl p-5 ml-14 md:ml-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="hidden md:inline text-sm font-bold text-primary mr-3">
                        {item.year}
                      </span>
                      <h3 className="inline text-lg font-semibold">{item.title}</h3>
                      <p className="text-body-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`${badge.color} text-white px-4 py-2 rounded-lg text-sm font-medium`}
            >
              {badge.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
