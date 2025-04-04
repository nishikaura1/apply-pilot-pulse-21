
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Calendar as CalendarIcon } from "lucide-react";

const JobHuntPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Job Hunt Planner</h1>
            <p className="text-gray-600">
              Create a customized job search strategy based on your schedule and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Weekly Plan</CardTitle>
                  <CardDescription>
                    Your personalized job search schedule
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-16">
                    <div className="mb-6">
                      <Calendar className="h-16 w-16 mx-auto text-pilot-blue-500" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Set up your job hunt plan</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Tell us about your availability and goals, and we'll create a personalized job search plan for you.
                    </p>
                    <Button className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white">
                      Create Your Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Smart Scheduling</div>
                        <div className="text-sm text-gray-600">Optimized for your available time</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Calendar Integration</div>
                        <div className="text-sm text-gray-600">Sync with Google or Outlook</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Priority Adjustments</div>
                        <div className="text-sm text-gray-600">Auto-bump expiring opportunities</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Smart Reminders</div>
                        <div className="text-sm text-gray-600">Never miss an application deadline</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-pilot-blue-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <CalendarIcon className="h-5 w-5 text-pilot-blue-500" />
                      <div className="font-medium">Coming Soon</div>
                    </div>
                    <p className="text-sm text-gray-600">
                      AI-powered recommendations based on your application success patterns
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobHuntPage;
