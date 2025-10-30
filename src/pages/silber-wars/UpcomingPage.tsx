import Header from "@/components/Header";
import TournamentCard from "@/components/TournamentCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingPage = () => {
  const tournaments = [
    {
      id: "1",
      name: "Copa Silber de Valorant",
      game: "Valorant",
      status: "upcoming" as const,
      startDate: "5 Nov 2025",
      participants: 32,
      prize: "R$ 5.000 + Prêmios"
    },
    {
      id: "2",
      name: "Liga Silber FIFA 24",
      game: "FIFA 24",
      status: "upcoming" as const,
      startDate: "12 Nov 2025",
      participants: 64,
      prize: "R$ 3.000"
    },
    {
      id: "3",
      name: "Torneio de Rocket League",
      game: "Rocket League",
      status: "upcoming" as const,
      startDate: "20 Nov 2025",
      participants: 24,
      prize: "R$ 2.500"
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
            <Calendar className="w-16 h-16 text-destructive mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Próximos Campeonatos
            </h1>
            <p className="text-xl text-muted-foreground">
              Inscreva-se agora e garanta sua vaga nas competições
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
            <h2 className="text-3xl font-bold mb-6 text-destructive">Como Se Inscrever</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Escolha o Torneio</h3>
                  <p className="text-foreground/80">
                    Selecione o campeonato que deseja participar e verifique os requisitos e regras específicas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Preencha o Formulário</h3>
                  <p className="text-foreground/80">
                    Complete o formulário de inscrição com suas informações e dados da equipe (se aplicável).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Confirmação</h3>
                  <p className="text-foreground/80">
                    Aguarde a confirmação por email. Você receberá todas as informações sobre horários e chaveamento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Prepare-se!</h3>
                  <p className="text-foreground/80">
                    Treine com sua equipe e prepare suas estratégias. Anunciamos detalhes finais 48h antes do início.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Requisitos Gerais</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <Trophy className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Ter pelo menos 16 anos de idade (ou autorização dos pais para menores)</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Possuir conta ativa no jogo do campeonato escolhido</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Estar disponível nas datas e horários programados</span>
              </li>
              <li className="flex items-start gap-2">
                <Trophy className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Concordar com nosso código de conduta e fair play</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPage;
