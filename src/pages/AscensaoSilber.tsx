import { useState } from "react";
import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import ProjectSidebar from "@/components/ProjectSidebar";
import NewsSection from "@/components/NewsSection";
import LiveSection from "@/components/LiveSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Shield, Swords, Globe, Trophy, Gamepad2 } from "lucide-react";

const AscensaoSilber = () => {
  const [activeSection, setActiveSection] = useState("available");

  const sidebarLinks = [
    { id: "available", label: "Disponível Agora", icon: "✅" },
    { id: "clans", label: "Clans & Guildas", icon: "🛡️" },
    { id: "rooms", label: "Salas de Jogos", icon: "🎮" },
    { id: "servers", label: "Servidores", icon: "🖥️" },
    { id: "live", label: "Lives", icon: "🔴" },
    { id: "news", label: "Notícias", icon: "📰" },
  ];

  const liveStreams = [
    {
      id: "1",
      title: "Tour pelo Servidor Minecraft Silber",
      viewers: 678,
      platform: "YouTube",
      isLive: true
    }
  ];

  const newsItems = [
    {
      id: "1",
      title: "Novo Servidor de Minecraft Inaugurado!",
      date: "28 Out 2025",
      category: "Servidor",
      excerpt: "Nosso servidor de Minecraft com mods exclusivos e sistema econômico já está disponível! Venha construir sua casa no mundo Silber."
    },
    {
      id: "2",
      title: "Clan Silber atinge Top 10 no Valorant!",
      date: "23 Out 2025",
      category: "Clan",
      excerpt: "Nosso clan oficial de Valorant conquistou uma posição no Top 10 do ranking regional após uma série impressionante de vitórias!"
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
            <aside className="hidden lg:block">
              <ProjectSidebar 
                links={sidebarLinks}
                activeSection={activeSection}
                onNavigate={scrollToSection}
              />
            </aside>

            <main>
              <div className="text-center mb-16">
                <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-6">
                  <Crown className="w-16 h-16 text-cyan-400 glow-effect" />
                </div>
                <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Ascensão Silber
                </h1>
                <p className="text-2xl text-gradient-silver font-semibold">
                  Conquistando Universos, Unindo Comunidades
                </p>
              </div>

              <Card className="p-8 mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">O Que É Ascensão Silber?</h2>
                <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed space-y-4">
                  <p className="text-lg">
                    Ascensão Silber é nosso projeto de estabelecer presença da comunidade Silber Games em múltiplos 
                    universos gaming através de Silber Rooms, Clans e servidores dedicados.
                  </p>
                </div>
              </Card>

              <section id="available" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Já Disponível</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-card border-border card-glow">
                    <Badge className="mb-4 bg-accent">Servidor Ativo</Badge>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Minecraft Silber</h3>
                    <p className="text-foreground/80 mb-4">Servidor survival com economia, clans e eventos semanais</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gamepad2 className="w-4 h-4" />
                      <span>124 jogadores online</span>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-card border-border card-glow">
                    <Badge className="mb-4 bg-accent">Clan Ativo</Badge>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Valorant Silber Elite</h3>
                    <p className="text-foreground/80 mb-4">Clan competitivo com treinos regulares</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>32 membros ativos</span>
                    </div>
                  </Card>
                </div>
              </section>

              <section id="clans" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Clans & Guildas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Valorant", "League of Legends", "World of Warcraft", "Lost Ark"].map(game => (
                    <Card key={game} className="p-4 bg-card/50 border-border">
                      <h4 className="font-semibold text-cyan-400 mb-2">{game}</h4>
                      <p className="text-sm text-foreground/70">Clan ativo com eventos semanais</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="live" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Lives</h2>
                <LiveSection streams={liveStreams} />
              </section>

              <section id="news" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Notícias</h2>
                <NewsSection news={newsItems} />
              </section>

              <CommentSection />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AscensaoSilber;
