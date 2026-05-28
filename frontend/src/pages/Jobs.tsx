// This page shows all jobs. Right now it uses fake data (hardcoded).
// Later we'll replace this with real data from our Node.js backend.

import { useState } from "react"
import JobCard from "../components/JobCard"
import type { Job } from "../types/Job"

// Fake data for now — we'll replace with API call later
const fakeJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp LK",
    location: "Colombo",
    salary_range: "LKR 150,000 - 200,000",
    skills_required: "React, TypeScript, Tailwind",
    created_at: "2026-05-20"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Sysco LABS",
    location: "Remote",
    salary_range: "LKR 200,000 - 280,000",
    skills_required: "Node.js, MySQL, Express",
    created_at: "2026-05-19"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "IFS",
    location: "Colombo",
    salary_range: "LKR 250,000 - 350,000",
    skills_required: "React, Node.js, MongoDB",
    created_at: "2026-05-18"
  },
  {
    id: 4,
    title: "Mobile Developer",
    company: "Rootcode",
    location: "Hybrid",
    salary_range: "LKR 180,000 - 240,000",
    skills_required: "Flutter, Dart, Firebase",
    created_at: "2026-05-17"
  },
]

const Jobs = () => {
  const [search, setSearch] = useState("")

  // Filter jobs by title or company as user types
  const filtered = fakeJobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">All Jobs</h1>
        <p className="text-gray-500 mb-6">{filtered.length} jobs found</p>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title or company..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-8 focus:outline-none focus:border-indigo-400"
        />

        {/* Job cards */}
        <div className="flex flex-col gap-4">
          {filtered.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Jobs