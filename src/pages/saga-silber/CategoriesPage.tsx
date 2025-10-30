import Header from "@/components/Header";
import GameplayCard from "@/components/GameplayCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CategoriesPage = () => {
  const gameplaysByCategory = {
    rpg: [
      {
        id: "1",
        game: "Elden Ring",
        title: "Saga da Jornada Sem Morte",
        category: "RPG",
        episodes: 24,
        views: 45200,
        status: "ongoing" as const
      },
      {
        id: "2",
        game: "The Witcher 3",
        title: "Todas as Conquistas - 100%",
        category: "RPG",
        episodes: 48,
        views: 89500,
        status: "completed" as const
      },
      {
        id: "3",
        game: "Baldur's Gate 3",
        title: "Todas as Rotas de História",
        category: "RPG",
        episodes: 12,
        views: 23400,
        status: "ongoing" as const
      }
    ],
    action: [
      {
        id: "4",
        game: "God of War Ragnarök",
        title: "Platina Completa + Valquírias",
        category: "Ação",
        episodes: 32,
        views: 67800,
        status: "completed" as const
      },
      {
        id: "5",
        game: "Devil May Cry 5",
        title: "Dante Must Die - No Damage",
        category: "Ação",
        episodes: 18,
        views: 34200,
        status: "ongoing" as const
      },
      {
        id: "6",
        game: "Sekiro: Shadows Die Twice",
        title: "Boss Rush - Sem Upgrades",
        category: "Ação",
        episodes: 22,
        views: 41300,
        status: "completed" as const
      }
    ],
    indie: [
      {
        id: "7",
        game: "Hollow Knight",
        title: "Steel Soul Mode - Todas as Endings",
        category: "Indie",
        episodes: 28,
        views: 52100,
        status: "ongoing" as const
      },
      {
        id: "8",
        game: "Celeste",
        title: "Todos os Lados B e C",
        category: "Indie",
        episodes: 16,
        views: 28700,
        status: "completed" as const
      },
      {
        id: "9",
        game: "Hades",
        title: "Todas as Armas - Heat 32",
        category: "Indie",
        episodes: 25,
        views: 38900,
        status: "ongoing" as const
      }
    ]
  };

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
            <Gamepad2 className="w-16 h-16 text-accent mx-auto mb-4 glow-effect" />
            <h1 className="text-5xl font-black mb-4 text-gradient-primary">
              Gameplays por Categoria
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore todas as sagas organizadas por gênero
            </p>
          </div>

          <Tabs defaultValue="rpg" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="rpg">RPG</TabsTrigger>
              <TabsTrigger value="action">Ação</TabsTrigger>
              <TabsTrigger value="indie">Indie</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rpg">
              <Card className="p-6 mb-6 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                <h3 className="text-2xl font-bold mb-3 text-accent">RPGs Épicos</h3>
                <p className="text-foreground/80">
                  Jogos de interpretação de papéis com mundos vastos, histórias profundas e desafios 
                  complexos. Cada saga RPG é uma jornada épica que pode levar meses para ser completada.
                </p>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                {gameplaysByCategory.rpg.map(gameplay => (
                  <GameplayCard key={gameplay.id} gameplay={gameplay} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="action">
              <Card className="p-6 mb-6 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30">
                <h3 className="text-2xl font-bold mb-3 text-destructive">Ação Intensa</h3>
                <p className="text-foreground/80">
                  Jogos que testam reflexos, timing e habilidade mecânica. Desafios extremos que 
                  exigem precisão absoluta e domínio completo dos controles.
                </p>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                {gameplaysByCategory.action.map(gameplay => (
                  <GameplayCard key={gameplay.id} gameplay={gameplay} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="indie">
              <Card className="p-6 mb-6 bg-gradient-to-br from-secondary/10 to-muted/20 border-2 border-secondary/30">
                <h3 className="text-2xl font-bold mb-3 text-secondary">Indie Gems</h3>
                <p className="text-foreground/80">
                  Jogos independentes que provam que não é preciso um grande orçamento para criar 
                  experiências inesquecíveis. Inovação, criatividade e desafios únicos.
                </p>
              </Card>
              <div className="grid md:grid-cols-2 gap-6">
                {gameplaysByCategory.indie.map(gameplay => (
                  <GameplayCard key={gameplay.id} gameplay={gameplay} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="p-8 mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
            <h2 className="text-2xl font-bold mb-4 text-accent">Sobre as Categorias</h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                Organizamos nossas sagas em categorias para facilitar sua navegação. Cada categoria 
                tem seu próprio estilo de desafio e narrativa:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>RPG:</strong> Foco em exploração, história e progressão de personagem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Ação:</strong> Ênfase em combate, reflexos e domínio mecânico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>Indie:</strong> Experiências únicas e criativas de desenvolvedores independentes</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
