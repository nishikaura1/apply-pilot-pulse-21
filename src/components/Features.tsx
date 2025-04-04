
import React from "react";
import { BarChart3, Award, Clock, Users, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-pilot-blue-500" />,
      title: "Live Heatmap",
      description: "Track trending roles with real-time data on application volume and competition.",
    },
    {
      icon: <Award className="h-10 w-10 text-pilot-purple-500" />,
      title: "Resume Ranking",
      description: "See how your resume scores against other applicants and get tips to reach the top 10%.",
    },
    {
      icon: <Clock className="h-10 w-10 text-pilot-blue-500" />,
      title: "Hiring Velocity",
      description: "Discover companies with the fastest response times from application to offer.",
    },
    {
      icon: <Users className="h-10 w-10 text-pilot-purple-500" />,
      title: "Referral Network",
      description: "Map your connections to find referral opportunities at target companies.",
    },
    {
      icon: <Bell className="h-10 w-10 text-pilot-blue-500" />,
      title: "Low Competition Alerts",
      description: "Get notified about promising opportunities with fewer applicants.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Market Intelligence for Smart Job Seekers
          </h2>
          <p className="text-lg text-gray-600">
            ApplyPilot provides real-time insights to help you make strategic decisions
            about where to focus your job search efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
