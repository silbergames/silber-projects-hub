import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import { Card } from "@/components/ui/card";
import { Trophy, Swords, Clock, Users } from "lucide-react";

const SilberWars = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
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
              <p className="text-lg">
                Os jogos variam constantemente baseados no interesse da comunidade. De MOBAs a FPS, 
                de jogos de estratégia a battle royales - se a comunidade quer competir, nós criamos o evento!
              </p>
            </div>
          </Card>

          {/* Types of Competitions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient-primary">
              Tipos de Competições
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border card-glow">
                <div className="flex items-start gap-4">
                  <Clock className="w-12 h-12 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-destructive">Eventos Relâmpago</h3>
                    <p className="text-foreground/80 mb-3">
                      Competições intensas de curta duração. Perfeitas para testar reflexos e habilidades 
                      em situações de alta pressão.
                    </p>
                    <ul className="text-foreground/70 space-y-1 text-sm">
                      <li>• Duração: 1-4 horas</li>
                      <li>• Formato: Eliminação simples ou dupla</li>
                      <li>• Premiação instantânea</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border card-glow">
                <div className="flex items-start gap-4">
                  <Trophy className="w-12 h-12 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-destructive">Campeonatos de Temporada</h3>
                    <p className="text-foreground/80 mb-3">
                      Ligas extensas que testam consistência e dedicação ao longo de semanas ou meses.
                    </p>
                    <ul className="text-foreground/70 space-y-1 text-sm">
                      <li>• Duração: 4-12 semanas</li>
                      <li>• Formato: Liga com playoffs</li>
                      <li>• Rankings e estatísticas detalhadas</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border card-glow">
                <div className="flex items-start gap-4">
                  <Users className="w-12 h-12 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-destructive">Eventos Comunitários</h3>
                    <p className="text-foreground/80 mb-3">
                      Competições focadas em diversão e interação social, perfeitas para todos os níveis.
                    </p>
                    <ul className="text-foreground/70 space-y-1 text-sm">
                      <li>• Formatos divertidos e casuais</li>
                      <li>• Times mistos e aleatórios</li>
                      <li>• Foco em networking</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border card-glow">
                <div className="flex items-start gap-4">
                  <Swords className="w-12 h-12 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-destructive">Desafios Especiais</h3>
                    <p className="text-foreground/80 mb-3">
                      Competições temáticas com regras únicas e formatos inovadores.
                    </p>
                    <ul className="text-foreground/70 space-y-1 text-sm">
                      <li>• Regras e modos customizados</li>
                      <li>• Temas sazonais e eventos especiais</li>
                      <li>• Recompensas exclusivas</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* How it Works */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Como Funciona?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Inscrição</h3>
                  <p className="text-foreground/80">
                    Fique atento aos anúncios de novos eventos. Inscreva-se através dos nossos canais 
                    oficiais preenchendo um formulário simples.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Preparação</h3>
                  <p className="text-foreground/80">
                    Receba todas as informações sobre regras, horários e formatos. Treine com sua equipe 
                    e prepare suas estratégias.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Competição</h3>
                  <p className="text-foreground/80">
                    Dê o seu melhor! Todas as partidas são transmitidas e podem ser assistidas pela 
                    comunidade, criando uma atmosfera épica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Premiação</h3>
                  <p className="text-foreground/80">
                    Vencedores recebem prêmios exclusivos, reconhecimento na comunidade e seu nome 
                    eternizado no hall da fama Silber Wars!
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

export default SilberWars;
