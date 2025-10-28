import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Radio, Users, ExternalLink } from "lucide-react";

interface LiveStream {
  id: string;
  title: string;
  viewers: number;
  platform: string;
  isLive: boolean;
  thumbnail?: string;
}

interface LiveSectionProps {
  streams: LiveStream[];
}

const LiveSection = ({ streams }: LiveSectionProps) => {
  return (
    <div className="space-y-4">
      {streams.map((stream) => (
        <Card key={stream.id} className="p-5 bg-gradient-to-br from-destructive/10 to-orange-500/10 border-2 border-destructive/30 card-glow">
          <div className="flex items-start justify-between mb-3">
            {stream.isLive && (
              <Badge className="bg-destructive text-white border-0 animate-pulse">
                <Radio className="w-3 h-3 mr-1" />
                AO VIVO
              </Badge>
            )}
            <Badge variant="outline" className="border-accent/30 text-accent">
              {stream.platform}
            </Badge>
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-3">
            {stream.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{stream.viewers.toLocaleString()} espectadores</span>
            </div>
            
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Assistir Agora
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      ))}
      
      {streams.length === 0 && (
        <Card className="p-8 bg-card border-border text-center">
          <p className="text-muted-foreground">
            Nenhuma live acontecendo no momento. Fique ligado!
          </p>
        </Card>
      )}
    </div>
  );
};

export default LiveSection;
