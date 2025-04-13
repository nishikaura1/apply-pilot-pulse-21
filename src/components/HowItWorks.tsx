
import React from "react";
import { ArrowRight, FileText, Search, CheckCircle, Users, Star, FilePenLine } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Build Your Profile",
      description: "Create your comprehensive profile with your expertise, visa requirements, and career goals"
    },
    {
      id: 2,
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Discover Opportunities",
      description: "Browse visa-sponsoring companies and positions tailored to your background"
    },
    {
      id: 3,
      icon: <FilePenLine className="h-8 w-8 text-primary" />,
      title: "Optimize Applications",
      description: "Use AI-powered tools to create industry-specific, ATS-readable resumes that get noticed"
    },
    {
      id: 4,
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Connect with Sponsors",
      description: "Network with companies that have a proven track record of visa sponsorships"
    },
    {
      id: 5,
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Land Your Dream Job",
      description: "Successfully navigate the job market with visa-sponsoring employers"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Path to <span className="gradient-text">Sponsored Employment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined approach helps all job seekers find sponsorship opportunities with confidence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/70 to-primary/20 h-16"></div>
              )}
              
              <div className="flex items-start gap-8 mb-12">
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-lg border border-primary/20 z-10">
                    <span className="text-lg font-bold text-primary">{step.id}</span>
                  </div>
                </div>
                
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-md flex-1 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-background/50 rounded-lg border border-primary/20">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/70 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
