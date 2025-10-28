import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <div className="space-y-4">
      {news.map((item) => (
        <Card key={item.id} className="p-5 bg-card border-border hover:border-accent/50 transition-all cursor-pointer card-glow">
          <div className="flex items-start justify-between mb-3">
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
              {item.category}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {item.date}
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-foreground/80 text-sm leading-relaxed">
            {item.excerpt}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default NewsSection;
