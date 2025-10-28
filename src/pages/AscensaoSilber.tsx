import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import { Card } from "@/components/ui/card";
import { Crown, Shield, Swords, Globe, Trophy } from "lucide-react";

const AscensaoSilber = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
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

          {/* Main Description */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">O Que É Ascensão Silber?</h2>
            <div className="prose prose-invert max-w-none text-foreground/90 leading-relaxed space-y-4">
              <p className="text-lg">
                Ascensão Silber é nosso projeto mais ambicioso: estabelecer a presença da comunidade 
                Silber Games em múltiplos universos gaming. Criamos espaços, clans, guildas e comunidades 
                em diversos jogos, garantindo que onde quer que nossos membros joguem, eles encontrem 
                um lar com a nossa identidade.
              </p>
              <p className="text-lg">
                O projeto se divide em três pilares principais: Silber Room (criação de ambientes e 
                espaços personalizados), Clans (formação de facções e grupos competitivos) e presença 
                multiplataforma. Nosso objetivo é criar uma rede interconectada de comunidades gaming 
                que compartilham os mesmos valores e identidade visual.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Cada servidor, sala ou clan criado segue nossa estética única de roxo e prata, mantendo 
                a identidade Silber Games viva em cada jogo. Não importa se você joga MMORPGs, jogos de 
                tiro, estratégia ou sandboxes - há um espaço Silber esperando por você.
              </p>
            </div>
          </Card>

          {/* Main Pillars */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient-primary">
              Pilares da Ascensão
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/40 card-glow">
                <div className="text-center mb-4">
                  <Globe className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-accent">Silber Room</h3>
                </div>
                <p className="text-foreground/80 text-center">
                  Ambientes customizados, quartos temáticos e servers dedicados com a identidade 
                  visual Silber em diversos jogos e plataformas.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-500/40 card-glow">
                <div className="text-center mb-4">
                  <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-cyan-400">Clans & Guildas</h3>
                </div>
                <p className="text-foreground/80 text-center">
                  Facções competitivas e guildas cooperativas em MMOs, jogos de tiro e estratégia, 
                  unindo jogadores sob a bandeira Silber.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/20 to-muted/20 border-2 border-secondary/40 card-glow">
                <div className="text-center mb-4">
                  <Swords className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary">Presença Global</h3>
                </div>
                <p className="text-foreground/80 text-center">
                  Expansão contínua para novos jogos e plataformas, garantindo que a comunidade 
                  Silber esteja presente onde nossos membros jogam.
                </p>
              </Card>
            </div>
          </div>

          {/* Silber Room Details */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-3xl font-bold mb-6 text-gradient-primary">Silber Room: Nossos Espaços</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Servers Customizados
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Criamos e mantemos servers dedicados em jogos como Minecraft, Rust, ARK e outros 
                  survival/sandbox games. Cada server é cuidadosamente customizado com mods, plugins 
                  e builds que refletem nossa identidade única.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-background/50 p-3 rounded-lg">
                    <span className="text-accent font-semibold">🏗️ Builds Exclusivas:</span>
                    <span className="text-foreground/70"> Construções épicas em nossos servers</span>
                  </div>
                  <div className="bg-background/50 p-3 rounded-lg">
                    <span className="text-accent font-semibold">⚙️ Mods Customizados:</span>
                    <span className="text-foreground/70"> Experiência única de gameplay</span>
                  </div>
                  <div className="bg-background/50 p-3 rounded-lg">
                    <span className="text-accent font-semibold">🎨 Estética Silber:</span>
                    <span className="text-foreground/70"> Roxo e prata em cada detalhe</span>
                  </div>
                  <div className="bg-background/50 p-3 rounded-lg">
                    <span className="text-accent font-semibold">👥 Comunidade Ativa:</span>
                    <span className="text-foreground/70"> Eventos regulares e interação</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                  <Crown className="w-6 h-6" />
                  Salas VIP e Lounges
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Em jogos sociais e plataformas como VRChat, Discord e outros, mantemos salas 
                  temáticas Silber onde a comunidade pode se reunir, socializar e relaxar em um 
                  ambiente que é verdadeiramente nosso.
                </p>
              </div>
            </div>
          </Card>

          {/* Clans Details */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Clans: Nossa Força Competitiva</h2>
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                Os clans e guildas Silber são nossa força competitiva em jogos multiplayer. 
                Mantemos presença ativa em:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-cyan-400 mb-2">🎮 FPS & Battle Royale</h4>
                  <p className="text-sm text-foreground/70">
                    Teams competitivos em jogos como Valorant, CS:GO, Apex Legends e Fortnite
                  </p>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-cyan-400 mb-2">⚔️ MMORPGs</h4>
                  <p className="text-sm text-foreground/70">
                    Guildas poderosas em WoW, FFXIV, Lost Ark e outros MMOs populares
                  </p>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-cyan-400 mb-2">🛡️ MOBAs</h4>
                  <p className="text-sm text-foreground/70">
                    Times ranqueados em League of Legends, Dota 2 e Mobile Legends
                  </p>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-cyan-400 mb-2">🎯 Estratégia</h4>
                  <p className="text-sm text-foreground/70">
                    Alianças em jogos de estratégia como Clash of Clans e Age of Empires
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-6 rounded-lg border border-cyan-500/30">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-cyan-400" />
                  Benefícios de Fazer Parte
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>✓ Treinamentos regulares com jogadores experientes</li>
                  <li>✓ Participação em torneios oficiais representando Silber</li>
                  <li>✓ Acesso a estratégias e táticas exclusivas do clan</li>
                  <li>✓ Network com outros gamers dedicados</li>
                  <li>✓ Suporte e recursos para melhorar seu gameplay</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Join Section */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Como Participar da Ascensão</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Escolha Seu Jogo</h3>
                  <p className="text-foreground/80">
                    Veja a lista de jogos onde temos presença ativa e escolha aquele que mais combina 
                    com seu estilo de jogo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Conecte-se</h3>
                  <p className="text-foreground/80">
                    Entre no nosso Discord e procure o canal específico do jogo. Lá você encontrará 
                    informações sobre como participar do clan ou acessar nossos servers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Seja Parte da História</h3>
                  <p className="text-foreground/80">
                    Participe ativamente, ajude a expandir nossa presença e faça parte da ascensão 
                    Silber nos universos gaming!
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

export default AscensaoSilber;
