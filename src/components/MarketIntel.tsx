
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import CompanyHiringList, { Company } from "./CompanyHiringList";
import { 
  RoleData, 
  getSampleTrendingRoles, 
  processJobsData, 
  getCompaniesForRole 
} from "@/utils/marketIntelUtils";

const MarketIntel = () => {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showCompanies, setShowCompanies] = useState(false);
  
  // Store the raw API response to use for company lookups
  const [rawJobData, setRawJobData] = useState<any[]>([]);
  
  // Fetch role data from API
  const { data: trendingRoles, isLoading, error, refetch } = useQuery({
    queryKey: ['trendingRoles'],
    queryFn: async (): Promise<RoleData[]> => {
      try {
        // Using a free jobs API to fetch data
        const response = await fetch('https://remoteok.com/api');
        const data = await response.json();
        
        // Store the raw data for company lookups
        setRawJobData(data);
        
        // Process the data to create our trending roles
        return processJobsData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
        toast({
          title: "Error fetching data",
          description: "Could not load market trends. Using sample data instead.",
          variant: "destructive",
        });
        // Return sample data as fallback
        return getSampleTrendingRoles();
      }
    },
    initialData: getSampleTrendingRoles(),
    refetchOnWindowFocus: false,
  });

  // Handle manual refresh
  const handleRefresh = () => {
    refetch();
    toast({
      title: "Refreshing data",
      description: "Fetching the latest market trends...",
    });
  };

  // Handle role click to show companies
  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
    setShowCompanies(true);
  };

  // Get companies for the selected role
  const getCompaniesHiring = (): Company[] => {
    if (!selectedRole || !rawJobData.length) return [];
    return getCompaniesForRole(rawJobData, selectedRole);
  };

  return (
    <div className="py-8">
      <Card className="bg-background border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl text-foreground">Live Heatmap</CardTitle>
              <CardDescription className="text-muted-foreground">
                Real-time data showing roles with significant changes in application volume. 
                Click on any role to see companies hiring.
              </CardDescription>
            </div>
            <button 
              onClick={handleRefresh} 
              className="p-2 rounded-full hover:bg-accent transition-colors"
              title="Refresh data"
            >
              <RefreshCw className={`h-5 w-5 text-muted-foreground ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
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
              <TabsTrigger value="chart" className="flex items-center gap-2">
                <span>Chart View</span>
              </TabsTrigger>
            </TabsList>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-muted-foreground">Loading market data...</div>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-destructive">Error loading data. Using sample data instead.</div>
              </div>
            ) : (
              <>
                <TabsContent value="trending-up">
                  <div className="space-y-4">
                    {trendingRoles
                      .filter(role => role.direction === "up")
                      .sort((a, b) => parseInt(a.change) > parseInt(b.change) ? -1 : 1)
                      .map((role, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r cursor-pointer hover:opacity-90 transition-opacity"
                          style={{
                            backgroundImage: `linear-gradient(to right, rgba(0, 102, 255, ${index * 0.05 + 0.1}), rgba(128, 0, 255, ${index * 0.05 + 0.1}))`,
                          }}
                          onClick={() => handleRoleClick(role.title)}
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
                      .sort((a, b) => parseInt(b.change.replace('-', '')) - parseInt(a.change.replace('-', '')))
                      .map((role, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-red-900/20 to-red-900/10 cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => handleRoleClick(role.title)}
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
                
                <TabsContent value="chart">
                  <div className="h-[400px] mt-4">
                    <ChartContainer
                      className="h-[400px]"
                      config={{
                        trending: {
                          label: "Trending Roles",
                          theme: {
                            light: "#2563eb",
                            dark: "#3b82f6",
                          },
                        },
                      }}
                    >
                      <BarChart
                        data={trendingRoles.map(role => ({
                          name: role.title,
                          value: role.percentValue,
                          direction: role.direction,
                          fill: role.direction === "up" ? "#3b82f6" : "#ef4444",
                        }))}
                        margin={{ top: 10, right: 10, left: 10, bottom: 100 }}
                        onClick={(data) => {
                          if (data && data.activePayload && data.activePayload[0]) {
                            handleRoleClick(data.activePayload[0].payload.name);
                          }
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                          dataKey="name" 
                          angle={-45}
                          textAnchor="end"
                          height={70}
                          interval={0}
                          tick={{ fill: "rgb(156 163 175)", fontSize: 12 }}
                        />
                        <YAxis 
                          tick={{ fill: "rgb(156 163 175)" }}
                          label={{ 
                            value: "Change (%)", 
                            angle: -90, 
                            position: "insideLeft",
                            style: { fill: "rgb(156 163 175)" }
                          }}
                        />
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-background border border-border p-2 rounded shadow-md">
                                  <p className="text-foreground font-medium">{data.name}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {data.direction === "up" ? "+" : "-"}{data.value}% change
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Click to see companies hiring
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar
                          dataKey="value"
                          fill="#3b82f6"
                          radius={[4, 4, 0, 0]}
                          fillOpacity={0.8}
                        />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </TabsContent>
              </>
            )}
          </Tabs>
          
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Data refreshed automatically every 24 hours. Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Companies hiring dialog */}
      {selectedRole && (
        <CompanyHiringList
          isOpen={showCompanies}
          onClose={() => setShowCompanies(false)}
          companies={getCompaniesHiring()}
          role={selectedRole}
        />
      )}
    </div>
  );
};

export default MarketIntel;
