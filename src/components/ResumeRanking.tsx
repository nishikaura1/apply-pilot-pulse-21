
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Upload, Check } from "lucide-react";

const ResumeRanking = () => {
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
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center mb-6">
              <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <div className="mb-2">
                <Button variant="outline" className="relative">
                  <span>Upload your resume</span>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </Button>
              </div>
              <p className="text-sm text-gray-500">PDF, DOCX, or TXT (Max 5MB)</p>
            </div>
          </div>

          {/* Sample Resume Score (will be hidden until upload) */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <div className="font-medium">Your Resume Score</div>
                <div className="text-right">
                  <span className="text-lg font-bold">72</span>
                  <span className="text-sm text-gray-500">/100</span>
                </div>
              </div>
              <Progress value={72} className="h-3 bg-gray-100" />
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

            <div className="text-center">
              <Button className="bg-gradient-to-r from-pilot-blue-500 to-pilot-purple-500 text-white">
                Get Detailed Analysis
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeRanking;
