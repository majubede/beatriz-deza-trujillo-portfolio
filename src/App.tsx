import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import Obra from "./pages/Obra";
import MujerX from "./pages/MujerX";
import Territorios from "./pages/Territorios";
import Autorretrato from "./pages/Autorretrato";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import SeriesDetail from "./pages/SeriesDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obra" element={<Obra />} />
            <Route path="/obra/:slug" element={<SeriesDetail />} />
            <Route path="/mujer-x" element={<MujerX />} />
            <Route path="/territorios" element={<Territorios />} />
            <Route path="/autorretrato" element={<Autorretrato />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
