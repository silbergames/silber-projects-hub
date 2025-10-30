import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const NewsPage = () => {
  const [filter, setFilter] = useState("all");

  const allNews = [
    {
      id: "1",
      title: "Nova Área Comercial Inaugurada!",
      date: "15 Out 2025",
      category: "Expansão",
      excerpt: "A comunidade votou e aprovamos! O novo distrito comercial da Cidade de Lego foi inaugurado com 15 lojas únicas, todas construídas com base nas sugestões dos nossos seguidores."
    },
    {
      id: "2",
      title: "Sistema de Iluminação LED Instalado",
      date: "12 Out 2025",
      category: "Melhoria",
      excerpt: "Agora a cidade brilha! Instalamos um sistema completo de LEDs que ilumina as ruas e prédios, criando um visual ainda mais impressionante nas transmissões noturnas."
    },
    {
      id: "3",
      title: "Votação: Próxima Grande Construção",
      date: "10 Out 2025",
      category: "Votação",
      excerpt: "Participe da votação para decidir qual será nossa próxima grande construção: Estádio de Futebol, Parque de Diversões ou Aeroporto Internacional?"
    },
    {
      id: "4",
      title: "Recorde de Visualizações nas Lives!",
      date: "8 Out 2025",
      category: "Milestone",
      excerpt: "Alcançamos 500 espectadores simultâneos durante a construção do arranha-céu central! Obrigado a todos que acompanham."
    },
    {
      id: "5",
      title: "Novo Sistema de Tráfego Implementado",
      date: "5 Out 2025",
      category: "Melhoria",
      excerpt: "Instalamos um sistema de trânsito com semáforos funcionais e veículos LEGO em movimento automático pela cidade."
    },
    {
      id: "6",
      title: "Distrito Residencial Verde Completo",
      date: "1 Out 2025",
      category: "Expansão",
      excerpt: "O novo bairro residencial com foco em áreas verdes foi finalizado com parques, praças e jardins comunitários."
    }
  ];

  const filteredNews = filter === "all" 
    ? allNews 
    : allNews.filter(item => item.category === filter);

  const categories = ["all", "Expansão", "Melhoria", "Votação", "Milestone"];

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
            <Bell className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Últimas Notícias
            </h1>
            <p className="text-xl text-muted-foreground">
              Fique por dentro de todas as novidades da Cidade de Lego
            </p>
          </div>

          <Card className="p-6 mb-8 bg-card border-border">
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">Filtrar por:</span>
              {categories.map(cat => (
                <Badge
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setFilter(cat)}
                >
                  {cat === "all" ? "Todas" : cat}
                </Badge>
              ))}
            </div>
          </Card>

          <NewsSection news={filteredNews} />

          <Card className="p-8 mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Receba Notificações</h2>
            <p className="text-foreground/80 mb-6">
              Não perca nenhuma novidade! Siga-nos nas redes sociais e ative as notificações 
              para ser avisado sempre que houver atualizações importantes na Cidade de Lego.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-accent hover:bg-accent/90">
                Seguir no Instagram
              </Button>
              <Button variant="outline">
                Entrar no Discord
              </Button>
              <Button variant="outline">
                Inscrever no YouTube
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
