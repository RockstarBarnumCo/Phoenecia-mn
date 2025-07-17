"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, Building, Users } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer for E-commerce Platform",
      company: "Cedar Tech Solutions",
      location: "Remote (Lebanon preferred)",
      type: "Full-time Contract",
      budget: "$3,000 - $5,000",
      duration: "3-6 months",
      posted: "2 hours ago",
      proposals: 12,
      description:
        "We're looking for an experienced React developer to build a modern e-commerce platform for our Lebanese retail client expanding internationally.",
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
      verified: true,
    },
    {
      id: 2,
      title: "Arabic-English Content Writer & Translator",
      company: "Global Lebanese Media",
      location: "Remote Worldwide",
      type: "Part-time",
      budget: "$1,500 - $2,500",
      duration: "Ongoing",
      posted: "5 hours ago",
      proposals: 8,
      description:
        "Seeking a bilingual content creator to produce engaging content for our Lebanese diaspora audience across multiple platforms.",
      skills: ["Arabic", "English", "Content Writing", "Translation", "SEO"],
      verified: true,
    },
    {
      id: 3,
      title: "Mobile App UI/UX Designer",
      company: "Phoenicia Fintech",
      location: "Beirut, Lebanon / Remote",
      type: "Project-based",
      budget: "$2,000 - $4,000",
      duration: "2-3 months",
      posted: "1 day ago",
      proposals: 15,
      description:
        "Design a user-friendly mobile banking app specifically tailored for Lebanese users in Lebanon and the diaspora.",
      skills: ["Figma", "Mobile Design", "User Research", "Prototyping", "Arabic UI"],
      verified: false,
    },
    {
      id: 4,
      title: "Digital Marketing Manager for Restaurant Chain",
      company: "Taste of Lebanon Group",
      location: "Dubai, UAE",
      type: "Full-time",
      budget: "$4,000 - $6,000",
      duration: "12+ months",
      posted: "2 days ago",
      proposals: 23,
      description: "Lead digital marketing efforts for our expanding Lebanese restaurant chain across the Gulf region.",
      skills: ["Digital Marketing", "Social Media", "PPC", "Analytics", "Arabic Marketing"],
      verified: true,
    },
    {
      id: 5,
      title: "Python Data Analyst for Market Research",
      company: "Lebanese Business Intelligence",
      location: "Remote",
      type: "Contract",
      budget: "$2,500 - $3,500",
      duration: "1-2 months",
      posted: "3 days ago",
      proposals: 7,
      description: "Analyze market trends and consumer behavior data for Lebanese businesses expanding to new markets.",
      skills: ["Python", "Data Analysis", "SQL", "Tableau", "Market Research"],
      verified: true,
    },
    {
      id: 6,
      title: "WordPress Developer for News Portal",
      company: "Lebanon Today Media",
      location: "Montreal, Canada",
      type: "Project-based",
      budget: "$1,000 - $2,000",
      duration: "1 month",
      posted: "1 week ago",
      proposals: 19,
      description: "Develop and customize a WordPress-based news portal for the Lebanese community in North America.",
      skills: ["WordPress", "PHP", "JavaScript", "MySQL", "Responsive Design"],
      verified: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">Phoenecia Online</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/browse" className="text-sm font-medium hover:text-red-600 transition-colors">
            Browse Talent
          </Link>
          <Link href="/jobs" className="text-sm font-medium text-red-600">
            Find Work
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
            About
          </Link>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            Post a Job
          </Button>
        </nav>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar Filters */}
        <aside className="w-80 border-r bg-gray-50 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Job Filters</h3>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Search Jobs</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Job title, skills..." className="pl-10" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Job Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="project">Project-based</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="lebanon">Lebanon</SelectItem>
                  <SelectItem value="uae">UAE</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Budget Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                  <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                  <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                  <SelectItem value="5000+">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Find Work Opportunities</h1>
              <Select defaultValue="recent">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  <SelectItem value="proposals">Fewest Proposals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-gray-600">{jobs.length} jobs available for Lebanese professionals</p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        {job.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Verified Client
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600 mb-1">{job.budget}</div>
                      <div className="text-sm text-gray-600">{job.type}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{job.proposals} proposals</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline">Save Job</Button>
                      <Button className="bg-red-600 hover:bg-red-700">Submit Proposal</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
