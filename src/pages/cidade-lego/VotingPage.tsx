import Header from "@/components/Header";
import VotingSection from "@/components/VotingSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Vote, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const VotingPage = () => {
  const activeVotings = [
    {
      id: "1",
      title: "Qual deve ser nossa próxima grande construção?",
      description: "Vote e ajude a decidir o futuro da Cidade de Lego!",
      endDate: "7 dias",
      status: "active" as const,
      totalVotes: 1250,
      options: [
        { id: "1", text: "Estádio de Futebol", votes: 520, percentage: 41.6 },
        { id: "2", text: "Parque de Diversões", votes: 450, percentage: 36 },
        { id: "3", text: "Aeroporto Internacional", votes: 280, percentage: 22.4 }
      ]
    },
    {
      id: "2",
      title: "Cor do próximo distrito residencial?",
      description: "Escolha a paleta de cores predominante",
      endDate: "3 dias",
      status: "active" as const,
      totalVotes: 890,
      options: [
        { id: "1", text: "Tons de azul e branco", votes: 380, percentage: 42.7 },
        { id: "2", text: "Vermelho e amarelo", votes: 310, percentage: 34.8 },
        { id: "3", text: "Verde e marrom", votes: 200, percentage: 22.5 }
      ]
    }
  ];

  const closedVotings = [
    {
      id: "3",
      title: "Tema do sistema de iluminação noturna",
      winner: "Cores RGB programáveis",
      totalVotes: 1580,
      endedDate: "2 dias atrás"
    },
    {
      id: "4",
      title: "Primeira área a ser expandida",
      winner: "Distrito Comercial",
      totalVotes: 2100,
      endedDate: "1 semana atrás"
    },
    {
      id: "5",
      title: "Estilo arquitetônico do centro histórico",
      winner: "Europeu Clássico",
      totalVotes: 1340,
      endedDate: "2 semanas atrás"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/cidade-lego">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Cidade de Lego
            </Button>
          </Link>

          <div className="text-center mb-12">
            <Vote className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Votações da Comunidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Sua opinião molda o futuro da Cidade de Lego
            </p>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-accent">ATIVAS</Badge>
              <h2 className="text-3xl font-bold text-gradient-primary">Votações em Andamento</h2>
            </div>
            <VotingSection votings={activeVotings} />
          </section>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border card-glow">
              <Vote className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Voto Democrático</h3>
              <p className="text-foreground/70 text-sm">
                Cada membro tem direito a um voto. Todos contam igualmente!
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Prazos Claros</h3>
              <p className="text-foreground/70 text-sm">
                Cada votação tem um prazo definido para garantir agilidade nas decisões
              </p>
            </Card>

            <Card className="p-6 bg-card border-border card-glow">
              <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">Transparência Total</h3>
              <p className="text-foreground/70 text-sm">
                Resultados em tempo real e implementação garantida da opção vencedora
              </p>
            </Card>
          </div>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-gradient-primary">Votações Encerradas</h2>
            </div>
            <div className="space-y-4">
              {closedVotings.map(voting => (
                <Card key={voting.id} className="p-6 bg-card/50 border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{voting.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                          Vencedor: {voting.winner}
                        </Badge>
                        <span className="text-muted-foreground">{voting.totalVotes} votos</span>
                        <span className="text-muted-foreground">Encerrada {voting.endedDate}</span>
                      </div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Como Funciona o Sistema de Votação</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Proposta Criada</h4>
                  <p className="text-foreground/70 text-sm">
                    Identificamos decisões importantes que afetam o desenvolvimento da cidade 
                    e criamos votações para a comunidade decidir.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Período de Votação</h4>
                  <p className="text-foreground/70 text-sm">
                    A votação fica aberta por um período determinado (geralmente 3-7 dias) para 
                    todos os membros da comunidade participarem.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Contagem e Anúncio</h4>
                  <p className="text-foreground/70 text-sm">
                    Ao final do prazo, os votos são contados e o resultado é anunciado nas 
                    redes sociais e aqui no site.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Implementação</h4>
                  <p className="text-foreground/70 text-sm">
                    A opção vencedora é implementada na cidade! Documentamos todo o processo 
                    para você acompanhar sua decisão tomando forma.
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

export default VotingPage;
