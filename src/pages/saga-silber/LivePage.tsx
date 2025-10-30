import Header from "@/components/Header";
import LiveSection from "@/components/LiveSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radio, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const LivePage = () => {
  const liveStreams = [
    {
      id: "1",
      title: "Saga Silber: Elden Ring - Boss Rush Challenge!",
      viewers: 892,
      platform: "YouTube",
      isLive: true
    },
    {
      id: "2",
      title: "Hollow Knight Steel Soul - Tentativa #7",
      viewers: 456,
      platform: "Twitch",
      isLive: true
    }
  ];

  const upcomingStreams = [
    {
      title: "Baldur's Gate 3 - Início da Nova Saga",
      date: "Hoje às 20:00",
      platform: "YouTube",
      description: "Começamos oficialmente nossa jornada em Baldur's Gate 3!"
    },
    {
      title: "Celeste Speedrun - Tentativa de Recorde",
      date: "Amanhã às 18:00",
      platform: "Twitch",
      description: "Tentando bater nosso recorde pessoal no any% de Celeste"
    },
    {
      title: "God of War - Valquíria Final em Give Me God of War",
      date: "Sábado às 15:00",
      platform: "YouTube",
      description: "O confronto épico final contra Sigrun na dificuldade máxima!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/saga-silber">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Saga Silber
            </Button>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-destructive/20 rounded-full mb-6">
              <Radio className="w-16 h-16 text-destructive glow-effect animate-pulse" />
            </div>
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Lives Saga Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe gameplay épico ao vivo
            </p>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-destructive animate-pulse">AO VIVO AGORA</Badge>
              <h2 className="text-3xl font-bold text-gradient-primary">Lives Ativas</h2>
            </div>
            <LiveSection streams={liveStreams} />
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-gradient-primary">Próximas Lives</h2>
            </div>
            <div className="space-y-4">
              {upcomingStreams.map((stream, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-all card-glow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{stream.title}</h3>
                      <p className="text-foreground/70 text-sm mb-3">{stream.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
                          {stream.platform}
                        </Badge>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {stream.date}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline">Notificar</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">O Que Esperar nas Lives</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🎮 Gameplay Autêntico</h4>
                <p className="text-foreground/70 text-sm">
                  Sem edições ou cortes - você vê cada tentativa, cada falha e cada conquista em tempo real.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">💬 Chat Interativo</h4>
                <p className="text-foreground/70 text-sm">
                  Converse conosco durante a gameplay, sugira estratégias e participe das decisões importantes!
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🏆 Momentos Épicos</h4>
                <p className="text-foreground/70 text-sm">
                  Testemunhe vitórias emocionantes contra bosses difíceis e conquistas significativas ao vivo.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">📚 Aprenda com a Gente</h4>
                <p className="text-foreground/70 text-sm">
                  Compartilhamos dicas, estratégias e técnicas avançadas enquanto jogamos.
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
