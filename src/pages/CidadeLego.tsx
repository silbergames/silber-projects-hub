import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import { Card } from "@/components/ui/card";
import { Building2, Users, Bell, Video } from "lucide-react";

const CidadeLego = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-primary/20 rounded-full mb-6">
              <Building2 className="w-16 h-16 text-primary glow-effect" />
            </div>
            <h1 className="text-6xl font-black mb-6 text-gradient-primary">
              Cidade de Lego
            </h1>
            <p className="text-2xl text-gradient-silver font-semibold">
              Construa o Futuro, Tijolo por Tijolo
            </p>
          </div>

          {/* Main Description */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-accent">O Que É a Cidade de Lego?</h2>
            <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed space-y-4">
              <p className="text-lg">
                A Cidade de Lego é um projeto revolucionário e totalmente autoral da Silber Games. 
                Trata-se de uma cidade construída inteiramente com peças LEGO, onde cada prédio, 
                rua e detalhe é cuidadosamente planejado e executado pela nossa equipe em colaboração 
                com nossa comunidade.
              </p>
              <p className="text-lg">
                O diferencial? Esta não é apenas uma cidade estática! Nossa comunidade tem controle 
                total sobre o desenvolvimento e evolução da cidade. Cada membro pode sugerir, votar 
                e influenciar nas próximas construções, modificações e até mesmo eventos que acontecem 
                na cidade.
              </p>
              <p className="text-lg">
                Acompanhe a cidade em tempo real através das nossas transmissões ao vivo, onde você 
                pode ver cada tijolinho sendo colocado e participar ativamente das decisões sobre o 
                futuro da nossa metrópole de LEGO.
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Users className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Controle Comunitário</h3>
                  <p className="text-foreground/80">
                    Nossa comunidade decide tudo: desde novos prédios até a cor das ruas. 
                    Votações regulares garantem que todos tenham voz ativa no desenvolvimento da cidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Video className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Transmissão ao Vivo</h3>
                  <p className="text-foreground/80">
                    Acompanhe cada momento da construção através de nossas lives. 
                    Veja a cidade crescer em tempo real e interaja com outros membros da comunidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Bell className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Atualizações Constantes</h3>
                  <p className="text-foreground/80">
                    Todas as mudanças são documentadas e noticiadas para os seguidores. 
                    Nunca perca nenhuma novidade sobre o desenvolvimento da cidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Building2 className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Expansão Infinita</h3>
                  <p className="text-foreground/80">
                    O céu é o limite! A cidade está em constante expansão com novos distritos, 
                    áreas temáticas e construções especiais baseadas nas sugestões da comunidade.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* How to Participate */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Como Participar?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Junte-se à Comunidade</h3>
                  <p className="text-foreground/80">
                    Entre nos nossos canais oficiais nas redes sociais e discord para receber todas as atualizações.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Participe das Votações</h3>
                  <p className="text-foreground/80">
                    Regularmente abrimos votações sobre novos projetos, construções e modificações na cidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Acompanhe as Lives</h3>
                  <p className="text-foreground/80">
                    Assista nossas transmissões ao vivo e veja sua influência tomando forma na cidade real.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Sugira Ideias</h3>
                  <p className="text-foreground/80">
                    Sua criatividade é fundamental! Envie suas sugestões de construções, eventos e melhorias.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default CidadeLego;
