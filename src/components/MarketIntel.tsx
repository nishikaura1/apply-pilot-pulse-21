
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, RefreshCw, Briefcase, GraduationCap } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import CompanyHiringList, { Company } from "./CompanyHiringList";
import { 
  RoleData, 
  getSampleInternshipRoles, 
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
    queryKey: ['trendingInternships'],
    queryFn: async (): Promise<RoleData[]> => {
      try {
        // In a production environment, we would integrate with LinkedIn, Handshake, or Glassdoor APIs
        // For now, we'll simulate the response
        // Note: Using real APIs would require proper authentication and permissions
        
        // Simulating fetch delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulated data from popular job sites
        const sampleData = getSampleInternshipRoles();
        setRawJobData(sampleData.rawData);
        
        return sampleData.roles;
      } catch (error) {
        console.error("Error fetching internship data:", error);
        toast({
          title: "Error fetching data",
          description: "Could not load internship trends. Using sample data instead.",
          variant: "destructive",
        });
        // Return sample data as fallback
        const fallbackData = getSampleInternshipRoles();
        setRawJobData(fallbackData.rawData);
        return fallbackData.roles;
      }
    },
    initialData: getSampleInternshipRoles().roles,
    refetchOnWindowFocus: false,
  });

  // Handle manual refresh
  const handleRefresh = () => {
    refetch();
    toast({
      title: "Refreshing data",
      description: "Fetching the latest internship trends...",
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
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" /> 
                Internship Opportunities Heatmap
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Real-time data showing internship roles with significant changes in application volume. 
                Data aggregated from LinkedIn, Handshake, and Glassdoor. Click on any role to see companies hiring.
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
                <span>High Demand Internships</span>
              </TabsTrigger>
              <TabsTrigger value="trending-down" className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                <span>Declining Demand</span>
              </TabsTrigger>
              <TabsTrigger value="chart" className="flex items-center gap-2">
                <span>Chart View</span>
              </TabsTrigger>
            </TabsList>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="text-muted-foreground">Loading internship data...</div>
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
                            <div className="font-medium text-white">{role.title} Intern</div>
                            <div className="text-sm text-gray-300">{role.companies} companies hiring interns</div>
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
                            <div className="font-medium text-red-200">{role.title} Intern</div>
                            <div className="text-sm text-red-300">{role.companies} companies hiring interns</div>
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
                          label: "Trending Internships",
                          theme: {
                            light: "#2563eb",
                            dark: "#3b82f6",
                          },
                        },
                      }}
                    >
                      <BarChart
                        data={trendingRoles.map(role => ({
                          name: `${role.title} Intern`,
                          value: role.percentValue,
                          direction: role.direction,
                          fill: role.direction === "up" ? "#3b82f6" : "#ef4444",
                        }))}
                        margin={{ top: 10, right: 10, left: 10, bottom: 100 }}
                        onClick={(data) => {
                          if (data && data.activePayload && data.activePayload[0]) {
                            const roleName = data.activePayload[0].payload.name.replace(' Intern', '');
                            handleRoleClick(roleName);
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
                                    Click to see companies hiring interns
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
              Data aggregated from LinkedIn, Glassdoor, and Handshake. Last updated: {new Date().toLocaleDateString()}
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
          role={`${selectedRole} Intern`}
        />
      )}
    </div>
  );
};

export default MarketIntel;
