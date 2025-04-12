
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketIntel = () => {
  const trendingRoles = [
    { title: "Full Stack Developer", change: "+48%", direction: "up", companies: 37 },
    { title: "Product Designer", change: "+35%", direction: "up", companies: 24 },
    { title: "Data Scientist", change: "+31%", direction: "up", companies: 19 },
    { title: "Growth Marketer", change: "+27%", direction: "up", companies: 22 },
    { title: "DevOps Engineer", change: "+24%", direction: "up", companies: 15 },
    { title: "Project Manager", change: "-18%", direction: "down", companies: 12 },
    { title: "QA Engineer", change: "-15%", direction: "down", companies: 8 },
    { title: "Content Writer", change: "-12%", direction: "down", companies: 10 },
  ];

  return (
    <div className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Live Heatmap</CardTitle>
          <CardDescription>
            Real-time data showing roles with significant changes in application volume
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trending-up">
            <TabsList className="mb-6">
              <TabsTrigger value="trending-up" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Trending Up</span>
              </TabsTrigger>
              <TabsTrigger value="trending-down" className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                <span>Trending Down</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending-up">
              <div className="space-y-4">
                {trendingRoles
                  .filter(role => role.direction === "up")
                  .map((role, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 102, 255, ${index * 0.05 + 0.1}), rgba(128, 0, 255, ${index * 0.05 + 0.1}))`,
                      }}
                    >
                      <div>
                        <div className="font-medium text-white">{role.title}</div>
                        <div className="text-sm text-gray-300">{role.companies} companies hiring</div>
                      </div>
                      <div className="text-white font-bold">{role.change}</div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="trending-down">
              <div className="space-y-4">
                {trendingRoles
                  .filter(role => role.direction === "down")
                  .map((role, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-red-900/20 to-red-900/10"
                    >
                      <div>
                        <div className="font-medium text-red-200">{role.title}</div>
                        <div className="text-sm text-red-300">{role.companies} companies hiring</div>
                      </div>
                      <div className="text-red-100 font-bold">{role.change}</div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketIntel;
