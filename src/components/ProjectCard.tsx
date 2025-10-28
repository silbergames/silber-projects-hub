import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  gradient: string;
}

const ProjectCard = ({ title, description, link, gradient }: ProjectCardProps) => {
  return (
    <Card className={`p-6 card-glow border-2 border-border/50 ${gradient}`}>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
      <Link to={link}>
        <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm group">
          Explorar Projeto
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
      </Link>
    </Card>
  );
};

export default ProjectCard;
