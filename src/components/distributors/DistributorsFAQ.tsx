import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Можно ли купить напрямую у завода?',
    answer: 'Нет, поставки продукции SINIKON осуществляются исключительно через официальную сеть дистрибьюторов. Выберите ближайшего партнёра в вашем регионе.'
  },
  {
    question: 'Как найти документы и сертификаты?',
    answer: 'Все сертификаты, технические паспорта и инструкции доступны в разделе «Документы». Также документы можно найти на страницах конкретных продуктовых линеек.',
    link: { href: '/documents/', text: 'Перейти в раздел Документы' }
  },
  {
    question: 'Что сообщить дистрибьютору при запросе?',
    answer: 'Для быстрой обработки запроса укажите: линейку продукции (например, SINIKON Standart), диаметр, артикул и необходимое количество.'
  },
  {
    question: 'Если в моём городе нет дистрибьютора?',
    answer: 'Выберите ближайший город с дистрибьютором или напишите нам — мы подскажем оптимальный вариант поставки в ваш регион.',
    link: { href: '/contacts/', text: 'Написать нам' }
  },
  {
    question: 'Где получить BIM (Revit) и материалы для проекта?',
    answer: 'Для проектировщиков у нас есть специальный раздел с BIM-библиотекой, чертежами, узлами и технической документацией.',
    link: { href: '/projectors/', text: 'Раздел для проектировщиков' }
  }
];

export function DistributorsFAQ() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container-main">
        <h2 className="text-2xl font-bold mb-8">Частые вопросы</h2>
        
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-5"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link.href}
                      className="block mt-2 text-primary hover:underline"
                    >
                      {item.link.text} →
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
