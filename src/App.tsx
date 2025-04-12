
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider";
import Index from "./pages/Index";
import MarketIntelPage from "./pages/MarketIntelPage";
import JobHuntPage from "./pages/JobHuntPage";
import ReferralsPage from "./pages/ReferralsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/market-intel" element={<MarketIntelPage />} />
            <Route path="/job-hunt" element={<JobHuntPage />} />
            <Route path="/referrals" element={<ReferralsPage />} />
            <Route path="/international" element={<Navigate to="/job-hunt?international=true" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
