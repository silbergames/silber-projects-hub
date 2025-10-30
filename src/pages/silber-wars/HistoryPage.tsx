import Header from "@/components/Header";
import TournamentCard from "@/components/TournamentCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const finishedTournaments = [
    {
      id: "1",
      name: "Silber League Championship",
      game: "League of Legends",
      status: "finished" as const,
      startDate: "Finalizado em 15 Out",
      participants: 48,
      prize: "R$ 8.000"
    },
    {
      id: "2",
      name: "Rocket League Masters",
      game: "Rocket League",
      status: "finished" as const,
      startDate: "Finalizado em 8 Out",
      participants: 24,
      prize: "R$ 4.500"
    },
    {
      id: "3",
      name: "Copa Silber FIFA 23",
      game: "FIFA 23",
      status: "finished" as const,
      startDate: "Finalizado em 1 Out",
      participants: 32,
      prize: "R$ 3.500"
    }
  ];

  const champions = [
    {
      tournament: "Silber League Championship",
      team: "Team Phoenix",
      date: "15 Out 2025",
      prize: "R$ 8.000"
    },
    {
      tournament: "Rocket League Masters",
      team: "Velocity Crew",
      date: "8 Out 2025",
      prize: "R$ 4.500"
    },
    {
      tournament: "Copa Silber FIFA 23",
      team: "ProPlayer_BR",
      date: "1 Out 2025",
      prize: "R$ 3.500"
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
            <Trophy className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Hall da Fama
            </h1>
            <p className="text-xl text-muted-foreground">
              Histórico completo de campeonatos e campeões
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-3xl font-bold mb-6 text-accent">🏆 Campeões Silber Wars</h2>
            <div className="space-y-4">
              {champions.map((champion, index) => (
                <div key={index} className="p-4 bg-card/50 rounded-lg border-l-4 border-accent">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{champion.team}</h3>
                      <p className="text-foreground/70 text-sm">{champion.tournament}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent font-bold">{champion.prize}</p>
                      <p className="text-muted-foreground text-sm">{champion.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Torneios Anteriores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {finishedTournaments.map(tournament => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </section>

          <Card className="p-8 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
            <h2 className="text-2xl font-bold mb-4 text-destructive">Estatísticas Gerais</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">15</div>
                <p className="text-foreground/70">Torneios Realizados</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">842</div>
                <p className="text-foreground/70">Participantes Totais</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-accent mb-2">R$ 45k</div>
                <p className="text-foreground/70">Em Prêmios Distribuídos</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
