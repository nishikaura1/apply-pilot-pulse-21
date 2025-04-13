
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Building, FileCheck, User, ChevronRight } from "lucide-react";

const InternationalSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card/10">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Student <span className="gradient-text">Career Resources</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive tools and opportunities for students navigating complex job markets and seeking tailored career support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Visa Filters</h4>
                  <p className="text-sm text-foreground/70">Find OPT/CPT friendly positions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Sponsor Insights</h4>
                  <p className="text-sm text-foreground/70">Companies with H1B history</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Application Help</h4>
                  <p className="text-sm text-foreground/70">Tailored resume advice</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Alumni Network</h4>
                  <p className="text-sm text-foreground/70">Connect with past success stories</p>
                </div>
              </div>
            </div>
            
            <Button className="group">
              See Visa-Friendly Jobs 
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="card-hover bg-card/30 border-border/30">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text">87%</div>
                <p className="text-foreground/70">of international users found a job within 3 months</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card/30 border-border/30">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text">3x</div>
                <p className="text-foreground/70">more interviews for active international users</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card/30 border-border/30">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text">500+</div>
                <p className="text-foreground/70">visa-friendly companies in our database</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-card/30 border-border/30">
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-2 gradient-text">42%</div>
                <p className="text-foreground/70">higher salary offers with our templates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalSection;
