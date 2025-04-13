
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Upload, Check, FileCheck, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

// Sample job listings for matching (in a real app, this would come from an API)
const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    match: 92,
    keywords: ["React", "TypeScript", "UI/UX"]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    match: 85,
    keywords: ["JavaScript", "Python", "Algorithms"]
  },
  {
    id: 3,
    title: "UX Design Co-op",
    company: "Microsoft",
    location: "Redmond, WA",
    match: 78,
    keywords: ["Design", "Figma", "User Research"]
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Startup Inc.",
    location: "San Francisco, CA",
    match: 75,
    keywords: ["React", "Node.js", "MongoDB"]
  }
];

const ResumeRanking = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showMatches, setShowMatches] = useState(false);
  const [resumeScore, setResumeScore] = useState(72);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      // Check file type
      const fileType = selectedFile.type;
      if (
        fileType !== "application/pdf" && 
        fileType !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
        fileType !== "text/plain"
      ) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOCX, or TXT file",
          variant: "destructive"
        });
        return;
      }
      
      setFile(selectedFile);
      setIsUploaded(true);
      toast({
        title: "Resume uploaded",
        description: "Your resume has been successfully uploaded",
      });
    }
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowMatches(true);
      toast({
        title: "Analysis complete",
        description: "We've found jobs that match your resume",
      });
    }, 2000);
  };

  const resetUpload = () => {
    setFile(null);
    setIsUploaded(false);
    setShowMatches(false);
  };

  return (
    <div className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Resume Ranking</CardTitle>
          <CardDescription>
            See how your resume compares to other applicants for similar roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            {/* Resume Upload Section */}
            {!isUploaded ? (
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center mb-6">
                <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <div className="mb-2">
                  <Button variant="outline" className="relative">
                    <span>Upload your resume</span>
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.txt"
                    />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">PDF, DOCX, or TXT (Max 5MB)</p>
              </div>
            ) : (
              <div className="border-2 border-green-200 rounded-lg p-6 text-center mb-6 bg-green-50 dark:bg-green-900/10">
                <div className="flex items-center justify-center mb-4">
                  <FileCheck className="h-10 w-10 text-green-500 mr-2" />
                  <Check className="h-6 w-6 text-white bg-green-500 rounded-full p-1" />
                </div>
                <div className="mb-4">
                  <p className="font-medium">{file?.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file?.size && (file.size / 1024).toFixed(0)) || 0} KB
                  </p>
                </div>
                <div className="flex justify-center gap-2">
                  {!showMatches && (
                    <Button
                      onClick={analyzeResume}
                      disabled={isAnalyzing}
                      className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white"
                    >
                      {isAnalyzing ? "Analyzing..." : "Find Matching Jobs"}
                    </Button>
                  )}
                  <Button variant="outline" size="icon" onClick={resetUpload}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Resume Score Section */}
          {(isUploaded && !isAnalyzing) && (
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <div className="font-medium">Your Resume Score</div>
                  <div className="text-right">
                    <span className="text-lg font-bold">{resumeScore}</span>
                    <span className="text-sm text-gray-500">/100</span>
                  </div>
                </div>
                <Progress value={resumeScore} className="h-3 bg-gray-100" />
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>Below Average</span>
                  <span>Average</span>
                  <span>Above Average</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Improvement Opportunities</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-red-500">✕</div>
                    <div>
                      <div className="font-medium">Missing quantifiable results</div>
                      <div className="text-sm text-gray-600">Add metrics and outcomes to your achievements</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-red-500">✕</div>
                    <div>
                      <div className="font-medium">Weak technical skills section</div>
                      <div className="text-sm text-gray-600">Add more relevant technologies for this role</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-green-500"><Check className="h-4 w-4" /></div>
                    <div>
                      <div className="font-medium">Strong education section</div>
                      <div className="text-sm text-gray-600">Your academic credentials are well presented</div>
                    </div>
                  </div>
                </div>
              </div>

              {!showMatches && (
                <div className="text-center">
                  <Button 
                    className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white"
                    onClick={analyzeResume}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? "Analyzing..." : "Find Matching Jobs"}
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Job Matches Section */}
          {showMatches && (
            <div className="mt-8">
              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Jobs Matching Your Resume</h4>
                <div className="space-y-4">
                  {jobListings.map((job) => (
                    <div 
                      key={job.id} 
                      className="border rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-medium">{job.title}</h5>
                          <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                        </div>
                        <Badge className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500">
                          {job.match}% Match
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {job.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 flex justify-end">
                        <Button size="sm">View Job</Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">See All Matches</Button>
                </div>
              </div>
            </div>
          )}
          
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeRanking;
