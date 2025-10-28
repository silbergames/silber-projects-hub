import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import { Card } from "@/components/ui/card";
import { Gamepad2, Target, BookOpen, Video } from "lucide-react";

const SagaSilber = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-accent/20 rounded-full mb-6">
              <Gamepad2 className="w-16 h-16 text-accent glow-effect" />
            </div>
            <h1 className="text-6xl font-black mb-6 text-gradient-primary">
              Saga Silber
            </h1>
            <p className="text-2xl text-gradient-silver font-semibold">
              Histórias Épicas, Objetivos Desafiadores, Aventuras Inesquecíveis
            </p>
          </div>

          {/* Main Description */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-3xl font-bold mb-6 text-accent">O Que É Saga Silber?</h2>
            <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed space-y-4">
              <p className="text-lg">
                Saga Silber é nossa série de conteúdo de gameplay onde criamos narrativas únicas e 
                estabelecemos objetivos desafiadores em diversos jogos. Não se trata apenas de zerar 
                jogos - trata-se de criar histórias memoráveis que envolvem toda a comunidade.
              </p>
              <p className="text-lg">
                Cada "saga" é uma jornada cuidadosamente planejada em um jogo específico, com objetivos 
                definidos pela comunidade. Pode ser conquistar todas as conquistas, completar desafios 
                específicos, criar builds únicas ou até mesmo explorar aspectos obscuros do jogo que 
                poucos conhecem.
              </p>
              <p className="text-lg">
                O melhor de tudo? Você escolhe! A comunidade vota nos jogos que serão explorados e nos 
                objetivos que serão perseguidos. Cada saga deixa a marca única da Silber Games e da 
                nossa comunidade no universo gaming.
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Target className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Objetivos Customizados</h3>
                  <p className="text-foreground/80">
                    Cada saga tem objetivos únicos definidos pela comunidade. Não é apenas sobre 
                    terminar o jogo, mas sobre criar desafios memoráveis e alcançar metas épicas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <BookOpen className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Narrativas Ricas</h3>
                  <p className="text-foreground/80">
                    Criamos histórias envolventes ao redor de cada jornada. Cada saga tem sua própria 
                    narrativa, personagens e momentos que ficam gravados na memória da comunidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Video className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Conteúdo Regular</h3>
                  <p className="text-foreground/80">
                    Episódios semanais documentando o progresso, highlights, momentos épicos e 
                    falhas hilariantes. Cada saga é uma série completa de entretenimento.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="flex items-start gap-4">
                <Gamepad2 className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Variedade de Jogos</h3>
                  <p className="text-foreground/80">
                    De RPGs clássicos a jogos indie modernos, exploramos todos os tipos de jogos 
                    que a comunidade deseja ver. Cada mês, uma nova aventura!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Current Sagas */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Como as Sagas Funcionam</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <span className="text-2xl">📊</span> Votação de Jogos
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Todo mês, a comunidade vota nos jogos que serão explorados na próxima saga. 
                  Todos têm voz ativa na escolha das próximas aventuras!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Definição de Objetivos
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Uma vez escolhido o jogo, a comunidade sugere e vota nos objetivos a serem 
                  alcançados. Pode ser desde speedruns até desafios de completar o jogo com 
                  restrições específicas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <span className="text-2xl">🎬</span> Desenvolvimento da História
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Criamos uma narrativa única ao redor da jornada. Personagens, arcos dramáticos 
                  e momentos épicos são documentados e compartilhados em episódios regulares.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <span className="text-2xl">🏆</span> Conclusão e Legado
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ao completar uma saga, celebramos com a comunidade! Um episódio especial final 
                  recapitula a jornada e a saga entra para o hall da fama Silber Games.
                </p>
              </div>
            </div>
          </Card>

          {/* Participation */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Participe das Sagas</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Vote nos Jogos e Objetivos</h4>
                  <p className="text-foreground/80 text-sm">
                    Sua opinião importa! Participe das votações regulares para escolher o rumo das sagas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Assista e Comente</h4>
                  <p className="text-foreground/80 text-sm">
                    Acompanhe os episódios e deixe seus comentários. Sua interação molda a narrativa!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sugira Desafios</h4>
                  <p className="text-foreground/80 text-sm">
                    Durante as sagas, a comunidade pode sugerir desafios adicionais para aumentar a dificuldade!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Crie Fan Content</h4>
                  <p className="text-foreground/80 text-sm">
                    Fan arts, memes e conteúdo criado pela comunidade são sempre celebrados e compartilhados!
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

export default SagaSilber;
