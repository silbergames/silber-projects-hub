import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Gamer123",
      text: "Projeto incrível! Mal posso esperar para participar!",
      date: "Há 2 dias",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) {
      toast.error("Por favor, preencha seu nome e comentário");
      return;
    }

    const comment: Comment = {
      id: Date.now(),
      author: authorName,
      text: newComment,
      date: "Agora mesmo",
    };

    setComments([comment, ...comments]);
    setNewComment("");
    toast.success("Comentário enviado!");
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="text-accent" size={28} />
        <h3 className="text-2xl font-bold text-gradient-primary">Comentários da Comunidade</h3>
      </div>

      <Card className="p-6 bg-card border-border mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Textarea
            placeholder="Compartilhe sua opinião sobre este projeto..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px] bg-background border-border text-foreground"
          />
          <Button type="submit" className="bg-primary hover:bg-accent">
            <Send size={16} className="mr-2" />
            Enviar Comentário
          </Button>
        </form>
      </Card>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4 bg-card border-border">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-accent">{comment.author}</span>
              <span className="text-sm text-muted-foreground">{comment.date}</span>
            </div>
            <p className="text-foreground">{comment.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
