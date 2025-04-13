
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketIntel from "@/components/MarketIntel";
import ResumeRanking from "@/components/ResumeRanking";
import HiringVelocity from "@/components/HiringVelocity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, ThumbsDown, Bell, GraduationCap, Briefcase } from "lucide-react";

const MarketIntelPage = () => {
  const crowdsourcedInsights = [
    {
      company: "Google",
      role: "Software Engineering Intern",
      insight: "Interviewer focused on algorithms and data structures. They ask system design questions even for internships.",
      helpful: 31,
      date: "2 days ago"
    },
    {
      company: "Microsoft",
      role: "Data Science Intern",
      insight: "Very organized process. Three interview rounds with questions focused on Python, statistics, and past projects.",
      helpful: 24,
      date: "4 days ago"
    },
    {
      company: "Amazon",
      role: "Product Management Intern",
      insight: "They prioritize OPT candidates and have a history of H1B sponsorship. Very case-study oriented.",
      helpful: 32,
      date: "1 week ago"
    },
    {
      company: "Meta",
      role: "ML Engineering Intern",
      insight: "Technical interview was challenging but fair. Focus on machine learning fundamentals and practical implementation.",
      helpful: 19,
      date: "1 week ago"
    }
  ];

  const lowCompetitionJobs = [
    {
      role: "Software Engineering Intern",
      company: "FinTech Startup",
      location: "Remote",
      applicants: 8,
      posted: "1 day ago",
      visa: "OPT/CPT friendly",
      expires: "5 days"
    },
    {
      role: "Data Analyst Intern",
      company: "Health Analytics Inc",
      location: "Boston, MA",
      applicants: 12,
      posted: "3 days ago",
      visa: "OPT/CPT friendly",
      expires: "4 days"
    },
    {
      role: "UX Design Intern",
      company: "Creative Tech",
      location: "San Francisco, CA (Hybrid)",
      applicants: 15,
      posted: "5 days ago",
      visa: "OPT/CPT friendly",
      expires: "7 days"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-primary" />
              Internship Market Intelligence Hub
            </h1>
            <p className="text-muted-foreground">
              Real-time insights to help you find and secure the best internship opportunities with visa sponsorship
            </p>
          </div>
          
          <Tabs defaultValue="heatmap" className="space-y-8">
            <TabsList className="w-full justify-start border-b pb-0 bg-transparent">
              <TabsTrigger value="heatmap" className="data-[state=active]:border-b-2 data-[state=active]:border-pilot-blue-500 rounded-none">
                Internship Heatmap
              </TabsTrigger>
              <TabsTrigger value="resume" className="data-[state=active]:border-b-2 data-[state=active]:border-pilot-blue-500 rounded-none">
                Resume Ranking
              </TabsTrigger>
              <TabsTrigger value="hiring" className="data-[state=active]:border-b-2 data-[state=active]:border-pilot-blue-500 rounded-none">
                Hiring Velocity
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:border-b-2 data-[state=active]:border-pilot-blue-500 rounded-none">
                Crowdsourced Insights
              </TabsTrigger>
              <TabsTrigger value="alerts" className="data-[state=active]:border-b-2 data-[state=active]:border-pilot-blue-500 rounded-none">
                Low Competition
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="heatmap" className="mt-6">
              <MarketIntel />
            </TabsContent>
            
            <TabsContent value="resume" className="mt-6">
              <ResumeRanking />
            </TabsContent>
            
            <TabsContent value="hiring" className="mt-6">
              <HiringVelocity />
            </TabsContent>
            
            <TabsContent value="insights" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Internship Interview Insights
                  </CardTitle>
                  <CardDescription>
                    Anonymous insights from students who have interviewed for internships with these companies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {crowdsourcedInsights.map((insight, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-900/40 rounded-lg p-4">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium text-foreground">{insight.company}</div>
                          <div className="text-sm text-muted-foreground">{insight.date}</div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">Role: {insight.role}</div>
                        <p className="mb-4 text-foreground">{insight.insight}</p>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            <span>{insight.helpful} found helpful</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>Helpful</span>
                            </Button>
                            <Button variant="outline" size="sm" className="flex gap-1">
                              <ThumbsDown className="h-4 w-4" />
                              <span>Not Helpful</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6 border-t pt-6">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Share Your Internship Experience</h4>
                        <Button className="bg-pilot-blue-500 text-white">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          <span>Add Insight</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="alerts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Low Competition Internships
                  </CardTitle>
                  <CardDescription>
                    Internship opportunities with fewer applicants than average - higher chances of getting noticed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {lowCompetitionJobs.map((job, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden bg-white">
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium text-lg">{job.role}</h4>
                              <div className="text-gray-600">{job.company}</div>
                            </div>
                            <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                              Low Competition
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.posted}</span>
                            <span>•</span>
                            <span className="text-pilot-purple-600 font-medium">{job.visa}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm font-medium">Only {job.applicants} applicants</span>
                              <span className="mx-2 text-gray-300">|</span>
                              <span className="text-sm text-red-600">Expires in {job.expires}</span>
                            </div>
                            <Button>Apply Now</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-pilot-blue-50 border border-pilot-blue-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-pilot-blue-500" />
                        <div>
                          <div className="font-medium">Get Low Competition Internship Alerts</div>
                          <div className="text-sm text-gray-600">Be the first to know about internship opportunities with few applicants</div>
                        </div>
                      </div>
                      <Button className="bg-pilot-blue-500 text-white">
                        Set Up Alerts
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketIntelPage;
