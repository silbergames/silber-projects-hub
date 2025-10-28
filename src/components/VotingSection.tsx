import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Vote, Clock } from "lucide-react";

interface VotingOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

interface Voting {
  id: string;
  title: string;
  description: string;
  endDate: string;
  status: "active" | "ended";
  options: VotingOption[];
  totalVotes: number;
}

interface VotingSectionProps {
  votings: Voting[];
}

const VotingSection = ({ votings }: VotingSectionProps) => {
  return (
    <div className="space-y-6">
      {votings.map((voting) => (
        <Card key={voting.id} className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {voting.title}
              </h3>
              <p className="text-foreground/70 text-sm">
                {voting.description}
              </p>
            </div>
            <Badge 
              variant={voting.status === "active" ? "default" : "secondary"}
              className={voting.status === "active" ? "bg-accent" : ""}
            >
              {voting.status === "active" ? "Ativa" : "Encerrada"}
            </Badge>
          </div>

          <div className="space-y-3 mb-4">
            {voting.options.map((option) => (
              <div key={option.id} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground font-medium">{option.text}</span>
                  <span className="text-muted-foreground">
                    {option.votes} votos ({option.percentage}%)
                  </span>
                </div>
                <Progress value={option.percentage} className="h-2" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {voting.status === "active" ? `Termina em ${voting.endDate}` : `Encerrada em ${voting.endDate}`}
            </div>
            {voting.status === "active" && (
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                <Vote className="w-4 h-4 mr-2" />
                Votar Agora
              </Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default VotingSection;
