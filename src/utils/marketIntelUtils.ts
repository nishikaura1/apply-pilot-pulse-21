
import { Company } from "@/components/CompanyHiringList";

// Interface for the role data
export interface RoleData {
  title: string;
  change: string;
  direction: "up" | "down";
  companies: number;
  percentValue: number;
}

// Sample internship data (simulated from LinkedIn, Glassdoor, Handshake)
export const getSampleInternshipRoles = () => {
  // Sample roles data
  const roles: RoleData[] = [
    { title: "Software Engineering", change: "+48%", direction: "up", companies: 37, percentValue: 48 },
    { title: "Data Science", change: "+42%", direction: "up", companies: 29, percentValue: 42 },
    { title: "Product Management", change: "+35%", direction: "up", companies: 24, percentValue: 35 },
    { title: "UX/UI Design", change: "+31%", direction: "up", companies: 22, percentValue: 31 },
    { title: "Growth Marketing", change: "+27%", direction: "up", companies: 19, percentValue: 27 },
    { title: "Business Analyst", change: "+24%", direction: "up", companies: 18, percentValue: 24 },
    { title: "Machine Learning", change: "+22%", direction: "up", companies: 21, percentValue: 22 },
    { title: "Financial Analyst", change: "+19%", direction: "up", companies: 16, percentValue: 19 },
    { title: "Content Creation", change: "-12%", direction: "down", companies: 8, percentValue: 12 },
    { title: "Project Management", change: "-14%", direction: "down", companies: 10, percentValue: 14 },
    { title: "Administrative Assistant", change: "-18%", direction: "down", companies: 6, percentValue: 18 },
    { title: "Human Resources", change: "-22%", direction: "down", companies: 5, percentValue: 22 },
  ];
  
  // Sample raw job data that would come from APIs
  const rawData = [
    // LinkedIn-style data format
    // Software Engineering interns
    { 
      company: "Google",
      position: "Software Engineering",
      location: "Mountain View, CA (Hybrid)",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/software-engineering-intern-at-google",
      date: "2025-04-10"
    },
    { 
      company: "Microsoft",
      position: "Software Engineering",
      location: "Redmond, WA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/software-engineering-intern-at-microsoft",
      date: "2025-04-09"
    },
    { 
      company: "Amazon",
      position: "Software Engineering",
      location: "Seattle, WA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/software-engineering-intern-at-amazon",
      date: "2025-04-08"
    },
    { 
      company: "Meta",
      position: "Software Engineering",
      location: "Menlo Park, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/software-engineering-intern-at-meta",
      date: "2025-04-07"
    },
    { 
      company: "Apple",
      position: "Software Engineering",
      location: "Cupertino, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
      url: "https://www.linkedin.com/jobs/view/software-engineering-intern-at-apple",
      date: "2025-04-05"
    },
    
    // Data Science interns
    { 
      company: "Netflix",
      position: "Data Science",
      location: "Los Gatos, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/data-science-intern-at-netflix",
      date: "2025-04-09"
    },
    { 
      company: "Spotify",
      position: "Data Science",
      location: "New York, NY",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
      url: "https://www.linkedin.com/jobs/view/data-science-intern-at-spotify",
      date: "2025-04-10"
    },
    { 
      company: "IBM",
      position: "Data Science",
      location: "Remote",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/data-science-intern-at-ibm",
      date: "2025-04-08"
    },
    
    // UX/UI Design interns
    { 
      company: "Airbnb",
      position: "UX/UI Design",
      location: "San Francisco, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_logo_bélo.svg/1200px-Airbnb_logo_bélo.svg.png",
      url: "https://www.linkedin.com/jobs/view/uxui-design-intern-at-airbnb",
      date: "2025-04-10"
    },
    { 
      company: "Adobe",
      position: "UX/UI Design",
      location: "San Jose, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1200px-Adobe_Systems_logo_and_wordmark.svg.png",
      url: "https://www.linkedin.com/jobs/view/uxui-design-intern-at-adobe",
      date: "2025-04-09"
    },
    
    // Product Management interns
    { 
      company: "Salesforce",
      position: "Product Management",
      location: "San Francisco, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/product-management-intern-at-salesforce",
      date: "2025-04-09"
    },
    { 
      company: "Uber",
      position: "Product Management",
      location: "San Francisco, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Uber_App_Icon.svg/1200px-Uber_App_Icon.svg.png",
      url: "https://www.linkedin.com/jobs/view/product-management-intern-at-uber",
      date: "2025-04-08"
    },
    
    // Add some sample data for other categories
    // Growth Marketing interns
    { 
      company: "TikTok",
      position: "Growth Marketing",
      location: "Los Angeles, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/TikTok_logo.svg/1200px-TikTok_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/growth-marketing-intern-at-tiktok",
      date: "2025-04-09"
    },
    
    // Business Analyst interns
    { 
      company: "Deloitte",
      position: "Business Analyst",
      location: "New York, NY",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png",
      url: "https://www.linkedin.com/jobs/view/business-analyst-intern-at-deloitte",
      date: "2025-04-10"
    },
    
    // Machine Learning interns
    { 
      company: "OpenAI",
      position: "Machine Learning",
      location: "San Francisco, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/machine-learning-intern-at-openai",
      date: "2025-04-08"
    },
    
    // Financial Analyst interns
    { 
      company: "JP Morgan Chase",
      position: "Financial Analyst",
      location: "New York, NY",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J.P._Morgan_Logo_2008_1.svg/1200px-J.P._Morgan_Logo_2008_1.svg.png",
      url: "https://www.linkedin.com/jobs/view/financial-analyst-intern-at-jpmorgan-chase",
      date: "2025-04-09"
    },
    
    // Content Creation interns (declining)
    { 
      company: "BuzzFeed",
      position: "Content Creation",
      location: "New York, NY",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BuzzFeed.svg/1200px-BuzzFeed.svg.png",
      url: "https://www.linkedin.com/jobs/view/content-creation-intern-at-buzzfeed",
      date: "2025-04-10"
    },
    
    // Project Management interns (declining)
    { 
      company: "Twitter",
      position: "Project Management",
      location: "San Francisco, CA",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png",
      url: "https://www.linkedin.com/jobs/view/project-management-intern-at-twitter",
      date: "2025-04-09"
    },
    
    // Administrative Assistant interns (declining)
    { 
      company: "Walmart",
      position: "Administrative Assistant",
      location: "Bentonville, AR",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1200px-Walmart_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/administrative-assistant-intern-at-walmart",
      date: "2025-04-08"
    },
    
    // Human Resources interns (declining)
    { 
      company: "Target",
      position: "Human Resources",
      location: "Minneapolis, MN",
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo.svg/1200px-Target_Corporation_logo.svg.png",
      url: "https://www.linkedin.com/jobs/view/human-resources-intern-at-target",
      date: "2025-04-09"
    }
  ];
  
  return { roles, rawData };
};

