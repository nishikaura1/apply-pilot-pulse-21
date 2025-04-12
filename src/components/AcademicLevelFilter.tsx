
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const AcademicLevelFilter = () => {
  return (
    <section className="py-12 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Find Jobs By Academic Level</h2>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-5 w-full mb-8">
            <TabsTrigger value="all">All Jobs</TabsTrigger>
            <TabsTrigger value="freshman">Freshman</TabsTrigger>
            <TabsTrigger value="sophomore">Sophomore</TabsTrigger>
            <TabsTrigger value="junior">Junior</TabsTrigger>
            <TabsTrigger value="senior">Senior</TabsTrigger>
          </TabsList>
          
          {["all", "freshman", "sophomore", "junior", "senior"].map((level) => (
            <TabsContent key={level} value={level} className="space-y-6">
              <div className="bg-card/30 p-6 rounded-xl border border-border/30">
                <div className="relative flex items-center mb-6">
                  <Search className="absolute left-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder={`Search ${level === 'all' ? 'all' : level} job opportunities...`} 
                    className="pl-10 pr-4 py-6 bg-background/50"
                  />
                  <Button className="ml-2 absolute right-1">Search</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {level === "all" && (
                    <>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">All Opportunities</h4>
                        <p className="text-sm text-muted-foreground">Access all job listings regardless of academic year</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">1200+ Positions</h4>
                        <p className="text-sm text-muted-foreground">From entry-level to experienced roles</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">International Friendly</h4>
                        <p className="text-sm text-muted-foreground">Filter for visa-sponsoring employers</p>
                      </div>
                    </>
                  )}
                  
                  {level === "freshman" && (
                    <>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Entry-Level Roles</h4>
                        <p className="text-sm text-muted-foreground">Perfect for students with minimal experience</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">300+ Positions</h4>
                        <p className="text-sm text-muted-foreground">Specially curated for first-year students</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Build Your Foundation</h4>
                        <p className="text-sm text-muted-foreground">Gain essential career skills</p>
                      </div>
                    </>
                  )}
                  
                  {level === "sophomore" && (
                    <>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Growing Experiences</h4>
                        <p className="text-sm text-muted-foreground">Roles that build on basic skills</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">350+ Positions</h4>
                        <p className="text-sm text-muted-foreground">Targeted for second-year students</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Summer Opportunities</h4>
                        <p className="text-sm text-muted-foreground">Expanded summer internships available</p>
                      </div>
                    </>
                  )}
                  
                  {level === "junior" && (
                    <>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Advancing Careers</h4>
                        <p className="text-sm text-muted-foreground">More specialized role opportunities</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">400+ Positions</h4>
                        <p className="text-sm text-muted-foreground">Competitive junior-level roles</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Industry Connections</h4>
                        <p className="text-sm text-muted-foreground">Network with industry professionals</p>
                      </div>
                    </>
                  )}
                  
                  {level === "senior" && (
                    <>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Launch Your Career</h4>
                        <p className="text-sm text-muted-foreground">Full-time positions for graduates</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">450+ Positions</h4>
                        <p className="text-sm text-muted-foreground">Senior and post-grad opportunities</p>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-1">Leadership Tracks</h4>
                        <p className="text-sm text-muted-foreground">Positions with advancement potential</p>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button variant="outline" className="mr-2">Filters</Button>
                  <Button>View All {level === 'all' ? '' : level} Jobs</Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AcademicLevelFilter;
