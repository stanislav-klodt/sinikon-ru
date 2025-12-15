import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Company from "./pages/Company";
import Catalog from "./pages/Catalog";
import ProductLine from "./pages/ProductLine";
import Projectors from "./pages/Projectors";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/" element={<Company />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/catalog/:slug" element={<ProductLine />} />
          <Route path="/catalog/:slug/" element={<ProductLine />} />
          <Route path="/projectors" element={<Projectors />} />
          <Route path="/projectors/" element={<Projectors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
