import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Вы продаёте напрямую?",
    answer: (
      <>
        Нет, поставки осуществляются через сеть дистрибьюторов.{" "}
        <Link to="/distributors/" className="text-primary hover:underline">
          Найти дистрибьютора
        </Link>
      </>
    ),
  },
  {
    question: "Где найти сертификаты?",
    answer: (
      <>
        В разделе{" "}
        <Link to="/documents/" className="text-primary hover:underline">
          Документы
        </Link>
        . Там собраны сертификаты, декларации и гарантийные условия по всем линейкам.
      </>
    ),
  },
  {
    question: "Как получить BIM (Revit)?",
    answer: (
      <>
        Оставьте запрос на странице{" "}
        <Link to="/projectors/" className="text-primary hover:underline">
          Проектировщикам
        </Link>
        . Мы отправим ссылку на BIM-библиотеку.
      </>
    ),
  },
  {
    question: "Что указать в запросе по продукции?",
    answer:
      "Линейка (например, Standart, Comfort Plus), диаметр, артикул и необходимое количество. Это поможет быстрее подобрать документацию или ответить на технический вопрос.",
  },
];

export function ContactsFAQ() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-xl px-4 bg-background"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
