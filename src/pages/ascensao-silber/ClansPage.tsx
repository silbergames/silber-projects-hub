import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Trophy, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ClansPage = () => {
  const clans = [
    {
      name: "Silber Elite - Valorant",
      game: "Valorant",
      members: 32,
      rank: "Top 10 Regional",
      description: "Clan competitivo focado em ranked e torneios. Treinos regulares e análise de replays.",
      schedule: "Treinos: Seg, Qua, Sex às 20h",
      requirements: ["Rank mínimo: Platina", "Discord obrigatório", "Compromisso com treinos"]
    },
    {
      name: "Silber Legends - LoL",
      game: "League of Legends",
      members: 28,
      rank: "Em formação",
      description: "Time em formação buscando jogadores de todas as lanes. Foco em melhorar juntos e competir.",
      schedule: "Treinos: Ter, Qui, Sáb às 19h",
      requirements: ["Rank mínimo: Ouro", "Boa comunicação", "Vontade de aprender"]
    },
    {
      name: "Silber Guardians - WoW",
      game: "World of Warcraft",
      members: 45,
      rank: "Guilda Ativa",
      description: "Guilda PvE focada em raids e conteúdo endgame. Ambiente acolhedor e organizado.",
      schedule: "Raids: Qua e Dom às 21h",
      requirements: ["Level máximo", "Item level adequado", "Conhecer mecânicas"]
    },
    {
      name: "Silber Warriors - Lost Ark",
      game: "Lost Ark",
      members: 38,
      rank: "Guilda Tier 2",
      description: "Guilda ativa em conteúdo PvE e GvG. Sistema de ajuda para progressão de membros.",
      schedule: "GvG: Sábados às 18h",
      requirements: ["Item level 1500+", "Participação ativa", "Discord"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/ascensao-silber">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Ascensão Silber
            </Button>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-6">
              <Shield className="w-16 h-16 text-cyan-400 glow-effect" />
            </div>
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Clans & Guildas Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Junte-se a outros jogadores e conquiste juntos
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {clans.map((clan, index) => (
              <Card key={index} className="p-8 bg-card border-border card-glow hover:border-cyan-400/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-foreground">{clan.name}</h2>
                      <Badge className="bg-cyan-500">{clan.rank}</Badge>
                      <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
                        {clan.game}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Users className="w-4 h-4" />
                      <span>{clan.members} membros</span>
                    </div>
                  </div>
                  <Button className="bg-cyan-500 hover:bg-cyan-600">
                    Solicitar Entrada
                  </Button>
                </div>

                <p className="text-foreground/80 mb-4">
                  {clan.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-accent mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">{clan.schedule}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Requisitos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {clan.requirements.map((req, idx) => (
                      <Badge key={idx} variant="outline" className="bg-card/50 text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Por Que Entrar em um Clan?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Trophy className="w-10 h-10 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Competição Organizada</h3>
                  <p className="text-foreground/70 text-sm">
                    Participe de torneios e campeonatos com um time estruturado e comprometido.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="w-10 h-10 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Comunidade Ativa</h3>
                  <p className="text-foreground/70 text-sm">
                    Conheça pessoas com os mesmos interesses e faça amizades duradouras.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-10 h-10 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Evolução Conjunta</h3>
                  <p className="text-foreground/70 text-sm">
                    Aprenda com jogadores experientes e melhore suas habilidades através de treinos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="w-10 h-10 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Eventos Exclusivos</h3>
                  <p className="text-foreground/70 text-sm">
                    Acesso a eventos internos, scrims e oportunidades especiais só para membros.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClansPage;
