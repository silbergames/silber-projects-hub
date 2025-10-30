import { useState } from "react";
import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import ProjectSidebar from "@/components/ProjectSidebar";
import NewsSection from "@/components/NewsSection";
import LiveSection from "@/components/LiveSection";
import GameplayCard from "@/components/GameplayCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, Target, BookOpen, Video } from "lucide-react";

const SagaSilber = () => {
  const [activeSection, setActiveSection] = useState("categories");

  const sidebarLinks = [
    { id: "categories", label: "Gameplays por Categoria", icon: "🎮", href: "/saga-silber/categories" },
    { id: "live", label: "Lives ao Vivo", icon: "🔴", href: "/saga-silber/live" },
    { id: "news", label: "Notícias", icon: "📰", href: "/saga-silber/news" },
  ];

  const gameplaysByCategory = {
    rpg: [
      {
        id: "1",
        game: "Elden Ring",
        title: "Saga da Jornada Sem Morte",
        category: "RPG",
        episodes: 24,
        views: 45200,
        status: "ongoing" as const
      },
      {
        id: "2",
        game: "The Witcher 3",
        title: "Todas as Conquistas - 100%",
        category: "RPG",
        episodes: 48,
        views: 89500,
        status: "completed" as const
      }
    ],
    action: [
      {
        id: "3",
        game: "God of War Ragnarök",
        title: "Platina Completa + Valquírias",
        category: "Ação",
        episodes: 32,
        views: 67800,
        status: "completed" as const
      },
      {
        id: "4",
        game: "Devil May Cry 5",
        title: "Dante Must Die - No Damage",
        category: "Ação",
        episodes: 18,
        views: 34200,
        status: "ongoing" as const
      }
    ],
    indie: [
      {
        id: "5",
        game: "Hollow Knight",
        title: "Steel Soul Mode - Todas as Endings",
        category: "Indie",
        episodes: 28,
        views: 52100,
        status: "ongoing" as const
      },
      {
        id: "6",
        game: "Celeste",
        title: "Todos os Lados B e C",
        category: "Indie",
        episodes: 16,
        views: 28700,
        status: "completed" as const
      }
    ]
  };

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

  const newsItems = [
    {
      id: "1",
      title: "Nova Saga Começando: Baldur's Gate 3!",
      date: "25 Out 2025",
      category: "Nova Saga",
      excerpt: "A comunidade votou e decidiu! Nossa próxima saga será em Baldur's Gate 3, com o objetivo de completar todas as conquistas e explorar todas as rotas de história possíveis!"
    },
    {
      id: "2",
      title: "Saga Elden Ring Atinge 50 Mil Views!",
      date: "20 Out 2025",
      category: "Milestone",
      excerpt: "Nossa saga de Elden Ring ultrapassou a marca de 50 mil visualizações! Obrigado a todos que acompanham essa jornada épica sem mortes."
    },
    {
      id: "3",
      title: "Votação: Próximo Desafio Indie",
      date: "18 Out 2025",
      category: "Votação",
      excerpt: "Qual jogo indie você quer ver na próxima saga? Vote entre Hades, Dead Cells ou Ori and the Will of the Wisps!"
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <ProjectSidebar 
                links={sidebarLinks}
                activeSection={activeSection}
                onNavigate={scrollToSection}
              />
            </aside>

            {/* Main Content */}
            <main>
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

              {/* Gameplays by Category */}
              <section id="categories" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Gameplays por Categoria</h2>
                <Tabs defaultValue="rpg" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="rpg">RPG</TabsTrigger>
                    <TabsTrigger value="action">Ação</TabsTrigger>
                    <TabsTrigger value="indie">Indie</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="rpg">
                    <div className="grid md:grid-cols-2 gap-6">
                      {gameplaysByCategory.rpg.map(gameplay => (
                        <GameplayCard key={gameplay.id} gameplay={gameplay} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="action">
                    <div className="grid md:grid-cols-2 gap-6">
                      {gameplaysByCategory.action.map(gameplay => (
                        <GameplayCard key={gameplay.id} gameplay={gameplay} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="indie">
                    <div className="grid md:grid-cols-2 gap-6">
                      {gameplaysByCategory.indie.map(gameplay => (
                        <GameplayCard key={gameplay.id} gameplay={gameplay} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Live Streams */}
              <section id="live" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Lives em Andamento</h2>
                <LiveSection streams={liveStreams} />
              </section>

              {/* News Section */}
              <section id="news" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Últimas Notícias</h2>
                <NewsSection news={newsItems} />
              </section>

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
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagaSilber;
