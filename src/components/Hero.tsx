
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
            AI-Powered Career Platform for International Students
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Navigate Your <span className="gradient-text">Career Path</span> With Confidence
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
            Empowering international students to find visa-friendly jobs and navigate OPT, CPT, and H1B pathways with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Find visa-friendly positions",
                "Compare your resume with others",
                "Discover responsive companies",
                "Access valuable referrals"
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

          {/* Right Column - Stats Card */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 bottom-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="glass-card bg-card/40 border border-border/30 p-6 rounded-2xl backdrop-blur-sm shadow-lg relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl gradient-text">Success Metrics</h3>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">International Focus</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/20 p-4 rounded-xl">
                  <div className="text-3xl font-bold mb-1 gradient-text">87%</div>
                  <p className="text-xs text-foreground/70">Job placement rate</p>
                </div>
                <div className="bg-background/20 p-4 rounded-xl">
                  <div className="text-3xl font-bold mb-1 gradient-text">500+</div>
                  <p className="text-xs text-foreground/70">Visa-friendly companies</p>
                </div>
                <div className="bg-background/20 p-4 rounded-xl">
                  <div className="text-3xl font-bold mb-1 gradient-text">3x</div>
                  <p className="text-xs text-foreground/70">More interviews</p>
                </div>
                <div className="bg-background/20 p-4 rounded-xl">
                  <div className="text-3xl font-bold mb-1 gradient-text">42%</div>
                  <p className="text-xs text-foreground/70">Higher salary offers</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="link" className="text-primary font-medium w-full text-sm">
                  Learn more about our platform →
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
