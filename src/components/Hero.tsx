
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, BarChart, Users, FileText, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 md:pt-24 pb-20 md:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-15">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-student-purple-300"
        >
          <circle cx="300" cy="300" r="300" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-student-teal-300"
        >
          <circle cx="250" cy="250" r="250" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/4 -z-10 opacity-5">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-student-pink-300"
        >
          <circle cx="150" cy="150" r="150" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-student-teal-100 text-student-teal-600 font-medium text-sm mb-6">
              AI-Powered Career Platform for International Students
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Navigate Your <span className="gradient-text">Career Path</span> With Confidence
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ApplyPilot empowers international students navigating OPT, CPT, and H1B pathways 
              to effortlessly secure employment opportunities tailored to their unique profiles.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-student-purple-500 mt-0.5" />
                <p className="text-gray-700">Find visa-friendly positions at innovative startups</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-student-purple-500 mt-0.5" />
                <p className="text-gray-700">Compare your resume against other applicants</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-student-teal-500 mt-0.5" />
                <p className="text-gray-700">Discover companies with fast response times</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-student-teal-500 mt-0.5" />
                <p className="text-gray-700">Access your network for valuable referrals</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-primary text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="group button-secondary">
                See Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-student-purple-50 rounded-full blur-2xl opacity-60 z-0"></div>
            <div className="absolute -left-8 -bottom-6 w-32 h-32 bg-student-teal-50 rounded-full blur-2xl opacity-70 z-0"></div>
            
            <div className="glass-card p-6 animate-float relative z-10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="col-span-2">
                  <h3 className="font-bold text-xl mb-2 gradient-text">ApplyPilot's Key Features</h3>
                  <p className="text-sm text-gray-600">Our AI-driven platform stands apart with four core differentiators</p>
                </div>
                
                <div className="feature-card">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-student-purple-100 text-student-purple-600">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Precision AI Resume Builder</h4>
                      <p className="text-xs text-gray-500">Industry-optimized resumes</p>
                    </div>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-student-pink-100 text-student-pink-600">
                      <BarChart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Dynamic Job Heatmap</h4>
                      <p className="text-xs text-gray-500">Visual hiring trends</p>
                    </div>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-student-teal-100 text-student-teal-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Visa-Sponsorship Clarity</h4>
                      <p className="text-xs text-gray-500">OPT/CPT/H1B friendly filters</p>
                    </div>
                  </div>
                </div>
                
                <div className="feature-card">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-student-purple-100 text-student-purple-600">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Mentorship Marketplace</h4>
                      <p className="text-xs text-gray-500">Personalized industry guidance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-gradient-to-r from-student-purple-50 to-student-purple-100 rounded-lg mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">International Student Focus</span>
                  <span className="text-student-pink-500 font-semibold">Primary Market</span>
                </div>
                <div className="text-sm text-gray-600">Specialized tools for OPT, CPT & H1B candidates</div>
              </div>
              
              <Button variant="link" className="text-student-purple-600 font-medium w-full">
                Learn more about our platform →
              </Button>
            </div>
            
            {/* Small floating elements */}
            <div className="absolute -right-10 top-1/3 animate-bounce-slight">
              <div className="bg-card shadow-lg rounded-lg p-3 border border-student-purple-100">
                <div className="text-xs font-medium text-student-purple-800">87% Success Rate</div>
                <div className="text-xs text-gray-500">for international students</div>
              </div>
            </div>
            <div className="absolute -left-6 bottom-10 animate-bounce-slight" style={{ animationDelay: "0.8s" }}>
              <div className="bg-card shadow-lg rounded-lg p-3 border border-student-teal-100">
                <div className="text-xs font-medium text-student-teal-800">500+ Visa-Friendly</div>
                <div className="text-xs text-gray-500">companies in our database</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
