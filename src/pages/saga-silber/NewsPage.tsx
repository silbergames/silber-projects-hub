import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const newsItems = [
    {
      id: "1",
      title: "Nova Saga Começando: Baldur's Gate 3!",
      date: "25 Out 2025",
      category: "Nova Saga",
      excerpt: "A comunidade votou e decidiu! Nossa próxima saga será em Baldur's Gate 3, com o objetivo de completar todas as conquistas e explorar todas as rotas de história possíveis!"
    },
    {
      id: "2",
      title: "Saga Elden Ring Atinge 50 Mil Views!",
      date: "20 Out 2025",
      category: "Milestone",
      excerpt: "Nossa saga de Elden Ring ultrapassou a marca de 50 mil visualizações! Obrigado a todos que acompanham essa jornada épica sem mortes."
    },
    {
      id: "3",
      title: "Votação: Próximo Desafio Indie",
      date: "18 Out 2025",
      category: "Votação",
      excerpt: "Qual jogo indie você quer ver na próxima saga? Vote entre Hades, Dead Cells ou Ori and the Will of the Wisps!"
    },
    {
      id: "4",
      title: "The Witcher 3 - 100% Completo!",
      date: "15 Out 2025",
      category: "Conquista",
      excerpt: "Após 48 episódios épicos, completamos todas as conquistas de The Witcher 3! Um marco incrível para a Saga Silber."
    },
    {
      id: "5",
      title: "Novo Formato: Sagas Simultâneas",
      date: "10 Out 2025",
      category: "Anúncio",
      excerpt: "A partir de agora, teremos múltiplas sagas acontecendo simultaneamente em diferentes categorias! Mais conteúdo para você."
    },
    {
      id: "6",
      title: "Especial de Halloween: Saga de Terror",
      date: "5 Out 2025",
      category: "Evento",
      excerpt: "Durante outubro, uma saga especial com jogos de terror! Resident Evil, Silent Hill e muito mais."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/saga-silber">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Voltar para Saga Silber
            </Button>
          </Link>

          <div className="text-center mb-12">
            <Newspaper className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Notícias Saga Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Acompanhe novidades, marcos e anúncios
            </p>
          </div>

          <NewsSection news={newsItems} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Fique Atualizado</h2>
            <p className="text-foreground/80 mb-6">
              Não perca nenhuma novidade sobre novas sagas, conquistas importantes e 
              eventos especiais da Saga Silber!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-accent hover:bg-accent/90">
                Inscrever no YouTube
              </Button>
              <Button variant="outline">
                Seguir na Twitch
              </Button>
              <Button variant="outline">
                Entrar no Discord
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
