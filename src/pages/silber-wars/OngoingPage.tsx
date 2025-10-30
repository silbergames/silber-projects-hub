import Header from "@/components/Header";
import TournamentCard from "@/components/TournamentCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Swords } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const OngoingPage = () => {
  const tournaments = [
    {
      id: "1",
      name: "Torneio Relâmpago CS:GO",
      game: "Counter-Strike: Global Offensive",
      status: "ongoing" as const,
      startDate: "Iniciado em 20 Out",
      participants: 16,
      prize: "R$ 2.000"
    }
  ];

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
            <div className="inline-block p-4 bg-destructive/20 rounded-full mb-6">
              <Swords className="w-16 h-16 text-destructive glow-effect animate-pulse" />
            </div>
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Campeonatos em Andamento
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe as batalhas épicas acontecendo agora
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-destructive">Chaveamento Atual</h2>
              <Badge className="bg-destructive animate-pulse">AO VIVO</Badge>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg border-l-4 border-destructive">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Semifinal 1</span>
                  <Badge variant="outline">Em andamento</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/80">Team Alpha vs Team Omega</span>
                  <span className="text-destructive font-bold">12-8</span>
                </div>
              </div>

              <div className="p-4 bg-card/50 rounded-lg border-l-4 border-muted">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Semifinal 2</span>
                  <Badge variant="outline">Aguardando</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/80">Team Beta vs Team Sigma</span>
                  <span className="text-muted-foreground">Após SF1</span>
                </div>
              </div>

              <div className="p-4 bg-card/50 rounded-lg border-l-4 border-muted">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground">Grande Final</span>
                  <Badge variant="outline">Programada</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/80">Vencedor SF1 vs Vencedor SF2</span>
                  <span className="text-muted-foreground">Domingo 19:00</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Assista ao Vivo</h2>
            <p className="text-foreground/80 mb-4">
              Todas as partidas são transmitidas ao vivo em nossos canais oficiais. 
              Participe do chat, torça pelo seu time favorito e acompanhe cada jogada!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-destructive hover:bg-destructive/90">
                Assistir no YouTube
              </Button>
              <Button variant="outline">
                Assistir na Twitch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OngoingPage;
