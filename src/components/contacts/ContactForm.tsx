import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const topics = [
  { value: "technical", label: "Технический вопрос" },
  { value: "documents", label: "Документы / сертификаты" },
  { value: "bim", label: "BIM (Revit)" },
  { value: "other", label: "Прочее" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    topic: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Заполните обязательные поля");
      return;
    }

    if (!formData.consent) {
      toast.error("Необходимо согласие на обработку персональных данных");
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("Сообщение отправлено!");
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-8 md:py-12 bg-muted/30">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Спасибо!
            </h2>
            <p className="text-muted-foreground mb-6">
              Мы получили сообщение и ответим в рабочее время.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Отправить ещё
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-8 md:py-12 bg-muted/30">
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Написать нам
            </h2>
            <p className="text-muted-foreground">
              Если не нашли документ или нужен технический ответ — укажите линейку и, по возможности, артикул.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  required
                  className="mt-1.5"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  required
                  className="mt-1.5"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {/* Phone */}
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="mt-1.5"
                />
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city">Город / регион</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Москва"
                  className="mt-1.5"
                />
              </div>
            </div>

            {/* Topic */}
            <div className="mb-4">
              <Label htmlFor="topic">Тема</Label>
              <Select
                value={formData.topic}
                onValueChange={(value) => setFormData({ ...formData, topic: value })}
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Выберите тему" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic.value} value={topic.value}>
                      {topic.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <Label htmlFor="message">Сообщение *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Например: линейка Standart, DN110, нужен паспорт/сертификат…"
                rows={4}
                required
                className="mt-1.5"
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, consent: checked as boolean })
                }
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal cursor-pointer">
                Я согласен на обработку персональных данных в соответствии с{" "}
                <a href="/privacy/" className="text-primary hover:underline">
                  Политикой конфиденциальности
                </a>
              </Label>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? (
                "Отправка..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Отправить
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
