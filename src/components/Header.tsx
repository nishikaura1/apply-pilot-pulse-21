
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
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
                <Link to="/market-intel" className={navigationMenuTriggerStyle()}>
                  Market Intel
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/jobhunt" className={navigationMenuTriggerStyle()}>
                  Job Hunt
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/referrals" className={navigationMenuTriggerStyle()}>
                  Referral Network
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
