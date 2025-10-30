import Header from "@/components/Header";
import LiveSection from "@/components/LiveSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Radio, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const LivePage = () => {
  const liveStreams = [
    {
      id: "1",
      title: "Construção ao Vivo - Novo Prédio Residencial",
      viewers: 324,
      platform: "YouTube",
      isLive: true
    }
  ];

  const upcomingStreams = [
    {
      id: "1",
      title: "Tour Especial: Área Comercial Completa",
      date: "Hoje às 19:00",
      platform: "YouTube",
      description: "Vamos explorar cada loja do novo distrito comercial com detalhes sobre a construção"
    },
    {
      id: "2",
      title: "Construção do Estádio - Parte 1",
      date: "Amanhã às 15:00",
      platform: "Twitch",
      description: "Início da construção do estádio de futebol votado pela comunidade"
    },
    {
      id: "3",
      title: "Q&A com a Comunidade + Show de Luzes",
      date: "Sábado às 20:00",
      platform: "YouTube",
      description: "Respondemos perguntas ao vivo e apresentamos nosso show de luzes LED especial"
    }
  ];

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
            <div className="inline-block p-4 bg-destructive/20 rounded-full mb-6">
              <Radio className="w-16 h-16 text-destructive glow-effect animate-pulse" />
            </div>
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Transmissões ao Vivo
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe construções, eventos especiais e interaja em tempo real
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
              {upcomingStreams.map(stream => (
                <Card key={stream.id} className="p-6 bg-card border-border hover:border-accent/50 transition-all card-glow">
                  <div className="flex items-start justify-between mb-3">
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
                    <Button variant="outline">
                      Lembrar-me
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border card-glow">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-accent">Chat Interativo</h3>
              <p className="text-foreground/80">
                Durante as lives, você pode conversar com outros membros da comunidade, 
                fazer perguntas e sugerir ideias em tempo real.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <Radio className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-accent">Múltiplas Plataformas</h3>
              <p className="text-foreground/80">
                Transmitimos simultaneamente no YouTube e Twitch para você escolher 
                sua plataforma favorita para assistir.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Tipos de Transmissões</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🏗️ Construções ao Vivo</h4>
                <p className="text-foreground/70 text-sm">
                  Veja cada tijolinho sendo colocado em projetos importantes. Perfeito para 
                  entusiastas de LEGO que querem ver o processo completo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🎤 Tours Narrados</h4>
                <p className="text-foreground/70 text-sm">
                  Passeios guiados pela cidade com explicações detalhadas sobre cada área, 
                  construção e curiosidades do projeto.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">💡 Shows Especiais</h4>
                <p className="text-foreground/70 text-sm">
                  Eventos temáticos como shows de luzes, celebrações de marcos importantes 
                  e revelações de novas áreas da cidade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🎭 Eventos Comunitários</h4>
                <p className="text-foreground/70 text-sm">
                  Q&A sessions, votações ao vivo, e eventos onde a comunidade participa 
                  ativamente das decisões sobre a cidade.
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
