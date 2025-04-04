
import React from "react";
import { BarChart3, Award, Clock, Users, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-student-purple-500 p-2 bg-student-purple-100 rounded-xl" />,
      title: "Live Heatmap",
      description: "Track trending roles with real-time data on application volume and competition.",
      gradient: "from-student-purple-50 to-student-purple-100",
    },
    {
      icon: <Award className="h-12 w-12 text-student-pink-500 p-2 bg-student-pink-100 rounded-xl" />,
      title: "Resume Ranking",
      description: "See how your resume scores against other applicants and get tips to reach the top 10%.",
      gradient: "from-student-pink-50 to-student-pink-100",
    },
    {
      icon: <Clock className="h-12 w-12 text-student-teal-500 p-2 bg-student-teal-100 rounded-xl" />,
      title: "Hiring Velocity",
      description: "Discover companies with the fastest response times from application to offer.",
      gradient: "from-student-teal-50 to-student-teal-100",
    },
    {
      icon: <Users className="h-12 w-12 text-student-purple-500 p-2 bg-student-purple-100 rounded-xl" />,
      title: "Referral Network",
      description: "Map your connections to find referral opportunities at target companies.",
      gradient: "from-student-purple-50 to-student-purple-100",
    },
    {
      icon: <Bell className="h-12 w-12 text-student-pink-500 p-2 bg-student-pink-100 rounded-xl" />,
      title: "Low Competition Alerts",
      description: "Get notified about promising opportunities with fewer applicants.",
      gradient: "from-student-pink-50 to-student-pink-100",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-student-teal-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-student-purple-100 text-student-purple-600 font-medium text-sm mb-4">
            Power Your Job Search
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Market Intelligence for <span className="gradient-text">Smart Job Seekers</span>
          </h2>
          <p className="text-lg text-gray-600">
            ApplyPilot provides real-time insights to help you make strategic decisions
            about where to focus your job search efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <div className={`h-2 w-full bg-gradient-to-r ${feature.gradient}`}></div>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
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
