
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-20 md:pb-32">
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
              International Student Job Search, Simplified
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Navigate Your <span className="gradient-text">Career Path</span> With Confidence
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ApplyPilot helps international students connect with U.S. startups, unlock hidden opportunities, 
              and streamline your job search with real-time market intelligence.
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
            
            <div className="bg-white rounded-2xl shadow-xl p-6 animate-float border border-gray-100 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-student-purple-500 to-student-pink-400 text-white p-2 rounded-lg">
                    🔥
                  </div>
                  <h3 className="font-semibold text-lg">Trending Roles</h3>
                </div>
                <span className="text-xs bg-student-teal-50 text-student-teal-600 px-2 py-1 rounded-full">Updated hourly</span>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-r from-student-purple-50 to-student-purple-100 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Frontend Developer</span>
                    <span className="text-student-pink-500 font-semibold">+42%</span>
                  </div>
                  <div className="text-sm text-gray-600">83 openings for OPT/H1B</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-student-teal-50 to-student-teal-100 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Data Analyst</span>
                    <span className="text-student-purple-500 font-semibold">+36%</span>
                  </div>
                  <div className="text-sm text-gray-600">52 openings for OPT/H1B</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-student-pink-50 to-student-pink-100 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Product Manager</span>
                    <span className="text-student-teal-500 font-semibold">+29%</span>
                  </div>
                  <div className="text-sm text-gray-600">41 openings for OPT/H1B</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="link" className="text-student-purple-600 font-medium">
                  View all trending roles →
                </Button>
              </div>
            </div>
            
            {/* Small floating elements */}
            <div className="absolute -right-10 top-1/3 animate-bounce-slight">
              <div className="bg-white shadow-lg rounded-lg p-3 border border-student-purple-100">
                <div className="text-xs font-medium text-student-purple-800">New Match!</div>
                <div className="text-xs text-gray-500">Frontend role at Airbnb</div>
              </div>
            </div>
            <div className="absolute -left-6 bottom-10 animate-bounce-slight" style={{ animationDelay: "0.8s" }}>
              <div className="bg-white shadow-lg rounded-lg p-3 border border-student-teal-100">
                <div className="text-xs font-medium text-student-teal-800">Resume Match</div>
                <div className="text-xs text-gray-500">95% compatibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
