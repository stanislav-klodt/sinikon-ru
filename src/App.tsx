import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Company from "./pages/Company";
import Catalog from "./pages/Catalog";
import ProductLine from "./pages/ProductLine";
import Projectors from "./pages/Projectors";
import Distributors from "./pages/Distributors";
import Documents from "./pages/Documents";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contacts from "./pages/Contacts";
import Objects from "./pages/Objects";
import Vacancies from "./pages/Vacancies";
import Warranty from "./pages/Warranty";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const getRouterBasename = () => {
  // In Lovable preview the app is usually served at "/".
  // On GitHub Pages it is served under "/sinikon-ru".
  return window.location.pathname.startsWith("/sinikon-ru") ? "/sinikon-ru" : "";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getRouterBasename()}>
        <ScrollToTop />
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
          <Route path="/distributors" element={<Distributors />} />
          <Route path="/distributors/" element={<Distributors />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/" element={<Documents />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/news/:slug/" element={<NewsDetail />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/" element={<Contacts />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/objects/" element={<Objects />} />
          <Route path="/company/objects" element={<Objects />} />
          <Route path="/company/objects/" element={<Objects />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancies/" element={<Vacancies />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/warranty/" element={<Warranty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
