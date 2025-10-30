import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Users, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const AvailablePage = () => {
  const availableProjects = [
    {
      title: "Servidor Minecraft Silber",
      game: "Minecraft",
      type: "Servidor",
      players: 124,
      status: "Ativo",
      description: "Servidor survival com economia própria, sistema de clans, eventos semanais e mods exclusivos. Mundo persistente onde você pode construir sua base e participar da economia.",
      features: ["Economia avançada", "Sistema de Clans", "Eventos semanais", "Mods exclusivos", "Mundo persistente"]
    },
    {
      title: "Clan Valorant Silber Elite",
      game: "Valorant",
      type: "Clan",
      players: 32,
      status: "Ativo",
      description: "Clan competitivo com treinos regulares, análise de partidas e participação em torneios. Atualmente ranqueado no Top 10 regional.",
      features: ["Treinos 3x por semana", "Análise de partidas", "Torneios mensais", "Coach dedicado", "Top 10 regional"]
    },
    {
      title: "Guilda WoW - Silber Legends",
      game: "World of Warcraft",
      type: "Guilda",
      players: 45,
      status: "Ativo",
      description: "Guilda focada em PvE endgame com raids programadas e eventos sociais. Ambiente acolhedor tanto para novatos quanto veteranos.",
      features: ["Raids 2x por semana", "Eventos sociais", "Sistema de DKP", "Guias e tutoriais", "Discord ativo"]
    },
    {
      title: "Sala Discord Silber Games",
      game: "Multi-jogos",
      type: "Servidor Discord",
      players: 580,
      status: "Ativo",
      description: "Hub central da comunidade Silber para todos os jogos. Canais dedicados, eventos, sorteios e muito mais.",
      features: ["Canais por jogo", "Eventos diários", "Sistema de níveis", "Sorteios semanais", "Suporte ativo"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/ascensao-silber">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Ascensão Silber
            </Button>
          </Link>

          <div className="text-center mb-12">
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Disponível Agora
            </h1>
            <p className="text-xl text-muted-foreground">
              Entre e jogue hoje mesmo!
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {availableProjects.map((project, index) => (
              <Card key={index} className="p-8 bg-card border-border card-glow hover:border-accent/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                      <Badge className="bg-accent">✅ {project.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-accent">{project.game}</span>
                      <span>•</span>
                      <span>{project.type}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.players} membros ativos</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90">
                    Participar
                  </Button>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="bg-card/50">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
              <Activity className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Sempre Ativo</h3>
              <p className="text-foreground/70 text-sm">
                Todos os projetos têm moderação 24/7 e membros ativos em diversos horários
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
              <Users className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Comunidade Acolhedora</h3>
              <p className="text-foreground/70 text-sm">
                Ambiente friendly tanto para iniciantes quanto para jogadores experientes
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Gratuito</h3>
              <p className="text-foreground/70 text-sm">
                Todos os servidores, clans e salas são 100% gratuitos para participar
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePage;
