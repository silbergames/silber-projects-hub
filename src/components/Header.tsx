import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Cidade de Lego", path: "/cidade-lego" },
    { name: "Cidade Silber", path: "/cidade-silber" },
    { name: "Silber Wars", path: "/silber-wars" },
    { name: "Saga Silber", path: "/saga-silber" },
    { name: "Ascensão Silber", path: "/ascensao-silber" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold text-gradient-primary">
              SILBER GAMES
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-3 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
