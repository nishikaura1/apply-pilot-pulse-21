
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 md:pt-24 pb-20 md:pb-28">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <circle cx="300" cy="300" r="300" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-5">
        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent"
        >
          <circle cx="250" cy="250" r="250" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Career Platform for All College Students
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Navigate Your <span className="gradient-text">Career Path</span> With Confidence
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
            Empowering college students at every stage to find the perfect job opportunities tailored to their academic level and background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Freshman-friendly positions",
                "Specialized opportunities",
                "Internships for all levels",
                "Campus recruitment access"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-card/40 p-4 rounded-xl backdrop-blur-sm border border-border/30">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80 text-sm">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="group text-base">
                See Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 bottom-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="glass-card bg-card/40 border border-border/30 p-6 rounded-2xl backdrop-blur-sm shadow-lg relative z-10">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="font-bold text-xl mb-4">Overall Success Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/20 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-1 gradient-text">93%</div>
                      <p className="text-xs text-foreground/70">Job placement rate</p>
                    </div>
                    <div className="bg-background/20 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-1 gradient-text">700+</div>
                      <p className="text-xs text-foreground/70">Partner companies</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-4">International Student Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/20 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-1 gradient-text">87%</div>
                      <p className="text-xs text-foreground/70">Visa-friendly placement</p>
                    </div>
                    <div className="bg-background/20 p-4 rounded-xl">
                      <div className="text-3xl font-bold mb-1 gradient-text">500+</div>
                      <p className="text-xs text-foreground/70">Sponsoring companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
