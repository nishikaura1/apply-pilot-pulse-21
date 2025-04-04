
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, User, Building, FileCheck, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* International Student Focus */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Built Specifically For <span className="gradient-text">International Students</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Navigate the unique challenges of finding employment in the United States as an international student.
                  We've tailored our tools to help you overcome visa barriers and connect with opportunities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="bg-pilot-blue-100 rounded-full p-2">
                      <Globe className="h-5 w-5 text-pilot-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Visa Filters</h4>
                      <p className="text-sm text-gray-600">Find OPT/CPT friendly positions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pilot-purple-100 rounded-full p-2">
                      <Building className="h-5 w-5 text-pilot-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sponsor Insights</h4>
                      <p className="text-sm text-gray-600">Companies with H1B history</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pilot-blue-100 rounded-full p-2">
                      <FileCheck className="h-5 w-5 text-pilot-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Application Help</h4>
                      <p className="text-sm text-gray-600">Tailored resume advice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pilot-purple-100 rounded-full p-2">
                      <User className="h-5 w-5 text-pilot-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Alumni Network</h4>
                      <p className="text-sm text-gray-600">Connect with past success stories</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white">
                  See Visa-Friendly Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2 gradient-text">87%</div>
                    <p className="text-gray-600">of users found a job within 3 months</p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2 gradient-text">3x</div>
                    <p className="text-gray-600">more interviews for active users</p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2 gradient-text">500+</div>
                    <p className="text-gray-600">visa-friendly companies in our database</p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold mb-2 gradient-text">42%</div>
                    <p className="text-gray-600">higher salary offers with our templates</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Success Stories From Our Community
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "ApplyPilot helped me navigate the complex process of finding a job that would sponsor my visa. 
                  I received an offer from a startup within 2 months!"
                </p>
                <div>
                  <div className="font-medium">Raj P.</div>
                  <div className="text-sm text-gray-600">Software Engineer at CloudSphere</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "The resume ranking tool was eye-opening. I made the suggested changes and immediately started 
                  getting more callbacks. Now I work at my dream company!"
                </p>
                <div>
                  <div className="font-medium">Maria S.</div>
                  <div className="text-sm text-gray-600">Data Scientist at NexGen</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "The referral network changed everything for me. I found a connection at my target company, 
                  got a referral, and landed an interview the next week."
                </p>
                <div>
                  <div className="font-medium">Chen W.</div>
                  <div className="text-sm text-gray-600">Product Designer at TechNova</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Job Search With Confidence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of international students who have found their dream jobs in the U.S. using ApplyPilot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Free forever plan available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
