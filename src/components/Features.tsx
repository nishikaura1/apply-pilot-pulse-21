
import React from "react";
import { BarChart3, Award, Clock, Users, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-student-purple-400 p-2 bg-student-purple-950/50 rounded-xl" />,
      title: "Live Heatmap",
      description: "Track trending roles with real-time data on application volume and competition.",
      gradient: "from-blue-900/50 to-student-purple-900/50",
    },
    {
      icon: <Award className="h-12 w-12 text-student-pink-400 p-2 bg-student-pink-950/50 rounded-xl" />,
      title: "Resume Ranking",
      description: "See how your resume scores against other applicants and get tips to reach the top 10%.",
      gradient: "from-student-pink-900/50 to-student-purple-900/50",
    },
    {
      icon: <Clock className="h-12 w-12 text-student-teal-400 p-2 bg-student-teal-950/50 rounded-xl" />,
      title: "Hiring Velocity",
      description: "Discover companies with the fastest response times from application to offer.",
      gradient: "from-blue-900/50 to-student-teal-900/50",
    },
    {
      icon: <Users className="h-12 w-12 text-student-purple-400 p-2 bg-student-purple-950/50 rounded-xl" />,
      title: "Referral Network",
      description: "Map your connections to find referral opportunities at target companies.",
      gradient: "from-blue-900/50 to-student-purple-900/50",
    },
    {
      icon: <Bell className="h-12 w-12 text-student-pink-400 p-2 bg-student-pink-950/50 rounded-xl" />,
      title: "Low Competition Alerts",
      description: "Get notified about promising opportunities with fewer applicants.",
      gradient: "from-student-pink-900/50 to-student-purple-900/50",
    },
  ];

  return (
    <div className="dark-gradient-bg py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-950 text-blue-300 font-medium text-sm mb-4 border border-blue-800">
            Power Your Job Search
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Market Intelligence for <span className="gradient-text">Smart Job Seekers</span>
          </h2>
          <p className="text-lg text-blue-200">
            ApplyPilot provides real-time insights to help you make strategic decisions
            about where to focus your job search efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 glow bg-blue-950/50`}>
              <div className={`h-2 w-full bg-gradient-to-r ${feature.gradient}`}></div>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-blue-200">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
