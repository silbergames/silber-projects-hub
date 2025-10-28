import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";

interface Gameplay {
  id: string;
  game: string;
  title: string;
  category: string;
  episodes: number;
  views: number;
  thumbnail?: string;
  status: "ongoing" | "completed";
}

interface GameplayCardProps {
  gameplay: Gameplay;
}

const GameplayCard = ({ gameplay }: GameplayCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border card-glow hover:border-accent/50 transition-all">
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
        {gameplay.thumbnail ? (
          <img 
            src={gameplay.thumbnail} 
            alt={gameplay.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-accent/50" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge 
            className={gameplay.status === "ongoing" 
              ? "bg-destructive text-white" 
              : "bg-secondary text-white"
            }
          >
            {gameplay.status === "ongoing" ? "Em Andamento" : "Completo"}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <Badge variant="outline" className="mb-3 border-accent/30 text-accent">
          {gameplay.category}
        </Badge>
        
        <h3 className="text-lg font-bold text-foreground mb-2">
          {gameplay.game}
        </h3>
        <p className="text-sm text-foreground/70 mb-4">
          {gameplay.title}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>{gameplay.episodes} episódios</span>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{gameplay.views.toLocaleString()} views</span>
          </div>
        </div>

        <Button className="w-full bg-accent hover:bg-accent/90">
          <Play className="w-4 h-4 mr-2" />
          Assistir Série
        </Button>
      </div>
    </Card>
  );
};

export default GameplayCard;
