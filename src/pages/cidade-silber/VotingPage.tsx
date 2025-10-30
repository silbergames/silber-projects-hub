import Header from "@/components/Header";
import VotingSection from "@/components/VotingSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Vote } from "lucide-react";
import { Link } from "react-router-dom";

const VotingPage = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/cidade-silber">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Cidade Silber
            </Button>
          </Link>

          <div className="text-center mb-12">
            <Vote className="w-16 h-16 text-secondary mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 text-gradient-silver">
              Votações da Comunidade
            </h1>
            <p className="text-xl text-muted-foreground">
              Ajude a definir exposições e novos colecionáveis
            </p>
          </div>

          <VotingSection votings={votings} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Participe das Decisões</h2>
            <p className="text-foreground/80">
              A comunidade tem papel fundamental na Cidade Silber! Regularmente abrimos votações 
              para decidir temas de exposições, novos colecionáveis a serem adquiridos e até mesmo 
              designs de casas MDF personalizadas que serão produzidas.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
