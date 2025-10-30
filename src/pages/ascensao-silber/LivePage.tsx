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
      title: "Tour pelo Servidor Minecraft Silber",
      viewers: 678,
      platform: "YouTube",
      isLive: true
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
            <div className="inline-block p-4 bg-destructive/20 rounded-full mb-6">
              <Radio className="w-16 h-16 text-destructive glow-effect animate-pulse" />
            </div>
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Lives Ascensão Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe eventos dos clans e servidores ao vivo
            </p>
          </div>

          <LiveSection streams={liveStreams} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Conteúdo das Lives</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🎮 Gameplay em Servidores</h4>
                <p className="text-foreground/70 text-sm">
                  Tours pelos servidores Silber, mostrando construções, eventos e a comunidade em ação.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">⚔️ Partidas de Clans</h4>
                <p className="text-foreground/70 text-sm">
                  Acompanhe nossos clans competindo em torneios e partidas ranqueadas.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🎉 Eventos Especiais</h4>
                <p className="text-foreground/70 text-sm">
                  Eventos comunitários, inaugurações de novos servidores e celebrações de conquistas.
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
