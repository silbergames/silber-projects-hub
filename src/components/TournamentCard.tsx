import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users } from "lucide-react";

interface Tournament {
  id: string;
  name: string;
  game: string;
  status: "upcoming" | "ongoing" | "finished";
  startDate: string;
  participants: number;
  prize?: string;
}

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  const statusConfig = {
    upcoming: { label: "Em Breve", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    ongoing: { label: "Em Andamento", color: "bg-destructive/20 text-destructive border-destructive/30" },
    finished: { label: "Finalizado", color: "bg-secondary/20 text-secondary border-secondary/30" }
  };

  const config = statusConfig[tournament.status];

  return (
    <Card className="p-5 bg-card border-border card-glow hover:border-accent/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">
            {tournament.name}
          </h3>
          <p className="text-sm text-muted-foreground">{tournament.game}</p>
        </div>
        <Badge className={config.color}>
          {config.label}
        </Badge>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Calendar className="w-4 h-4 text-accent" />
          <span>{tournament.startDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Users className="w-4 h-4 text-accent" />
          <span>{tournament.participants} participantes</span>
        </div>
        {tournament.prize && (
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="font-semibold text-accent">{tournament.prize}</span>
          </div>
        )}
      </div>

      <Button 
        className="w-full" 
        variant={tournament.status === "ongoing" ? "default" : "outline"}
      >
        {tournament.status === "upcoming" && "Inscrever-se"}
        {tournament.status === "ongoing" && "Ver Detalhes"}
        {tournament.status === "finished" && "Ver Resultados"}
      </Button>
    </Card>
  );
};

export default TournamentCard;
