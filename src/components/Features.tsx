
import React from "react";
import { BarChart3, Award, Clock, Users, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-primary p-2 rounded-xl" />,
      title: "Live Heatmap",
      description: "Track trending roles in real-time",
      hoverDescription: "Visualize application volume and competition for roles across industries",
      gradient: "from-primary/20 to-primary/5",
      path: "/market-intel?tab=heatmap"
    },
    {
      icon: <Award className="h-12 w-12 text-accent p-2 rounded-xl" />,
      title: "Resume Ranking",
      description: "Get to the top 10%",
      hoverDescription: "See how your resume scores against other applicants with AI-powered analysis",
      gradient: "from-accent/20 to-accent/5",
      path: "/market-intel?tab=resume"
    },
    {
      icon: <Clock className="h-12 w-12 text-secondary p-2 rounded-xl" />,
      title: "Hiring Velocity",
      description: "Find fast-responding companies",
      hoverDescription: "Discover employers with the quickest application-to-offer timelines",
      gradient: "from-secondary/20 to-secondary/5",
      path: "/market-intel?tab=hiring"
    },
    {
      icon: <Users className="h-12 w-12 text-primary p-2 rounded-xl" />,
      title: "Referral Network",
      description: "Connect to opportunities",
      hoverDescription: "Map your professional connections to find referrals at target companies",
      gradient: "from-primary/20 to-primary/5",
      path: "/referrals"
    },
    {
      icon: <Bell className="h-12 w-12 text-accent p-2 rounded-xl" />,
      title: "Low Competition Alerts",
      description: "Get notified of opportunities",
      hoverDescription: "Receive alerts about promising positions with fewer applicants",
      gradient: "from-accent/20 to-accent/5",
      path: "/market-intel?tab=alerts"
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Market Intelligence for <span className="gradient-text">Smart Job Seekers</span>
          </h2>
          <p className="text-foreground/80">
            Real-time insights to focus your job search where it matters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card 
                  className={`overflow-hidden border border-border/30 bg-gradient-to-br ${feature.gradient} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-[220px]`}
                  onClick={() => handleCardClick(feature.path)}
                >
                  <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-accent/30"></div>
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                    <div className="mb-4 bg-background/10 p-3 rounded-full">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4 bg-card border border-border/50">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-foreground/80">{feature.hoverDescription}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
