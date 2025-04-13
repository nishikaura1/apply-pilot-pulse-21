
import { Company } from "@/components/CompanyHiringList";

// Interface for the role data
export interface RoleData {
  title: string;
  change: string;
  direction: "up" | "down";
  companies: number;
  percentValue: number;
}

// Sample data in case the API fails
export const getSampleTrendingRoles = (): RoleData[] => [
  { title: "Full Stack Developer", change: "+48%", direction: "up", companies: 37, percentValue: 48 },
  { title: "Product Designer", change: "+35%", direction: "up", companies: 24, percentValue: 35 },
  { title: "Data Scientist", change: "+31%", direction: "up", companies: 19, percentValue: 31 },
  { title: "Growth Marketer", change: "+27%", direction: "up", companies: 22, percentValue: 27 },
  { title: "DevOps Engineer", change: "+24%", direction: "up", companies: 15, percentValue: 24 },
  { title: "Frontend Developer", change: "+22%", direction: "up", companies: 28, percentValue: 22 },
  { title: "Backend Developer", change: "+19%", direction: "up", companies: 25, percentValue: 19 },
  { title: "UX/UI Designer", change: "+16%", direction: "up", companies: 18, percentValue: 16 },
  { title: "Project Manager", change: "-18%", direction: "down", companies: 12, percentValue: 18 },
  { title: "QA Engineer", change: "-15%", direction: "down", companies: 8, percentValue: 15 },
  { title: "Content Writer", change: "-12%", direction: "down", companies: 10, percentValue: 12 },
  { title: "Office Manager", change: "-10%", direction: "down", companies: 5, percentValue: 10 },
];

// Process job data into our format
export const processJobsData = (jobsData: any[]): RoleData[] => {
  // Skip the first item which is usually metadata
  const jobs = jobsData.slice(1);
  
  // Count occurrences of each job category
  const categoryCounts: Record<string, number> = {};
  jobs.forEach(job => {
    if (job.position) {
      // Normalize the job title
      const normalizedPosition = normalizeJobTitle(job.position);
      categoryCounts[normalizedPosition] = (categoryCounts[normalizedPosition] || 0) + 1;
    }
  });
  
  // Convert to array and sort
  const sortedCategories = Object.entries(categoryCounts)
    .filter(([title, count]) => count > 1) // Only include roles with multiple listings
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12); // Take top 12 roles
  
  // Create trending data
  const trendingUp = sortedCategories.slice(0, 8).map(([title, count], index) => {
    const percentChange = 15 + Math.floor(Math.random() * 35); // Random percent between 15-50%
    return {
      title,
      change: `+${percentChange}%`,
      direction: "up" as const,
      companies: count,
      percentValue: percentChange
    };
  });
  
  // Create trending down data from the bottom of our list
  const trendingDown = sortedCategories.slice(-4).map(([title, count], index) => {
    const percentChange = 10 + Math.floor(Math.random() * 15); // Random percent between 10-25%
    return {
      title,
      change: `-${percentChange}%`,
      direction: "down" as const,
      companies: count,
      percentValue: percentChange
    };
  });
  
  return [...trendingUp, ...trendingDown];
};

// Normalize job titles to group similar positions
export const normalizeJobTitle = (title: string): string => {
  title = title.toLowerCase();
  
  if (title.includes("frontend") || title.includes("front-end") || title.includes("front end")) {
    return "Frontend Developer";
  } else if (title.includes("backend") || title.includes("back-end") || title.includes("back end")) {
    return "Backend Developer";
  } else if (title.includes("full") && (title.includes("stack") || title.includes("developer"))) {
    return "Full Stack Developer";
  } else if (title.includes("data") && (title.includes("scientist") || title.includes("science"))) {
    return "Data Scientist";
  } else if (title.includes("product") && title.includes("design")) {
    return "Product Designer";
  } else if (title.includes("devops")) {
    return "DevOps Engineer";
  } else if (title.includes("qa") || title.includes("quality")) {
    return "QA Engineer";
  } else if (title.includes("content") && title.includes("writ")) {
    return "Content Writer";
  } else if (title.includes("project") && title.includes("manag")) {
    return "Project Manager";
  } else if (title.includes("ui") || title.includes("ux") || title.includes("design")) {
    return "UX/UI Designer";
  } else if (title.includes("marketing")) {
    return "Marketing Specialist";
  } else if (title.includes("mobile") || title.includes("android") || title.includes("ios")) {
    return "Mobile Developer";
  } else {
    // Return the original title if no match
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
};

// Get companies hiring for a specific role
export const getCompaniesForRole = (jobsData: any[], role: string): Company[] => {
  if (!jobsData || jobsData.length <= 1) return [];
  
  // Skip the first item which is usually metadata
  const jobs = jobsData.slice(1);
  
  // Filter jobs for the specific role
  return jobs
    .filter((job: any) => {
      const normalizedPosition = normalizeJobTitle(job.position || "");
      return normalizedPosition === role;
    })
    .map((job: any) => ({
      name: job.company || "Unknown Company",
      role: job.position || role,
      location: job.location || "Remote",
      url: job.url || job.apply_url || null,
      logo: job.company_logo || job.logo || null,
      date: job.date ? new Date(job.date).toLocaleDateString() : "Recent"
    }))
    .slice(0, 20); // Limit to 20 companies
};
