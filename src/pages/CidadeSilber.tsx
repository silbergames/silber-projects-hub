import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import { Card } from "@/components/ui/card";
import { Home, Car, Train, Package } from "lucide-react";

const CidadeSilber = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-secondary/20 rounded-full mb-6">
              <Home className="w-16 h-16 text-secondary glow-effect" />
            </div>
            <h1 className="text-6xl font-black mb-6 text-gradient-silver">
              Cidade Silber
            </h1>
            <p className="text-2xl text-gradient-primary font-semibold">
              Colecionáveis Únicos em um Mundo Físico
            </p>
          </div>

          {/* Main Description */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold mb-6 text-secondary">O Que É a Cidade Silber?</h2>
            <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed space-y-4">
              <p className="text-lg">
                A Cidade Silber é nossa galeria de colecionáveis premium, onde o mundo físico encontra 
                a paixão por colecionar. Inspirada na Cidade de Lego, a Cidade Silber expande o conceito 
                para incluir uma variedade impressionante de itens colecionáveis que vão muito além dos tijolinhos.
              </p>
              <p className="text-lg">
                O coração do projeto são as casas colecionáveis de MDF, criadas artesanalmente com 
                atenção aos mínimos detalhes. Cada casa é única, podendo ser personalizada e servindo 
                como uma peça de exposição ou parte de uma coleção maior que forma bairros e cidades completas.
              </p>
              <p className="text-lg">
                Mas não para por aí! A Cidade Silber também serve como showroom para diversos outros 
                colecionáveis: carrinhos Hot Wheels em pistas elaboradas, trens de controle remoto 
                percorrendo trilhos detalhados, miniaturas, action figures e muito mais. É um universo 
                de possibilidades para colecionadores de todos os tipos.
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Home className="w-12 h-12 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Casas de MDF</h3>
                  <p className="text-foreground/80">
                    Casas colecionáveis artesanais em MDF de alta qualidade. Cada peça é única, 
                    com detalhes impressionantes e possibilidade de personalização completa.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Car className="w-12 h-12 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Hot Wheels Collection</h3>
                  <p className="text-foreground/80">
                    Pistas elaboradas e cenários temáticos para exibir sua coleção de Hot Wheels. 
                    Cada corredor conta uma história diferente na nossa cidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Train className="w-12 h-12 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Trens de Controle Remoto</h3>
                  <p className="text-foreground/80">
                    Sistemas ferroviários completos com trens de controle remoto percorrendo a cidade. 
                    Trilhos detalhados conectam diferentes áreas da Cidade Silber.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Package className="w-12 h-12 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Diversos Colecionáveis</h3>
                  <p className="text-foreground/80">
                    Action figures, miniaturas, réplicas e muito mais. A Cidade Silber é um 
                    paraíso para colecionadores de todos os tipos e interesses.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Elements */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Elementos Interativos</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Exposições Rotativas</h3>
                <p className="text-foreground/80 leading-relaxed">
                  A Cidade Silber está sempre mudando! Regularmente rotacionamos as exposições, 
                  trazendo novos colecionáveis e criando cenários temáticos diferentes. Cada visita 
                  é uma nova experiência.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Personalização Comunitária</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Assim como na Cidade de Lego, nossa comunidade pode sugerir novos temas, arranjos 
                  e até mesmo criar seus próprios designs de casas de MDF que podem ser produzidos 
                  e adicionados à cidade.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Tours Virtuais</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Não pode visitar pessoalmente? Oferecemos tours virtuais completos pela Cidade Silber, 
                  com câmeras de alta definição que mostram cada detalhe dos colecionáveis e suas histórias.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent">Workshops e Eventos</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Participe de workshops de customização, eventos de lançamento de novos colecionáveis 
                  e encontros com outros colecionadores. A Cidade Silber é um ponto de encontro para 
                  entusiastas de todo tipo.
                </p>
              </div>
            </div>
          </Card>

          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default CidadeSilber;
