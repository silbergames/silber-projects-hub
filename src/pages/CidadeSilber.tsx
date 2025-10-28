import { useState } from "react";
import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import ProjectSidebar from "@/components/ProjectSidebar";
import NewsSection from "@/components/NewsSection";
import LiveSection from "@/components/LiveSection";
import VideoPlayer from "@/components/VideoPlayer";
import VotingSection from "@/components/VotingSection";
import { Card } from "@/components/ui/card";
import { Home, Car, Train, Package } from "lucide-react";

const CidadeSilber = () => {
  const [activeSection, setActiveSection] = useState("video");

  const sidebarLinks = [
    { id: "video", label: "Cidade ao Vivo", icon: "🎥" },
    { id: "news", label: "Últimas Notícias", icon: "📰" },
    { id: "live", label: "Tempo Real", icon: "🔴" },
    { id: "voting", label: "Votações", icon: "🗳️" },
  ];

  const newsItems = [
    {
      id: "1",
      title: "Nova Coleção de Casas MDF Premium Lançada!",
      date: "18 Out 2025",
      category: "Lançamento",
      excerpt: "Apresentamos nossa linha premium de casas em MDF com acabamento em prata envelhecida e detalhes em roxo. Cada peça é uma obra de arte única!"
    },
    {
      id: "2",
      title: "Trilhos de Trem Expandidos - Agora com Ponte Suspensa",
      date: "14 Out 2025",
      category: "Expansão",
      excerpt: "O sistema ferroviário da Cidade Silber ganhou uma ponte suspensa de 2 metros! Os trens agora percorrem um trajeto ainda mais espetacular."
    },
    {
      id: "3",
      title: "Exposição Especial: Hot Wheels Raros",
      date: "11 Out 2025",
      category: "Evento",
      excerpt: "Durante todo o mês, confira nossa exposição de Hot Wheels raros e edições limitadas, com peças que datam dos anos 70!"
    }
  ];

  const liveStreams = [
    {
      id: "1",
      title: "Tour Virtual pela Cidade Silber - Novos Colecionáveis",
      viewers: 189,
      platform: "Twitch",
      isLive: true
    }
  ];

  const votings = [
    {
      id: "1",
      title: "Tema da Próxima Exposição Rotativa",
      description: "Vote no tema que você quer ver na próxima exposição!",
      endDate: "5 dias",
      status: "active" as const,
      totalVotes: 850,
      options: [
        { id: "1", text: "Carros Clássicos em Miniatura", votes: 420, percentage: 49.4 },
        { id: "2", text: "Casas Temáticas de Filmes", votes: 280, percentage: 32.9 },
        { id: "3", text: "Trens Históricos", votes: 150, percentage: 17.7 }
      ]
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
                    percorrendo trilhos detalhados, miniaturas, action figures e muito mais.
                  </p>
                </div>
              </Card>

              {/* Video Section */}
              <section id="video" className="mb-12 scroll-mt-24">
                <VideoPlayer 
                  title="Cidade Silber em Exibição"
                  description="Faça um tour virtual pela nossa galeria de colecionáveis e veja cada detalhe das casas de MDF, pistas de Hot Wheels e muito mais!"
                />
              </section>

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

              {/* News Section */}
              <section id="news" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Últimas Notícias</h2>
                <NewsSection news={newsItems} />
              </section>

              {/* Live Section */}
              <section id="live" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Acompanhe em Tempo Real</h2>
                <LiveSection streams={liveStreams} />
              </section>

              {/* Voting Section */}
              <section id="voting" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Votações Ativas</h2>
                <VotingSection votings={votings} />
              </section>

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

export default CidadeSilber;
