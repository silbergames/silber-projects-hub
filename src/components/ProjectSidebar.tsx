import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarLink {
  id: string;
  label: string;
  icon?: string;
  href?: string; // URL opcional para navegação
}

interface ProjectSidebarProps {
  links: SidebarLink[];
  activeSection?: string;
  onNavigate: (id: string) => void;
}

const ProjectSidebar = ({ links, activeSection, onNavigate }: ProjectSidebarProps) => {
  const location = useLocation();
  
  return (
    <div className="sticky top-24 space-y-2">
      <h3 className="text-lg font-bold text-foreground mb-4 px-3">Navegação Rápida</h3>
      {links.map((link) => {
        // Se o link tem href, usa Link do React Router, senão usa scroll
        if (link.href) {
          const isActive = location.pathname === link.href;
          return (
            <Link key={link.id} to={link.href}>
              <Button
                variant={isActive ? "default" : "outline"}
                className={cn(
                  "w-full justify-start text-left transition-all",
                  isActive && "bg-accent text-white border-accent"
                )}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </Button>
            </Link>
          );
        }
        
        return (
          <Button
            key={link.id}
            variant={activeSection === link.id ? "default" : "outline"}
            className={cn(
              "w-full justify-start text-left transition-all",
              activeSection === link.id && "bg-accent text-white border-accent"
            )}
            onClick={() => onNavigate(link.id)}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ProjectSidebar;
