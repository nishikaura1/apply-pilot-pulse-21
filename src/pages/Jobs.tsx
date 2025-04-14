import { useEffect, useState } from "react";
import axios from "axios";

const SHEET_ID = "your-google-sheet-id"; // get from the Sheet URL
const API_KEY = "your-google-api-key";
const RANGE = "Sheet1"; // name of your sheet tab

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const rows = response.data.values; // Sheet rows
        const headers = rows[0];
        const formattedJobs = rows.slice(1).map((row: string[]) => {
          return {
            title: row[0],
            company: row[1],
            location: row[2],
            applyLink: row[3],
            postedDate: row[4],
          };
        });
        setJobs(formattedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">🚀 Available Jobs</h2>

      <input
        type="text"
        placeholder="Search by title or company"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 mb-6 rounded-lg border border-gray-300"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company} — {job.location}</p>
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
