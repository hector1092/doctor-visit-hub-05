import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { useEffect, useRef } from "react";

const queryClient = new QueryClient();

const App = () => {
  const welcomeSoundPlayed = useRef(false);

  useEffect(() => {
    if (!welcomeSoundPlayed.current) {
      const welcomeSound = new Audio("/sounds/welcome.mp3");
      welcomeSound.volume = 0.3;
      welcomeSound.play()
        .then(() => {
          welcomeSoundPlayed.current = true;
        })
        .catch((error) => {
          console.error("Error playing welcome sound:", error);
        });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            {navItems.map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;