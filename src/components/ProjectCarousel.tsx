import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  { id: 1, name: "Cidade de Lego", color: "hsl(262 73% 47%)" },
  { id: 2, name: "Cidade Silber", color: "hsl(240 5% 65%)" },
  { id: 3, name: "Silber Wars", color: "hsl(0 84% 60%)" },
  { id: 4, name: "Saga Silber", color: "hsl(262 73% 57%)" },
  { id: 5, name: "Ascensão Silber", color: "hsl(180 73% 47%)" },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="hover:bg-primary/20 text-foreground"
        >
          <ChevronLeft size={32} />
        </Button>

        <div className="flex gap-4 overflow-hidden w-full justify-center items-center">
          {projects.map((project, index) => {
            const offset = (index - currentIndex + projects.length) % projects.length;
            const isCenter = offset === 0;
            const isVisible = offset <= 2;

            return (
              <div
                key={project.id}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0 absolute"
                } ${
                  isCenter
                    ? "scale-110 z-10"
                    : "scale-75 opacity-50"
                }`}
                style={{
                  transform: `translateX(${(offset - 1) * 100}px)`,
                }}
              >
                <div
                  className="w-32 h-32 rounded-xl flex items-center justify-center text-white font-bold text-center p-4 card-glow"
                  style={{ backgroundColor: project.color }}
                >
                  {project.name}
                </div>
              </div>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="hover:bg-primary/20 text-foreground"
        >
          <ChevronRight size={32} />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-accent w-8"
                : "bg-muted hover:bg-accent/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
