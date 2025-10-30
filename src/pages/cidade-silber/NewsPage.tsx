import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const allNews = [
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
    },
    {
      id: "4",
      title: "Parceria com Artesãos Locais",
      date: "6 Out 2025",
      category: "Lançamento",
      excerpt: "Estamos trabalhando com artesãos da região para criar casas MDF personalizadas com temáticas exclusivas!"
    },
    {
      id: "5",
      title: "Novo Setor de Miniaturas de Filmes",
      date: "2 Out 2025",
      category: "Expansão",
      excerpt: "Inauguramos um setor dedicado a réplicas e miniaturas de cenários icônicos do cinema!"
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
            <Newspaper className="w-16 h-16 text-secondary mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 text-gradient-silver">
              Notícias da Cidade Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Novidades sobre colecionáveis, exposições e lançamentos
            </p>
          </div>

          <NewsSection news={allNews} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Fique Atualizado</h2>
            <p className="text-foreground/80 mb-6">
              Não perca nenhum lançamento, exposição especial ou novidade sobre colecionáveis 
              raros que chegam à Cidade Silber!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-secondary hover:bg-secondary/90">
                Newsletter Mensal
              </Button>
              <Button variant="outline">
                Seguir no Instagram
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
