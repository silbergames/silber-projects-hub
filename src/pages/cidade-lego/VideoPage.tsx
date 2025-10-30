import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/cidade-lego">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Cidade de Lego
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Cidade ao Vivo
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe a cidade em tempo real, 24 horas por dia
            </p>
          </div>

          <VideoPlayer 
            title="Transmissão ao Vivo - Cidade de Lego"
            description="Câmeras em múltiplos ângulos capturam cada detalhe da cidade"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card border-border card-glow">
              <Camera className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">4 Câmeras Ativas</h3>
              <p className="text-foreground/70 text-sm">
                Múltiplos ângulos para você não perder nenhum detalhe
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">24/7 Online</h3>
              <p className="text-foreground/70 text-sm">
                Transmissão contínua, você pode visitar a qualquer momento
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Alta Qualidade</h3>
              <p className="text-foreground/70 text-sm">
                Vídeo em 1080p para você ver cada tijolinho claramente
              </p>
            </Card>
          </div>

          <Card className="p-8 mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-accent">Sobre as Transmissões</h2>
            <div className="space-y-4 text-foreground/90">
              <p className="leading-relaxed">
                Nossas câmeras estão estrategicamente posicionadas para capturar todos os ângulos da 
                Cidade de Lego. Você pode ver o crescimento da cidade em tempo real, acompanhar as 
                construções em andamento e até mesmo testemunhar eventos especiais ao vivo.
              </p>
              <p className="leading-relaxed">
                Durante construções importantes, fazemos transmissões especiais com narração ao vivo, 
                onde explicamos cada passo do processo e respondemos perguntas da comunidade em tempo real.
              </p>
              <p className="leading-relaxed">
                A iluminação LED especial permite que a cidade fique visualmente impressionante tanto 
                durante o dia quanto à noite, criando atmosferas diferentes em cada período.
              </p>
            </div>
          </Card>

          <Card className="p-8 mt-8 bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Horários Especiais</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <div className="w-24 font-bold text-accent flex-shrink-0">14:00</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Tour Guiado Diário</h4>
                  <p className="text-foreground/70 text-sm">
                    Todos os dias fazemos um tour completo pela cidade explicando cada área
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <div className="w-24 font-bold text-accent flex-shrink-0">19:00</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Show de Luzes</h4>
                  <p className="text-foreground/70 text-sm">
                    Sistema de LEDs cria um espetáculo visual sincronizado com música
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <div className="w-24 font-bold text-accent flex-shrink-0">Variável</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Construções ao Vivo</h4>
                  <p className="text-foreground/70 text-sm">
                    Quando há construções importantes, anunciamos com antecedência nas redes sociais
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
