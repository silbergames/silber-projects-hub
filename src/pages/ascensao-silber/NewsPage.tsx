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
    },
    {
      id: "3",
      title: "Nova Guilda de Lost Ark em Formação",
      date: "20 Out 2025",
      category: "Guilda",
      excerpt: "Estamos formando uma nova guilda em Lost Ark! Vagas limitadas para jogadores comprometidos."
    },
    {
      id: "4",
      title: "Servidor Discord Atinge 500 Membros!",
      date: "15 Out 2025",
      category: "Milestone",
      excerpt: "Nossa comunidade no Discord ultrapassou 500 membros ativos! Obrigado a todos que fazem parte dessa família."
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
            <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Notícias Ascensão Silber
            </h1>
            <p className="text-xl text-muted-foreground">
              Novidades sobre clans, servidores e expansões
            </p>
          </div>

          <NewsSection news={newsItems} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Fique por Dentro</h2>
            <p className="text-foreground/80 mb-6">
              Acompanhe todas as novidades sobre novos servidores, conquistas dos clans, 
              eventos especiais e expansões para novos jogos!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                Entrar no Discord
              </Button>
              <Button variant="outline">
                Seguir nas Redes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
