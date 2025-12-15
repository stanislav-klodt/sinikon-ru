import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ObjectProject {
  id: string;
  name: string;
  description?: string;
  images: string[];
}

const projects: ObjectProject[] = [
  {
    id: "marriott",
    name: "Novosibirsk Marriott Hotel",
    description: "Установлена система канализации SINIKON",
    images: [
      "https://www.sinikon.ru/upload/iblock/bd0/bd0fc836a057ea4fc4bd74af3bc1490a.jpg",
      "https://www.sinikon.ru/upload/iblock/795/7950fa66e3b2eadace678361ed14102a.jpg",
      "https://www.sinikon.ru/upload/iblock/d63/d639d7290c725ce67a2e9696be656a08.jpg",
      "https://www.sinikon.ru/upload/iblock/a15/a15c9572632621c8a2f43e9c3c8f9803.jpg",
    ],
  },
  {
    id: "knevichi",
    name: "Аэропорт «Кневичи» (Владивосток)",
    description: "Установлена система канализации SINIKON",
    images: [
      "https://www.sinikon.ru/upload/iblock/9cb/9cbcded569950767e242078e9ff6ed5b.jpg",
      "https://www.sinikon.ru/upload/iblock/ab7/ab71fc046037bd037c912b84bc5a9c26.jpg",
      "https://www.sinikon.ru/upload/iblock/c83/c834d2e07c8b848fc3fd0fe7827f8ed2.jpg",
    ],
  },
  {
    id: "gallery",
    name: "Новосибирск Галерея",
    description: "Установлена система канализации SINIKON",
    images: [
      "https://www.sinikon.ru/upload/iblock/c6c/c6c0e8fea43399e0a2627a6f2fb50432.jpg",
      "https://www.sinikon.ru/upload/iblock/0ff/0ff5b0f37e4aa3c9d8ef8d3f8d74db93.jpg",
      "https://www.sinikon.ru/upload/iblock/a64/a64ee147169f8179f10bf4ecc50cbbbe.jpg",
    ],
  },
  {
    id: "spartak",
    name: "Открытие Арена (Москва)",
    description: "Установлена система канализации SINIKON",
    images: [
      "https://www.sinikon.ru/upload/iblock/6ea/6ea04247b683c46ba7099c9612596a3e.jpg",
      "https://www.sinikon.ru/upload/iblock/db5/db5b04696028dc508c02fcf84bec0110.jpg",
      "https://www.sinikon.ru/upload/iblock/1a3/1a3fefb75f89827ebedaca0c305e8f47.jpg",
      "https://www.sinikon.ru/upload/iblock/01d/01d94a4af04126b89fd95b04cdde4bb7.jpg",
      "https://www.sinikon.ru/upload/iblock/1e7/1e714539742207cb69d6c95755b543f2.jpg",
    ],
  },
  {
    id: "theater",
    name: "Приморский театр оперы и балета",
    description: "Установлена система канализации SINIKON",
    images: [
      "https://www.sinikon.ru/upload/iblock/32f/32fd152bc127571a733f25c61ee1b6ae.jpg",
      "https://www.sinikon.ru/upload/iblock/0eb/0eb55b1e24b7b0c00c7f69a2d2fd45eb.jpg",
    ],
  },
];

function ProjectCard({ project }: { project: ObjectProject }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <div className="bg-background border border-border rounded-2xl overflow-hidden">
        {/* Image Carousel */}
        <div className="relative aspect-[16/10] group">
          <img
            src={project.images[currentImage]}
            alt={project.name}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          />
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImage ? "bg-background" : "bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {project.name}
          </h3>
          {project.description && (
            <p className="text-sm text-muted-foreground">{project.description}</p>
          )}
        </div>

        {/* Thumbnails */}
        {project.images.length > 1 && (
          <div className="px-5 pb-5 flex gap-2 overflow-x-auto">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  idx === currentImage ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <img
            src={project.images[currentImage]}
            alt={project.name}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background text-sm">
            {currentImage + 1} / {project.images.length}
          </div>
        </div>
      )}
    </>
  );
}

export default function Objects() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30">
          <div className="container-main">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Наши объекты
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Компания SINIKON рада представить вам строительные объекты наших партнёров, 
              оснащённые современными канализационными системами SINIKON.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16">
          <div className="container-main">
            <div className="max-w-4xl">
              <p className="text-body mb-4">
                Мы гордимся тем, что за годы работы компании мы смогли создать стабильное, 
                успешно развивающееся предприятие, сформировать команду единомышленников, 
                нацеленных на результат.
              </p>
              <p className="text-body">
                Наша продукция хорошо известна на рынке и по достоинству оценена самыми 
                взыскательными потребителями не только в России, но и за её пределами. 
                Мы ценим доверие наших партнёров и говорим «спасибо» всем, кто выбрал нашу продукцию.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 md:pb-28">
          <div className="container-main">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container-main text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Хотите реализовать проект с SINIKON?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Свяжитесь с нами для консультации по подбору оборудования и технической поддержке.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link to="/contacts/">Связаться с нами</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/projectors/">Для проектировщиков</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
