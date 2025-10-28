import { Card } from "@/components/ui/card";

interface VideoPlayerProps {
  title: string;
  description?: string;
  videoUrl?: string;
}

const VideoPlayer = ({ title, description, videoUrl }: VideoPlayerProps) => {
  return (
    <Card className="p-6 bg-card border-border overflow-hidden">
      <h3 className="text-2xl font-bold text-accent mb-4">{title}</h3>
      {description && (
        <p className="text-foreground/80 mb-4">{description}</p>
      )}
      
      <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
        {videoUrl ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-8 border-l-accent border-y-6 border-y-transparent ml-2" />
              </div>
              <p className="text-foreground/60 text-lg">
                Vídeo em breve disponível
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default VideoPlayer;
