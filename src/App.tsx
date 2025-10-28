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
          <Route path="/cidade-silber" element={<CidadeSilber />} />
          <Route path="/silber-wars" element={<SilberWars />} />
          <Route path="/saga-silber" element={<SagaSilber />} />
          <Route path="/ascensao-silber" element={<AscensaoSilber />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
