
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-pilot-blue-300"
        >
          <circle cx="250" cy="250" r="250" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-pilot-purple-300"
        >
          <circle cx="200" cy="200" r="200" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-pilot-blue-50 text-pilot-blue-600 font-medium text-sm mb-6">
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
                <CheckCircle className="h-5 w-5 text-pilot-blue-500 mt-0.5" />
                <p className="text-gray-700">Find visa-friendly positions at innovative startups</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-pilot-blue-500 mt-0.5" />
                <p className="text-gray-700">Compare your resume against other applicants</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-pilot-blue-500 mt-0.5" />
                <p className="text-gray-700">Discover companies with fast response times</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-pilot-blue-500 mt-0.5" />
                <p className="text-gray-700">Access your network for valuable referrals</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="group">
                See Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-6 animate-float border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">🔥 Trending Roles</h3>
                <span className="text-xs text-gray-500">Updated hourly</span>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-r from-pilot-blue-50 to-pilot-blue-100 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Frontend Developer</span>
                    <span className="text-pilot-purple-500 font-semibold">+42%</span>
                  </div>
                  <div className="text-sm text-gray-600">83 openings for OPT/H1B</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-pilot-purple-50 to-pilot-purple-100 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Data Analyst</span>
                    <span className="text-pilot-blue-500 font-semibold">+36%</span>
                  </div>
                  <div className="text-sm text-gray-600">52 openings for OPT/H1B</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Product Manager</span>
                    <span className="text-gray-500 font-semibold">+29%</span>
                  </div>
                  <div className="text-sm text-gray-600">41 openings for OPT/H1B</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="link" className="text-pilot-blue-600">
                  View all trending roles →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
