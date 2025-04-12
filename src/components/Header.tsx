import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="border-b border-border/30 bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-foreground">ApplyPilot</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/market-intel" className="text-foreground/80 hover:text-primary font-medium">
            Market Intel
          </Link>
          <Link to="/job-hunt" className="text-foreground/80 hover:text-primary font-medium">
            Job Hunt
          </Link>
          <Link to="/referrals" className="text-foreground/80 hover:text-primary font-medium">
            Referral Network
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button variant="ghost" className="hidden md:inline-flex text-foreground/80 hover:text-primary">
            Sign In
          </Button>
          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
