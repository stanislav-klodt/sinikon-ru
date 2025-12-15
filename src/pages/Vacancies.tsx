import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Clock, Banknote, MapPin, ArrowRight } from "lucide-react";

const vacancies = [
  {
    id: "packer-extrusion",
    title: "Упаковщик в цех экструзии",
    duties: "Упаковка готовой продукции",
    requirements: "Внимательность, ответственность",
    schedule: "Сменная 2/2 (по 12 часов с ночными сменами)",
    salary: "80 000 – 90 000 ₽ + оплата сверхурочных",
  },
  {
    id: "packer-molding",
    title: "Упаковщица в цех литья",
    duties: "Упаковка готовой продукции",
    requirements: "Внимательность, ответственность",
    schedule: "Сменная 2/2 (по 12 часов с ночными сменами)",
    salary: "70 000 – 85 000 ₽",
  },
  {
    id: "electrician",
    title: "Электрик",
    duties: "Проведение оперативного обслуживания, эксплуатации и ремонта обслуживаемых устройств и электрооборудования",
    requirements: "Опыт работы в аналогичной должности не менее 1 года",
    schedule: "5/2",
    salary: "90 000 ₽",
  },
  {
    id: "mechanic",
    title: "Механик (наладчик производственного оборудования)",
    duties: "Наладка, ремонт и техническое обслуживание производственного оборудования",
    requirements: "Навыки, опыт ремонта и наладки промышленного оборудования от 1 года (есть возможность обучения при профильном образовании)",
    schedule: "5/2",
    salary: "105 000 ₽",
  },
  {
    id: "warehouse",
    title: "Кладовщик",
    duties: "Сборка заказов по накладным; Погрузочно-разгрузочные работы с помощью электропогрузчика; Учет и участие в проведении инвентаризаций",
    requirements: "Опыт работы кладовщиком. Наличие удостоверения на право управления погрузчиком. Опыт работы на электропогрузчике",
    schedule: "5/2",
    salary: "от 100 000 ₽",
  },
  {
    id: "picker",
    title: "Сборщик заказов (комплектовщик)",
    duties: "Сборка заказов по накладным",
    requirements: "Внимательность, ответственность",
    schedule: "5/2",
    salary: "от 80 000 ₽",
  },
];

export default function Vacancies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-muted/30">
          <div className="container-main">
            <h1 className="heading-xl mb-4">Вакансии</h1>
            <p className="text-body max-w-2xl">
              Присоединяйтесь к команде SINIKON. Мы предлагаем стабильную работу, 
              конкурентную заработную плату и возможности для профессионального роста.
            </p>
            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>г. Москва, г. Троицк, ул. Промышленная, 11</span>
            </div>
          </div>
        </section>

        {/* Vacancies list */}
        <section className="py-12 md:py-16">
          <div className="container-main">
            <div className="grid gap-4 md:gap-6">
              {vacancies.map((vacancy) => (
                <div
                  key={vacancy.id}
                  className="bg-background border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold mb-4">
                        {vacancy.title}
                      </h2>
                      
                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Обязанности:
                          </span>
                          <p className="text-foreground">{vacancy.duties}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-muted-foreground">
                            Требования:
                          </span>
                          <p className="text-foreground">{vacancy.requirements}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{vacancy.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <Banknote className="w-4 h-4" />
                          <span>{vacancy.salary}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-6 lg:flex-shrink-0">
                      <Button asChild>
                        <Link to="/contacts/">
                          Откликнуться
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-main">
            <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Не нашли подходящую вакансию?
              </h2>
              <p className="text-background/70 mb-6 max-w-xl mx-auto">
                Отправьте нам своё резюме — мы рассмотрим вашу кандидатуру 
                при появлении подходящей позиции.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/contacts/">
                  Связаться с нами
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}