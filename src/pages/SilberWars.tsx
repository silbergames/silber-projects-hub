import { useState } from "react";
import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import ProjectSidebar from "@/components/ProjectSidebar";
import NewsSection from "@/components/NewsSection";
import LiveSection from "@/components/LiveSection";
import TournamentCard from "@/components/TournamentCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Swords, Clock, Users } from "lucide-react";

const SilberWars = () => {
  const [activeSection, setActiveSection] = useState("upcoming");

  const sidebarLinks = [
    { id: "upcoming", label: "Próximos Campeonatos", icon: "📅" },
    { id: "ongoing", label: "Em Andamento", icon: "⚔️" },
    { id: "live", label: "Lives", icon: "🔴" },
    { id: "history", label: "Histórico", icon: "🏆" },
    { id: "scores", label: "Pontuações", icon: "📊" },
    { id: "news", label: "Notícias", icon: "📰" },
  ];

  const upcomingTournaments = [
    {
      id: "1",
      name: "Copa Silber de Valorant",
      game: "Valorant",
      status: "upcoming" as const,
      startDate: "5 Nov 2025",
      participants: 32,
      prize: "R$ 5.000 + Prêmios"
    },
    {
      id: "2",
      name: "Liga Silber FIFA 24",
      game: "FIFA 24",
      status: "upcoming" as const,
      startDate: "12 Nov 2025",
      participants: 64,
      prize: "R$ 3.000"
    }
  ];

  const ongoingTournaments = [
    {
      id: "3",
      name: "Torneio Relâmpago CS:GO",
      game: "Counter-Strike: Global Offensive",
      status: "ongoing" as const,
      startDate: "Iniciado em 20 Out",
      participants: 16,
      prize: "R$ 2.000"
    }
  ];

  const finishedTournaments = [
    {
      id: "4",
      name: "Silber League Championship",
      game: "League of Legends",
      status: "finished" as const,
      startDate: "Finalizado em 15 Out",
      participants: 48,
      prize: "R$ 8.000"
    },
    {
      id: "5",
      name: "Rocket League Masters",
      game: "Rocket League",
      status: "finished" as const,
      startDate: "Finalizado em 8 Out",
      participants: 24,
      prize: "R$ 4.500"
    }
  ];

  const liveStreams = [
    {
      id: "1",
      title: "Semifinal CS:GO - Team Alpha vs Team Beta",
      viewers: 1243,
      platform: "YouTube",
      isLive: true
    },
    {
      id: "2",
      title: "Análise Pós-Jogo - Silber League Finals",
      viewers: 567,
      platform: "Twitch",
      isLive: true
    }
  ];

  const newsItems = [
    {
      id: "1",
      title: "Inscrições Abertas para Copa Silber de Valorant!",
      date: "22 Out 2025",
      category: "Inscrições",
      excerpt: "As inscrições para a Copa Silber de Valorant já estão abertas! Serão 32 times competindo por R$ 5.000 em prêmios. Garanta sua vaga!"
    },
    {
      id: "2",
      title: "Team Phoenix Sagra-se Campeã da Silber League!",
      date: "15 Out 2025",
      category: "Resultado",
      excerpt: "Após 8 semanas de competição intensa, a Team Phoenix conquistou o título da Silber League Championship com uma vitória épica de 3-2 na final."
    },
    {
      id: "3",
      title: "Novo Sistema de Rankings Implementado",
      date: "10 Out 2025",
      category: "Atualização",
      excerpt: "Implementamos um novo sistema de rankings que considera não apenas vitórias, mas também performance individual e espírito esportivo!"
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
                <div className="inline-block p-4 bg-destructive/20 rounded-full mb-6">
                  <Trophy className="w-16 h-16 text-destructive glow-effect" />
                </div>
                <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
                  Silber Wars
                </h1>
                <p className="text-2xl text-gradient-silver font-semibold">
                  Onde Campeões Nascem e Lendas São Forjadas
                </p>
              </div>

              {/* Main Description */}
              <Card className="p-8 mb-12 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
                <h2 className="text-3xl font-bold mb-6 text-destructive">O Que É Silber Wars?</h2>
                <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed space-y-4">
                  <p className="text-lg">
                    Silber Wars é nossa plataforma de competições e campeonatos gaming! Criamos eventos 
                    épicos que testam habilidades, estratégia e trabalho em equipe da nossa comunidade. 
                    Desde torneios relâmpago até campeonatos de longa duração, há sempre uma batalha esperando.
                  </p>
                  <p className="text-lg">
                    Nossa missão é criar vínculos fortes dentro da comunidade através da competição saudável 
                    e emocionante. Cada evento é cuidadosamente planejado para proporcionar momentos memoráveis, 
                    seja você um competidor hardcore ou um jogador casual procurando diversão.
                  </p>
                </div>
              </Card>

              {/* Upcoming Tournaments */}
              <section id="upcoming" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Próximos Campeonatos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
              </section>

              {/* Ongoing Tournaments */}
              <section id="ongoing" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Campeonatos em Andamento</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {ongoingTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
              </section>

              {/* Live Streams */}
              <section id="live" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Lives em Andamento</h2>
                <LiveSection streams={liveStreams} />
              </section>

              {/* Tournament History */}
              <section id="history" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Histórico de Competições</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {finishedTournaments.map(tournament => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                  ))}
                </div>
              </section>

              {/* Scores Section */}
              <section id="scores" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Pontuações</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                    <h3 className="text-xl font-bold mb-4 text-accent">🏆 Top 5 - Ranking Geral</h3>
                    <div className="space-y-3">
                      {[
                        { rank: 1, name: "Team Phoenix", points: 2450 },
                        { rank: 2, name: "Dragons Elite", points: 2280 },
                        { rank: 3, name: "Night Raiders", points: 2150 },
                        { rank: 4, name: "Thunder Squad", points: 2020 },
                        { rank: 5, name: "Shadow Wolves", points: 1890 }
                      ].map(team => (
                        <div key={team.rank} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="w-8 h-8 flex items-center justify-center">
                              {team.rank}
                            </Badge>
                            <span className="font-semibold text-foreground">{team.name}</span>
                          </div>
                          <span className="text-accent font-bold">{team.points} pts</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
                    <h3 className="text-xl font-bold mb-4 text-destructive">⚡ Pontuações em Tempo Real</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-card/50 rounded-lg border border-destructive/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">Team Alpha</span>
                          <Badge className="bg-destructive animate-pulse">AO VIVO</Badge>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Rodada 3/5</span>
                          <span className="text-accent font-bold">12-8</span>
                        </div>
                      </div>
                      <div className="p-4 bg-card/50 rounded-lg border border-destructive/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">Team Beta</span>
                          <Badge className="bg-destructive animate-pulse">AO VIVO</Badge>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Rodada 3/5</span>
                          <span className="text-accent font-bold">8-12</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* News Section */}
              <section id="news" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Últimas Notícias</h2>
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

export default SilberWars;
