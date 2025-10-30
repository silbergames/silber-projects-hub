import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const VideoPage = () => {
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
            <h1 className="text-5xl font-black mb-4 text-gradient-silver">
              Tour Virtual pela Cidade Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore nossa galeria de colecionáveis em alta definição
            </p>
          </div>

          <VideoPlayer 
            title="Cidade Silber - Tour Completo"
            description="Navegue por cada setor da cidade e veja todos os colecionáveis de perto"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card border-border card-glow">
              <Home className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Casas de MDF</h3>
              <p className="text-foreground/70 text-sm">
                Veja cada detalhe das casas artesanais com zoom em 4K
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <Package className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Colecionáveis Raros</h3>
              <p className="text-foreground/70 text-sm">
                Hot Wheels exclusivos, miniaturas vintage e muito mais
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <Sparkles className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Iluminação Premium</h3>
              <p className="text-foreground/70 text-sm">
                Sistema de luzes que destaca cada peça da coleção
              </p>
            </Card>
          </div>

          <Card className="p-8 mt-12 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Setores da Cidade</h2>
            <div className="space-y-4">
              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🏠 Distrito Residencial MDF</h4>
                <p className="text-foreground/70 text-sm">
                  Mais de 50 casas únicas em MDF, cada uma com seu próprio estilo arquitetônico 
                  e detalhes personalizados. Algumas disponíveis para venda!
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🏎️ Pista Hot Wheels Premium</h4>
                <p className="text-foreground/70 text-sm">
                  Circuitos elaborados com loops, rampas e cenários temáticos exibindo nossa 
                  coleção de mais de 300 Hot Wheels, incluindo edições raras dos anos 70 e 80.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🚂 Estação Ferroviária</h4>
                <p className="text-foreground/70 text-sm">
                  Trilhos que percorrem toda a cidade com trens de controle remoto em escala, 
                  estações detalhadas e paisagens realistas.
                </p>
              </div>

              <div className="p-4 bg-card/50 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">🎭 Galeria de Action Figures</h4>
                <p className="text-foreground/70 text-sm">
                  Exposição rotativa de action figures, miniaturas e réplicas de diversas franquias, 
                  de super-heróis a personagens de anime.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Tours Guiados Especiais</h2>
            <p className="text-foreground/80 mb-4">
              Além do vídeo em loop, oferecemos tours guiados ao vivo nos seguintes horários:
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-card/50 rounded-lg">
                <span className="font-bold text-secondary w-20">Seg-Sex</span>
                <span className="text-foreground/70">16:00 - Tour Completo (45min)</span>
              </div>
              <div className="flex gap-3 p-3 bg-card/50 rounded-lg">
                <span className="font-bold text-secondary w-20">Sábados</span>
                <span className="text-foreground/70">14:00 - Foco em Casas MDF | 18:00 - Foco em Hot Wheels</span>
              </div>
              <div className="flex gap-3 p-3 bg-card/50 rounded-lg">
                <span className="font-bold text-secondary w-20">Domingos</span>
                <span className="text-foreground/70">15:00 - Tour Completo + Q&A</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
