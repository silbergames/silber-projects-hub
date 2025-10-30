import Header from "@/components/Header";
import LiveSection from "@/components/LiveSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const LivePage = () => {
  const liveStreams = [
    {
      id: "1",
      title: "Tour Virtual pela Cidade Silber - Novos Colecionáveis",
      viewers: 189,
      platform: "Twitch",
      isLive: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/cidade-silber">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Cidade Silber
            </Button>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-destructive/20 rounded-full mb-6">
              <Radio className="w-16 h-16 text-destructive glow-effect animate-pulse" />
            </div>
            <h1 className="text-5xl font-black mb-4 text-gradient-silver">
              Lives da Cidade Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore colecionáveis em tempo real e participe de eventos exclusivos
            </p>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-destructive animate-pulse">AO VIVO</Badge>
              <h2 className="text-3xl font-bold text-gradient-primary">Transmissão Ativa</h2>
            </div>
            <LiveSection streams={liveStreams} />
          </section>

          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Tipos de Lives</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🏠 Tour pelas Casas MDF</h4>
                <p className="text-foreground/70 text-sm">
                  Apresentação detalhada de cada casa, mostrando técnicas de construção, 
                  acabamentos e possibilidades de personalização.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🏎️ Demonstrações de Pistas</h4>
                <p className="text-foreground/70 text-sm">
                  Hot Wheels em ação! Veja os carrinhos percorrendo as pistas e descubra 
                  curiosidades sobre modelos raros.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">📦 Unboxing de Novos Itens</h4>
                <p className="text-foreground/70 text-sm">
                  Acompanhe ao vivo a chegada de novos colecionáveis e veja onde serão 
                  posicionados na cidade.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🎨 Sessões de Customização</h4>
                <p className="text-foreground/70 text-sm">
                  Veja artesãos trabalhando em casas MDF personalizadas e aprenda técnicas 
                  de pintura e decoração.
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
