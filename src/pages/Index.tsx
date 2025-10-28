import Header from "@/components/Header";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Gamepad2, Trophy, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <Gamepad2 className="w-20 h-20 text-accent glow-effect mx-auto" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient-primary leading-tight">
            SILBER GAMES
          </h1>
          <p className="text-xl md:text-2xl text-gradient-silver font-semibold mb-8 max-w-3xl mx-auto">
            Bem-vindo à nossa comunidade gaming! Explore nossos projetos inovadores e faça parte dessa jornada épica.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-primary hover:bg-accent text-lg px-8 py-6 glow-effect">
              <Sparkles className="mr-2" size={20} />
              Explorar Projetos
            </Button>
            <Button variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/20 text-lg px-8 py-6">
              <Users className="mr-2" size={20} />
              Junte-se à Comunidade
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient-primary">Nossos Projetos</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Na Silber Games, acreditamos no poder da comunidade e da criatividade. Nossos projetos são 
              experiências únicas onde você não é apenas um espectador, mas um participante ativo que molda 
              e influencia cada aspecto da nossa jornada gaming. Explore mundos construídos tijolo por tijolo, 
              compita em torneios épicos, participe de aventuras narrativas e ajude a construir nossa presença 
              em diversos universos digitais.
            </p>
          </div>

          {/* Carousel */}
          <div className="mb-20">
            <ProjectCarousel />
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Cidade de Lego"
              description="Uma cidade de LEGO totalmente autoral e interativa. Nossa comunidade tem controle total sobre o desenvolvimento, com todas as mudanças noticiadas e documentadas em tempo real."
              link="/cidade-lego"
              gradient="bg-gradient-to-br from-primary to-accent"
            />
            
            <ProjectCard
              title="Cidade Silber"
              description="Casas colecionáveis de MDF e exposição de diversos itens como Hot Wheels, trens de controle remoto e muito mais. Um mundo físico em constante expansão."
              link="/cidade-silber"
              gradient="bg-gradient-to-br from-secondary to-muted"
            />
            
            <ProjectCard
              title="Silber Wars"
              description="Competições e campeonatos épicos! Eventos de curta e longa duração para fortalecer vínculos na comunidade e descobrir quem são os verdadeiros campeões."
              link="/silber-wars"
              gradient="bg-gradient-to-br from-destructive to-orange-500"
            />
            
            <ProjectCard
              title="Saga Silber"
              description="Conteúdo de gameplay com objetivos desafiadores. Criamos histórias memoráveis em diversos jogos escolhidos por vocês, deixando nossa marca em cada aventura."
              link="/saga-silber"
              gradient="bg-gradient-to-br from-accent to-primary"
            />
            
            <ProjectCard
              title="Ascensão Silber"
              description="Nossa presença em múltiplos games! Criamos ambientes, salas, clans e guildas para estabelecer a identidade Silber em diversos universos digitais."
              link="/ascensao-silber"
              gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Trophy className="w-16 h-16 text-accent mx-auto mb-6 glow-effect" />
          <h2 className="text-4xl font-bold mb-6 text-gradient-primary">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Junte-se à nossa comunidade e faça parte de algo extraordinário. 
            Cada projeto é uma nova aventura esperando por você!
          </p>
          <Button className="bg-accent hover:bg-primary text-lg px-10 py-6 glow-effect">
            Explore Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
