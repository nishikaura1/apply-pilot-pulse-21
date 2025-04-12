
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="border-b border-border/30 bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-foreground">ApplyPilot</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Academic Levels</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[400px] gap-3 p-4">
                    <Link to="/job-hunt?level=freshman" className="block p-3 space-y-1 hover:bg-accent rounded-md">
                      <div className="font-medium">Freshman</div>
                      <div className="text-sm text-muted-foreground">Entry-level opportunities for first-year students</div>
                    </Link>
                    <Link to="/job-hunt?level=sophomore" className="block p-3 space-y-1 hover:bg-accent rounded-md">
                      <div className="font-medium">Sophomore</div>
                      <div className="text-sm text-muted-foreground">Growing experiences for second-year students</div>
                    </Link>
                    <Link to="/job-hunt?level=junior" className="block p-3 space-y-1 hover:bg-accent rounded-md">
                      <div className="font-medium">Junior</div>
                      <div className="text-sm text-muted-foreground">Advanced opportunities for third-year students</div>
                    </Link>
                    <Link to="/job-hunt?level=senior" className="block p-3 space-y-1 hover:bg-accent rounded-md">
                      <div className="font-medium">Senior</div>
                      <div className="text-sm text-muted-foreground">Career launching positions for final-year students</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/market-intel" className={navigationMenuTriggerStyle()}>
                  Market Intel
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/job-hunt" className={navigationMenuTriggerStyle()}>
                  Job Hunt
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/referrals" className={navigationMenuTriggerStyle()}>
                  Referral Network
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/international" className={navigationMenuTriggerStyle()}>
                  International
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center space-x-3">
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
