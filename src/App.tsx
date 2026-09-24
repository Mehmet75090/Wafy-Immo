import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import MetierPage from "./pages/MetierPage.tsx";
import PackDecouverte from "./pages/PackDecouverte.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import { CurrencyProvider } from "./contexts/CurrencyContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CurrencyProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agent-immobilier" element={<MetierPage metier="agent" />} />
            <Route path="/assureur" element={<MetierPage metier="insurer" />} />
            <Route path="/pack-decouverte" element={<PackDecouverte />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
