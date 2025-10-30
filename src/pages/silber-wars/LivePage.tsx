import Header from "@/components/Header";
import LiveSection from "@/components/LiveSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const LivePage = () => {
  const liveStreams = [
    {
      id: "1",
      title: "Semifinal CS:GO - Team Alpha vs Team Beta",
      viewers: 1243,
      platform: "YouTube",
      isLive: true
    },
    {
      id: "2",
      title: "Análise Pós-Jogo - Silber League Finals",
      viewers: 567,
      platform: "Twitch",
      isLive: true
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
              <Radio className="w-16 h-16 text-destructive glow-effect animate-pulse" />
            </div>
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              Lives Silber Wars
            </h1>
            <p className="text-xl text-muted-foreground">
              Partidas competitivas transmitidas ao vivo
            </p>
          </div>

          <LiveSection streams={liveStreams} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
            <h2 className="text-2xl font-bold mb-4 text-destructive">Programação de Lives</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-foreground">Partidas de Campeonato</h4>
                  <span className="text-sm text-muted-foreground">Horários variados</span>
                </div>
                <p className="text-foreground/70 text-sm">
                  Todas as partidas oficiais dos torneios são transmitidas com narração profissional e análise técnica.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-foreground">Análises Pós-Jogo</h4>
                  <span className="text-sm text-muted-foreground">Após cada partida importante</span>
                </div>
                <p className="text-foreground/70 text-sm">
                  Discussão detalhada sobre estratégias, jogadas-chave e performance dos times.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-foreground">Entrevistas com Campeões</h4>
                  <span className="text-sm text-muted-foreground">Após finais</span>
                </div>
                <p className="text-foreground/70 text-sm">
                  Conversa com os vencedores sobre a jornada até o título e planos futuros.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LivePage;
