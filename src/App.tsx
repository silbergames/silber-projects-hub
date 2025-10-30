import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CidadeLego from "./pages/CidadeLego";
import CidadeSilber from "./pages/CidadeSilber";
import SilberWars from "./pages/SilberWars";
import SagaSilber from "./pages/SagaSilber";
import AscensaoSilber from "./pages/AscensaoSilber";

// Cidade Lego sub-pages
import CidadeLegoVideo from "./pages/cidade-lego/VideoPage";
import CidadeLegoNews from "./pages/cidade-lego/NewsPage";
import CidadeLegoLive from "./pages/cidade-lego/LivePage";
import CidadeLegoVoting from "./pages/cidade-lego/VotingPage";

// Cidade Silber sub-pages
import CidadeSilberVideo from "./pages/cidade-silber/VideoPage";
import CidadeSilberNews from "./pages/cidade-silber/NewsPage";
import CidadeSilberLive from "./pages/cidade-silber/LivePage";
import CidadeSilberVoting from "./pages/cidade-silber/VotingPage";

// Silber Wars sub-pages
import SilberWarsUpcoming from "./pages/silber-wars/UpcomingPage";
import SilberWarsOngoing from "./pages/silber-wars/OngoingPage";
import SilberWarsLive from "./pages/silber-wars/LivePage";
import SilberWarsHistory from "./pages/silber-wars/HistoryPage";
import SilberWarsScores from "./pages/silber-wars/ScoresPage";
import SilberWarsNews from "./pages/silber-wars/NewsPage";

// Saga Silber sub-pages
import SagaSilberCategories from "./pages/saga-silber/CategoriesPage";
import SagaSilberLive from "./pages/saga-silber/LivePage";
import SagaSilberNews from "./pages/saga-silber/NewsPage";

// Ascensão Silber sub-pages
import AscensaoSilberAvailable from "./pages/ascensao-silber/AvailablePage";
import AscensaoSilberClans from "./pages/ascensao-silber/ClansPage";
import AscensaoSilberLive from "./pages/ascensao-silber/LivePage";
import AscensaoSilberNews from "./pages/ascensao-silber/NewsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cidade-lego" element={<CidadeLego />} />
          <Route path="/cidade-lego/video" element={<CidadeLegoVideo />} />
          <Route path="/cidade-lego/news" element={<CidadeLegoNews />} />
          <Route path="/cidade-lego/live" element={<CidadeLegoLive />} />
          <Route path="/cidade-lego/voting" element={<CidadeLegoVoting />} />
          
          <Route path="/cidade-silber" element={<CidadeSilber />} />
          <Route path="/cidade-silber/video" element={<CidadeSilberVideo />} />
          <Route path="/cidade-silber/news" element={<CidadeSilberNews />} />
          <Route path="/cidade-silber/live" element={<CidadeSilberLive />} />
          <Route path="/cidade-silber/voting" element={<CidadeSilberVoting />} />
          
          <Route path="/silber-wars" element={<SilberWars />} />
          <Route path="/silber-wars/upcoming" element={<SilberWarsUpcoming />} />
          <Route path="/silber-wars/ongoing" element={<SilberWarsOngoing />} />
          <Route path="/silber-wars/live" element={<SilberWarsLive />} />
          <Route path="/silber-wars/history" element={<SilberWarsHistory />} />
          <Route path="/silber-wars/scores" element={<SilberWarsScores />} />
          <Route path="/silber-wars/news" element={<SilberWarsNews />} />
          
          <Route path="/saga-silber" element={<SagaSilber />} />
          <Route path="/saga-silber/categories" element={<SagaSilberCategories />} />
          <Route path="/saga-silber/live" element={<SagaSilberLive />} />
          <Route path="/saga-silber/news" element={<SagaSilberNews />} />
          
          <Route path="/ascensao-silber" element={<AscensaoSilber />} />
          <Route path="/ascensao-silber/available" element={<AscensaoSilberAvailable />} />
          <Route path="/ascensao-silber/clans" element={<AscensaoSilberClans />} />
          <Route path="/ascensao-silber/live" element={<AscensaoSilberLive />} />
          <Route path="/ascensao-silber/news" element={<AscensaoSilberNews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
