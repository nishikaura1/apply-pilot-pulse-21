
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, MessageSquare, LinkedinIcon } from "lucide-react";

const ReferralNetwork = () => {
  const connections = [
    {
      company: "Stripe",
      connections: [
        { name: "Sarah Chen", title: "Senior Engineer" },
        { name: "David Park", title: "Product Manager" },
      ]
    },
    {
      company: "Airbnb",
      connections: [
        { name: "Michael Rodriguez", title: "Data Scientist" },
      ]
    },
    {
      company: "Figma",
      connections: [
        { name: "Emma Wilson", title: "Design Lead" },
        { name: "James Taylor", title: "Frontend Developer" },
      ]
    },
  ];

  return (
    <div className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Referral Network Map</CardTitle>
          <CardDescription>
            Discover potential referral connections at your target companies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 border border-gray-200 rounded-lg mb-6 bg-gray-50">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                <LinkedinIcon className="h-5 w-5 text-[#0077b5]" />
                <span>Connect LinkedIn</span>
              </Button>
              <span className="text-gray-500">or</span>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-5 w-5" />
                <span>Upload Resume</span>
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Connect to discover your network at 500+ companies
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium">Sample Network View</h3>
            
            {connections.map((company, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-3 font-medium">{company.company}</div>
                <div className="divide-y">
                  {company.connections.map((connection, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium">{connection.name}</div>
                        <div className="text-sm text-gray-600">{connection.title}</div>
                      </div>
                      <Button size="sm" variant="ghost" className="gap-2 text-pilot-blue-500">
                        <MessageSquare className="h-4 w-4" />
                        <span>Request Referral</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="p-4 bg-pilot-blue-50 rounded-lg">
              <div className="font-medium mb-2">AI-Generated Referral Message</div>
              <p className="text-sm text-gray-700 italic">
                "Hi [Connection], I noticed you work at [Company] and I'm interested in the [Position] role. 
                I have experience with [Relevant Skills] that align with the job requirements. 
                Would you be open to referring me for this position? I'd be happy to share my resume. Thanks!"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralNetwork;
