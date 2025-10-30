import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ScoresPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/silber-wars">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Silber Wars
            </Button>
          </Link>

          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Pontuações e Rankings
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
              <h3 className="text-xl font-bold mb-4 text-accent">🏆 Top 5 - Ranking Geral</h3>
              <div className="space-y-3">
                {[
                  { rank: 1, name: "Team Phoenix", points: 2450 },
                  { rank: 2, name: "Dragons Elite", points: 2280 },
                  { rank: 3, name: "Night Raiders", points: 2150 },
                  { rank: 4, name: "Thunder Squad", points: 2020 },
                  { rank: 5, name: "Shadow Wolves", points: 1890 }
                ].map(team => (
                  <div key={team.rank} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="w-8 h-8 flex items-center justify-center">
                        {team.rank}
                      </Badge>
                      <span className="font-semibold text-foreground">{team.name}</span>
                    </div>
                    <span className="text-accent font-bold">{team.points} pts</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
              <h3 className="text-xl font-bold mb-4 text-destructive">⚡ Pontuações em Tempo Real</h3>
              <div className="space-y-3">
                <div className="p-4 bg-card/50 rounded-lg border border-destructive/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">Team Alpha</span>
                    <Badge className="bg-destructive animate-pulse">AO VIVO</Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Rodada 3/5</span>
                    <span className="text-accent font-bold">12-8</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoresPage;
