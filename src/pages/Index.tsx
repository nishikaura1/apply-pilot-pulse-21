
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// Remove AcademicLevelFilter import
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import InternationalSection from "@/components/InternationalSection";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        {/* Remove AcademicLevelFilter component */}
        <Features />
        <HowItWorks />
        <InternationalSection />
        
        {/* Testimonials */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Success Stories From Our Community
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 p-6 rounded-lg shadow-sm border border-border/30">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6">
                  "ApplyPilot helped me navigate the complex process of finding a job that would sponsor my visa. 
                  I received an offer from a startup within 2 months!"
                </p>
                <div>
                  <div className="font-medium">Raj P.</div>
                  <div className="text-sm text-foreground/70">Software Engineer at CloudSphere</div>
                </div>
              </div>
              
              <div className="bg-card/30 p-6 rounded-lg shadow-sm border border-border/30">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6">
                  "The resume ranking tool was eye-opening. I made the suggested changes and immediately started 
                  getting more callbacks. Now I work at my dream company!"
                </p>
                <div>
                  <div className="font-medium">Maria S.</div>
                  <div className="text-sm text-foreground/70">Data Scientist at NexGen</div>
                </div>
              </div>
              
              <div className="bg-card/30 p-6 rounded-lg shadow-sm border border-border/30">
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 mb-6">
                  "As a sophomore with little experience, I didn't think I could land an internship.
                  The freshman/sophomore filter helped me find companies specifically looking for students at my level."
                </p>
                <div>
                  <div className="font-medium">Tyler K.</div>
                  <div className="text-sm text-foreground/70">Marketing Intern at MediaPulse</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background/50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      🚀 Available Jobs
    </h2>

    <div className="flex justify-center">
     <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOTuPJwEuJ4W5TQJPQu_Avs07g_0YQIblAAHUwUe0jHzUseWjfOLzdQMjovK9mPqyJXuP4gP0_zm6X/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        width="100%"
        height="600"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      ></iframe>
    </div>
  </div>
</section>

        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Job Search With Confidence
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Join thousands of students who have found their dream jobs using ApplyPilot's tailored search for every academic level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-foreground/70">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-foreground/70">Free forever plan available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-foreground/70">Cancel anytime</span>
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
