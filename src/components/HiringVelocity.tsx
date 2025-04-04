
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock } from "lucide-react";

const HiringVelocity = () => {
  const fastCompanies = [
    {
      name: "TechNova",
      logo: "TN",
      color: "bg-blue-500",
      responseTime: "1.2 days",
      interviewTime: "4 days",
      offerTime: "7 days",
    },
    {
      name: "DataFlow AI",
      logo: "DF",
      color: "bg-purple-500",
      responseTime: "1.5 days",
      interviewTime: "3 days",
      offerTime: "8 days",
    },
    {
      name: "Quantum Labs",
      logo: "QL",
      color: "bg-green-500",
      responseTime: "1.8 days",
      interviewTime: "5 days",
      offerTime: "9 days",
    },
    {
      name: "NexGen Software",
      logo: "NS",
      color: "bg-amber-500",
      responseTime: "2.1 days",
      interviewTime: "4 days",
      offerTime: "10 days",
    },
    {
      name: "Cloud Sphere",
      logo: "CS",
      color: "bg-red-500",
      responseTime: "2.3 days",
      interviewTime: "6 days",
      offerTime: "12 days",
    },
  ];

  return (
    <div className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Hiring Velocity Tracker</CardTitle>
          <CardDescription>
            Companies with the fastest response times from application to offer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-amber-500" />
              <h3 className="font-medium">Top Responsive Companies</h3>
            </div>
            <p className="text-sm text-gray-600">
              Based on crowdsourced data from successful applicants in the last 30 days
            </p>
          </div>

          <div className="space-y-4">
            {fastCompanies.map((company, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className={`h-12 w-12 rounded-lg text-white flex items-center justify-center font-bold ${company.color}`}>
                  {company.logo}
                </div>
                <div className="ml-4 flex-grow">
                  <div className="font-medium">{company.name}</div>
                  <div className="text-sm text-gray-600">Visa-friendly startup</div>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">First Response</div>
                    <div className="font-medium">{company.responseTime}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">To Interview</div>
                    <div className="font-medium">{company.interviewTime}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">To Offer</div>
                    <div className="font-medium">{company.offerTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Data updated weekly based on user reports</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HiringVelocity;
