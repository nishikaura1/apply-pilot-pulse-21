
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Calendar,
  CheckCircle,
  Calendar as CalendarIcon,
  Globe,
  Filter,
  Search,
  Briefcase,
  Building2,
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  UserCheck,
  ChevronDown,
  X
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const popularLocations = ["New York", "San Francisco", "Boston", "Seattle", "Austin", "Chicago", "Los Angeles"];
const popularCompanies = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "IBM", "Oracle", "Salesforce"];

// Mock job listings
const jobListings = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$45/hr",
    level: "junior",
    type: "Internship",
    international: true,
    posted: "2 days ago",
    description: "Join our team to work on cutting-edge technology projects...",
    logo: "https://logo.clearbit.com/google.com"
  },
  {
    id: 2,
    title: "UX Design Co-op",
    company: "Microsoft",
    location: "Redmond, WA",
    salary: "$40/hr",
    level: "sophomore",
    type: "Co-op",
    international: true,
    posted: "3 days ago",
    description: "Design intuitive user experiences for our products...",
    logo: "https://logo.clearbit.com/microsoft.com"
  },
  {
    id: 3,
    title: "Data Science Internship",
    company: "Amazon",
    location: "Seattle, WA",
    salary: "$42/hr",
    level: "senior",
    type: "Internship",
    international: false,
    posted: "1 week ago",
    description: "Work with big data and machine learning models...",
    logo: "https://logo.clearbit.com/amazon.com"
  },
  {
    id: 4,
    title: "Product Management Intern",
    company: "Apple",
    location: "Cupertino, CA",
    salary: "$48/hr",
    level: "junior",
    type: "Internship",
    international: false,
    posted: "5 days ago",
    description: "Lead product development initiatives in a fast-paced environment...",
    logo: "https://logo.clearbit.com/apple.com"
  },
  {
    id: 5,
    title: "Research Assistant",
    company: "IBM",
    location: "New York, NY",
    salary: "$32/hr",
    level: "freshman",
    type: "Part-time",
    international: true,
    posted: "1 day ago",
    description: "Assist research teams in quantum computing projects...",
    logo: "https://logo.clearbit.com/ibm.com"
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Meta",
    location: "Menlo Park, CA",
    salary: "$50/hr",
    level: "senior",
    type: "Full-time",
    international: true,
    posted: "3 days ago",
    description: "Build responsive interfaces for our social media platforms...",
    logo: "https://logo.clearbit.com/meta.com"
  }
];

const JobHuntPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInternational, setIsInternational] = useState(searchParams.get('international') === 'true');
  const [academicLevel, setAcademicLevel] = useState(searchParams.get('level') || 'all');
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [jobType, setJobType] = useState("all");
  const [selectedLocations, setSelectedLocations] = useState([]);

  // Update the UI based on URL parameters when page loads
  useEffect(() => {
    const level = searchParams.get('level');
    const international = searchParams.get('international');
    
    if (level) {
      setAcademicLevel(level);
    }
    
    if (international === 'true') {
      setIsInternational(true);
    }
  }, [searchParams]);

  // Filter jobs based on all criteria
  useEffect(() => {
    let result = jobListings;
    
    // Filter by academic level
    if (academicLevel !== 'all') {
      result = result.filter(job => job.level === academicLevel);
    }
    
    // Filter by international status
    if (isInternational) {
      result = result.filter(job => job.international);
    }
    
    // Filter by job type
    if (jobType !== 'all') {
      result = result.filter(job => job.type.toLowerCase().includes(jobType.toLowerCase()));
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(term) || 
        job.company.toLowerCase().includes(term) ||
        job.description.toLowerCase().includes(term)
      );
    }
    
    // Filter by selected locations
    if (selectedLocations.length > 0) {
      result = result.filter(job => 
        selectedLocations.some(location => 
          job.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }
    
    setFilteredJobs(result);
  }, [academicLevel, isInternational, jobType, searchTerm, selectedLocations]);

  // Update URL when filters change
  const updateFilters = (level, international) => {
    const params = new URLSearchParams();
    
    if (level && level !== 'all') {
      params.set('level', level);
    }
    
    if (international) {
      params.set('international', 'true');
    }
    
    setSearchParams(params);
  };

  const handleLevelChange = (value) => {
    setAcademicLevel(value);
    updateFilters(value, isInternational);
  };

  const toggleInternational = () => {
    const newValue = !isInternational;
    setIsInternational(newValue);
    updateFilters(academicLevel, newValue);
  };

  const handleLocationToggle = (location) => {
    setSelectedLocations(prevLocations => {
      if (prevLocations.includes(location)) {
        return prevLocations.filter(l => l !== location);
      } else {
        return [...prevLocations, location];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Find Your Perfect Job</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Browse opportunities tailored to your academic level and career goals
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search by title, company, or keyword..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={academicLevel} onValueChange={handleLevelChange}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Academic Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="freshman">Freshman</SelectItem>
                    <SelectItem value="sophomore">Sophomore</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  variant={isInternational ? "default" : "outline"} 
                  className="w-[180px] whitespace-nowrap"
                  onClick={toggleInternational}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  International
                  {isInternational && <Badge variant="secondary" className="ml-2">On</Badge>}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {isFiltersOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {/* Advanced Filters (Collapsible) */}
            <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <CollapsibleContent className="pt-4 border-t mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> Job Type
                    </h3>
                    <ToggleGroup type="single" value={jobType} onValueChange={(value) => value && setJobType(value)}>
                      <ToggleGroupItem value="all" aria-label="All Job Types">All</ToggleGroupItem>
                      <ToggleGroupItem value="internship" aria-label="Internships">Internship</ToggleGroupItem>
                      <ToggleGroupItem value="co-op" aria-label="Co-ops">Co-op</ToggleGroupItem>
                      <ToggleGroupItem value="part-time" aria-label="Part-time">Part-time</ToggleGroupItem>
                      <ToggleGroupItem value="full-time" aria-label="Full-time">Full-time</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Popular Locations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularLocations.map(location => (
                        <Button
                          key={location}
                          variant={selectedLocations.includes(location) ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleLocationToggle(location)}
                          className="mb-1"
                        >
                          {location}
                          {selectedLocations.includes(location) && (
                            <X className="ml-1 h-3 w-3" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Building2 className="h-4 w-4" /> Popular Companies
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {popularCompanies.slice(0, 6).map(company => (
                        <div key={company} className="flex items-center space-x-2">
                          <Checkbox id={`company-${company}`} />
                          <label
                            htmlFor={`company-${company}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {company}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setAcademicLevel("all");
                      setIsInternational(false);
                      setJobType("all");
                      setSelectedLocations([]);
                      updateFilters("all", false);
                    }}
                  >
                    Clear All
                  </Button>
                  <Button size="sm">Apply Filters</Button>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Results Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
                </h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredJobs.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="pt-6 text-center">
                    <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your filters or search terms
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setAcademicLevel("all");
                        setIsInternational(false);
                        setJobType("all");
                        setSelectedLocations([]);
                        updateFilters("all", false);
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredJobs.map(job => (
                    <Card key={job.id} className="overflow-hidden hover:border-blue-300 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex p-4">
                          <div className="mr-4 flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                              <img 
                                src={job.logo} 
                                alt={`${job.company} logo`} 
                                className="max-w-full max-h-full object-contain" 
                                onError={(e) => {
                                  e.currentTarget.src = "https://via.placeholder.com/150";
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg">{job.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                              </div>
                              <div className="text-sm text-gray-500">{job.posted}</div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" /> {job.location}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" /> {job.salary}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Briefcase className="h-3 w-3" /> {job.type}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <GraduationCap className="h-3 w-3" /> {job.level.charAt(0).toUpperCase() + job.level.slice(1)}
                              </Badge>
                              {job.international && (
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                  <Globe className="h-3 w-3 mr-1" /> International
                                </Badge>
                              )}
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {job.description}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 flex justify-between items-center">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1" /> Apply by June 15, 2025
                          </span>
                          <Button size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              {filteredJobs.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="mx-auto">Load More Jobs</Button>
                </div>
              )}
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Job Hunt Tools</CardTitle>
                  <CardDescription>
                    Resources to help with your search
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Application Tracker</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Manage your applications in one place</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Resume Builder</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Create optimized resumes for each role</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Interview Prep</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Practice with role-specific questions</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Weekly Planning</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Schedule your job search activities</div>
                      </div>
                    </div>
                  </div>
                  
                  {isInternational && (
                    <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-5 w-5 text-blue-500" />
                        <div className="font-medium">International Student Resources</div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <UserCheck className="h-4 w-4 text-blue-500" />
                          <span>Visa-sponsoring employer database</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <UserCheck className="h-4 w-4 text-blue-500" />
                          <span>OPT/CPT application guides</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <UserCheck className="h-4 w-4 text-blue-500" />
                          <span>Immigration policy updates</span>
                        </li>
                      </ul>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        View All Resources
                      </Button>
                    </div>
                  )}
                  
                  <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Need Expert Advice?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Book a session with a career counselor for personalized guidance
                    </p>
                    <Button className="w-full">Schedule Appointment</Button>
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
