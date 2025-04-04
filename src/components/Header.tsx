
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-blue-900/30 bg-blue-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">ApplyPilot</span>
            <span className="ml-1 bg-student-purple-900 text-student-purple-200 text-xs px-2 py-0.5 rounded-full font-semibold">
              Pulse
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-blue-100 hover:text-white font-medium">
            Home
          </Link>
          <Link to="/market-intel" className="text-blue-100 hover:text-white font-medium">
            Market Intel
          </Link>
          <Link to="/job-hunt" className="text-blue-100 hover:text-white font-medium">
            Job Hunt
          </Link>
          <Link to="/referrals" className="text-blue-100 hover:text-white font-medium">
            Referral Network
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hidden md:inline-flex text-blue-100 hover:text-white hover:bg-blue-800/50">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-student-purple-500 to-blue-500 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
