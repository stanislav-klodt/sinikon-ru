import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Как получить BIM (Revit)?",
    answer:
      "Оставьте запрос через форму на этой странице. Мы пришлём ссылку на скачивание BIM-библиотеки на указанный email. При необходимости поможем с применением семейств в проекте.",
  },
  {
    question: "Где найти сертификаты на конкретную линейку?",
    answer:
      "В блоке «Документы по линейкам» выше — выберите нужную систему и откройте раздел «Сертификаты и декларации». Также документы доступны на страницах линеек в каталоге.",
  },
  {
    question: "Можно ли получить паспорта качества?",
    answer:
      "Да, укажите линейку и артикул в форме запроса или напишите на office@sinikon.ru. Мы подготовим необходимые документы.",
  },
  {
    question: "Вы продаёте через сайт?",
    answer:
      "Нет, SINIKON не осуществляет прямых продаж. Вся продукция поставляется через официальных дистрибьюторов. Перейдите в раздел «Где купить» для поиска ближайшего партнёра.",
  },
  {
    question: "Куда писать по техническим вопросам?",
    answer:
      "Напишите на office@sinikon.ru или заполните форму техподдержки на этой странице. Мы поможем с подбором решений, документами и консультацией по применению продукции.",
  },
];

export function ProjectorsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Частые вопросы
        </h2>

        <div className="max-w-3xl">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-border last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-foreground pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}