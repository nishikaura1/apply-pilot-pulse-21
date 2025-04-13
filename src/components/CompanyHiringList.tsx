
import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap } from "lucide-react";

export interface Company {
  name: string;
  role: string;
  location?: string;
  url?: string;
  logo?: string;
  date?: string;
}

interface CompanyHiringListProps {
  isOpen: boolean;
  onClose: () => void;
  companies: Company[];
  role: string;
}

const CompanyHiringList = ({ isOpen, onClose, companies, role }: CompanyHiringListProps) => {
  if (companies.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Companies hiring for {role}
            </DialogTitle>
            <DialogDescription>
              No companies found hiring for this internship role currently. Try refreshing the data or check back later.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={onClose}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Companies hiring for {role}
          </DialogTitle>
          <DialogDescription>
            Found {companies.length} companies currently hiring for this internship role
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Posted</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium flex items-center gap-2">
                    {company.logo && (
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="w-6 h-6 rounded-full"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                    {company.name}
                  </TableCell>
                  <TableCell>{company.role}</TableCell>
                  <TableCell>{company.location || "Remote"}</TableCell>
                  <TableCell>{company.date || "Recent"}</TableCell>
                  <TableCell className="text-right">
                    {company.url && (
                      <a 
                        href={company.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700"
                      >
                        Apply <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyHiringList;
