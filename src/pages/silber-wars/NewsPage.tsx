import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const newsItems = [
    {
      id: "1",
      title: "Inscrições Abertas para Copa Silber de Valorant!",
      date: "22 Out 2025",
      category: "Inscrições",
      excerpt: "As inscrições para a Copa Silber de Valorant já estão abertas! Serão 32 times competindo por R$ 5.000 em prêmios."
    },
    {
      id: "2",
      title: "Team Phoenix Sagra-se Campeã da Silber League!",
      date: "15 Out 2025",
      category: "Resultado",
      excerpt: "Após 8 semanas de competição intensa, a Team Phoenix conquistou o título com vitória de 3-2 na final."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/silber-wars">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar
            </Button>
          </Link>
          <h1 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
            Notícias Silber Wars
          </h1>
          <NewsSection news={newsItems} />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