// Process job data into our format (for future use with real APIs)
export const processJobsData = (jobsData: any[]): RoleData[] => {
  // Skip the first item which is usually metadata
  const jobs = jobsData;
  
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
  
  if (title.includes("software") || title.includes("frontend") || title.includes("backend") || title.includes("full stack")) {
    return "Software Engineering";
  } else if (title.includes("data") && (title.includes("scientist") || title.includes("science"))) {
    return "Data Science";
  } else if (title.includes("product") && title.includes("manag")) {
    return "Product Management";
  } else if ((title.includes("ux") || title.includes("ui")) && title.includes("design")) {
    return "UX/UI Design";
  } else if (title.includes("growth") && title.includes("market")) {
    return "Growth Marketing";
  } else if (title.includes("business") && title.includes("analyst")) {
    return "Business Analyst";
  } else if (title.includes("machine") && title.includes("learning")) {
    return "Machine Learning";
  } else if (title.includes("financial") && title.includes("analyst")) {
    return "Financial Analyst";
  } else if (title.includes("content") && (title.includes("writ") || title.includes("creat"))) {
    return "Content Creation";
  } else if (title.includes("project") && title.includes("manag")) {
    return "Project Management";
  } else if (title.includes("admin") || title.includes("assistant")) {
    return "Administrative Assistant";
  } else if (title.includes("human") && title.includes("resource")) {
    return "Human Resources";
  } else {
    // Return the original title if no match
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
};

// Get companies hiring for a specific role
export const getCompaniesForRole = (jobsData: any[], role: string): Company[] => {
  if (!jobsData || !jobsData.length) return [];
  
  // Filter jobs for the specific role
  return jobsData
    .filter((job: any) => {
      return job.position === role;
    })
    .map((job: any) => ({
      name: job.company || "Unknown Company",
      role: `${job.position} Intern`,
      location: job.location || "Remote",
      url: job.url || job.apply_url || null,
      logo: job.company_logo || job.logo || null,
      date: job.date ? new Date(job.date).toLocaleDateString() : "Recent"
    }))
    .slice(0, 20); // Limit to 20 companies
};
